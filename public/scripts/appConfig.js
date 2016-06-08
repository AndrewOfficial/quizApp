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
    }).when('/take-quiz/:quizID', {
      templateUrl: '/views/take-quiz.html',
      controller: 'takeQuizCtrl'
    }).when('/overlook-quiz/:quizID/:subID', {
      templateUrl: '/views/overlook-quiz.html',
      controller: 'overlookQuizCtrl'
    })
    //  .when('/', {
    //  templateUrl: '/views/login.html',
    //  controller: 'loginCtrl'
    //}).when('/register', {
    //  templateUrl: '/views/register.html',
    //  controller: 'registerCtrl'
    //}).when('/bridge/', {
    //  templateUrl: '/views/bridge.html',
    //  controller: 'bridgeCtrl'
    //})
}]);