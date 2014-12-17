// js/controllers/main.js

angular.module('todoController', [])

.controller('mainController', ['Todos', function(Todos) {
  $scope = this;
  $scope.formData = {};
  $scope.placeHolder = "Nom de l'objet";
  $scope.todos = [];

  // when landing on the page, get all todos and show them
  Todos.get()
    .success(function(data) {
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  // when submitting the add form, send the text to the node API
  $scope.createTodo = function() {
    //var todoIndex = $scope.todos.push(self.formData);
    // call the create function from our service (returns a promise object)
    Todos.create($scope.formData)
      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        //$scope.todos[todoIndex - 1]._id = data._id;
        $scope.todos.push(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
    $scope.formData = {}; // clear the form so our user is ready to enter another

  };

  // delete a todo after checking it
  $scope.deleteTodo = function(id,index) {
    $scope.todos.splice(index, 1);
    Todos.delete(id)
      // if successful creation, call our get function to get all the new todos
      .success(function(data) {
        //notifySuccess; then realy delete item in front
      });
  };

}]);
