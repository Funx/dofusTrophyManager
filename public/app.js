// public/app.js
var app = dofusTrophyManager = angular.module('dofusTrophyManager', ['mm.foundation']);
app.controller('mainController', ['$http', function($http) {
  self = this;
  this.formData = {};

  // when landing on the page, get all todos and show them
  $http.get('/api/todos')
    .success(function(data) {
      self.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error: ' + data);
    });

  // when submitting the add form, send the text to the node API
  this.createTodo = function() {
    $http.post('/api/todos', self.formData)
      .success(function(data) {
        self.formData = {}; // clear the form so our user is ready to enter another
        self.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // delete a todo after checking it
  this.deleteTodo = function(id) {
    $http.delete('/api/todos/' + id)
      .success(function(data) {
        self.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

}]);
