angular.module("TodoApp")
    .controller("TodoIndexController", function($scope, $routeParams, Todo) {
        $scope.todos = Todo.query();
});