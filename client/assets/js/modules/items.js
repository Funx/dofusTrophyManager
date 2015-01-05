(function(){


angular.module('items', [])

.directive('item', function() {
  return {
    restrict: 'E',
    scope: {
      item: '=info'
    },
    templateUrl : 'templates/item.html'
  };
})

.controller('ItemCtrl', ['$scope', function($scope){

}])

.controller('ItemListCtrl', ['$scope', function($scope) {
  $scope.items = [];

  for(var i = 0; i < 15; i++){
    var trophy = {
      title: 'Card' + i,
      content: 'Swag',
      img: 'robuste-majeur',
      category: 'mineur',
      craftPrice: Math.round(10 + Math.random() * 100)*1000,
      sellPrice: Math.round(10 + Math.random() * 100)*1000
    };
    $scope.items.push(trophy);
  }

  $scope.calcBenefits = function(item,percentage){

    var sellPrice = item.sellPrice * 0.9;

    if (percentage){
      return Math.round((sellPrice) / item.craftPrice * 100)-100
    }
    else{
      return sellPrice - item.craftPrice;
    }

  };

  $scope.isLucrative = function(item){
    if($scope.calcBenefits(item) > 400000 || $scope.calcBenefits(item,true)>50){
      return true;
    }else{
      return false;
    }
  };

  $scope.toggleSelect = function(item){
    if(!item.isSelected){
      item.isSelected = true;
    }else{
      item.isSelected = false;
    }
    //TODO other stuff
  };


}]);

})();
