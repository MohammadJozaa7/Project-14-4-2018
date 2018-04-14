angular.module('myApp')
.component('list', {
  bindings: {
    items: '<',
  },
  controller: function() {
  	
  },
  onClick: function f(){
  		console.log('YOU PRESS ME')
  	},
  templateUrl: '/templates/list.html'
});