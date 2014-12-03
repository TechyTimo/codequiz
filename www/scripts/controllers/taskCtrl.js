angular.module("codeQuiz")
  .controller("TaskCtrl", function ($scope, $routeParams, $location, $timeout, GameInstanceService, hoodieStore, hoodieAccount) {
    'use strict';
    var tasks = GameInstanceService.getGame($routeParams.category);
    tasks = typeof(tasks[0]) != "object" ? tasks : $.map(tasks, function(arr){ return arr[0]; });
    $scope.taskId = parseInt($routeParams.taskId, 10);
    $scope.task = tasks[$scope.taskId - 1];
    // $scope.task = typeof($scope.task) != "object" ? $scope.task : $scope.task[0];

    $scope.sumTasks = tasks.length;

    $scope.saveResult = function (result) {
      var results = GameInstanceService.getResults();
      results[$scope.taskId - 1] = result;
      if ($scope.taskId < $scope.sumTasks) {
        $location.path("/game/" + $routeParams.category + "/" + ($scope.taskId + 1));
      } else {

        hoodieStore.add('results', {
          gameCategroy: $routeParams.category,
          results: results,
          tasks: tasks,
          user: hoodieAccount.username
        })
          .then(function(savedObject) {
            $location.path("/game/" + $routeParams.category + "/summary");
          });
      }

    };

    $timeout(prettyPrint, 0);

  });