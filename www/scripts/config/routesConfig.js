"use strict";


angular.module('codeQuiz')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/WelcomeView.html'
      })
      .when('/welcome/signIn', {
        controller: 'SignInCtrl',
        templateUrl: 'views/loginForm.html'
      })
      .when('/welcome/signUp', {
        controller: 'SignUpCtrl',
        templateUrl: 'views/loginForm.html'
      })
      .when('/game', {
        controller: 'MainCtrl',
        templateUrl: 'views/MainView.html'
      })
      .when("/game/:taskId", {
        templateUrl: "views/taskView.html",
        controller: "taskCtrl"
      })
      .otherwise({
        redirectTo: '/'
      });
  });