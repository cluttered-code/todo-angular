angular.module("TodoApp")
    .controller("TodoIndexController", function($scope, $routeParams, Todo) {
        $scope.todos = [{name: 'foo'}]; //Todo.query();
});