angular.module('TodoApp').config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/todo', {
        templateUrl: 'views/pages/static/todo.html',
        controller: 'TodoIndexController'
    }).when('/', {
        templateUrl: 'views/pages/static/todo.html',
        controller: 'TodoIndexController'
    }).when('/404', {
        templateUrl: 'views/pages/error/404.html'
    }).otherwise('/404');
});