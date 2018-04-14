angular.module('myApp')
.controller('myCtrl', function(itemsService) {
  itemsService.getAll((data) => {
    this.items = data;
  });
})
.component('app', {
  bindings: {},
  controller: 'myCtrl',
  templateUrl: '/templates/app.html'
});