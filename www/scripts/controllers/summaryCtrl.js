'use strict';

angular.module("codeQuiz")
  .controller("SummaryCtrl", function ($scope, $location, $routeParams, GameInstanceService) {
    $scope.tasks = GameInstanceService.getGame($routeParams.category);
    console.log($scope.tasks);
    var tasks = GameInstanceService.getGame($routeParams.category);
    console.log(tasks);

    // $scope.tasks = typeof(tasks[0]) != "object" ? tasks : $.map(tasks, function(arr){ return arr[0]; });
    $scope.results = GameInstanceService.getResults();
  });