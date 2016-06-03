// Angular module

// create our app. injecting ngRoute/ngTagsInput directives
var app = angular.module('QuizApp', ['ngRoute']);
//
//'ngAnimate',

// routes
// when just #/ ... goes to /pages/login.html, then use loginCtrl
app.config(['$routeProvider', '$locationProvider', '$httpProvider',
  function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
      templateUrl: '/views/main.html',
      controller: 'homeCtrl'
    }).when('/quizzes', {
      templateUrl: '/views/quizzes.html',
      controller: 'quizzesCtrl'
    }).when('/make-quiz', {
      templateUrl: '/views/make-quiz.html',
      controller: 'makeQuizCtrl'
    })
}]);