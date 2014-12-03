'use strict';

angular.module("codeQuiz")
  .factory("GameInstanceService", function (DataHolderService) {
    var tasks, results, taskz;

    function shuffle(o) { //v1.0
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    }

    return {
      clearGame: function () {
        tasks = undefined;
        results = [];
      },
      createGameFor: function (category) {
        this.clearGame();

        tasks = shuffle(DataHolderService.getTasksFor(category));
        // tasks.length = 5; //test length

        return tasks;
      },
      getGame: function (category) {
        if (!tasks) {
          this.createGameFor(category);
        }
        return tasks;
      },
      finishGame: function () {
        this.clearGame();
        // taskz = typeof(tasks[0]) != "object" ? tasks : $.map(tasks, function(arr){ return arr[0]; });
        // console.log(taskz);
        return tasks;
      },
      getResults: function () {
        return results;
      }
    };

  });