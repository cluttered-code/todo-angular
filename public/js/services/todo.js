angular.module("TodoApp")
    .factory('Todo', function NoteFactory($resource) {
        $http.defaults.useXDomain = true
        return $resource("http://todo-dev.clutterclan.com/todo/:id", {}, {
            update: {
                method: "PUT"
            }
        });
});