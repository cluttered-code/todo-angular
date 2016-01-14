angular.module("TodoApp")
    .factory('Todo', function NoteFactory($resource) {
        return $resource("http://todo-dev.clutterclan.com/todo/:id", {}, {
            update: {
                method: "PUT"
            }
        });
});