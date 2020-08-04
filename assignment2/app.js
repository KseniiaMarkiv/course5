(function () {
'use strict';

  var buy = [
    {name: 'Bread', quantity: '1 item'},
    {name: 'Pears', quantity: '4 kgs'},
    {name: 'Tea', quantity: '2 bags'},
    {name: 'Cucember', quantity: '10 kgs'}
  ];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemAdder = this;

  itemAdder.buy = ShoppingListCheckOffService.getBuy();

  itemAdder.removeItem = function (itemName, quantity, index) {
    ShoppingListCheckOffService.removeItem(itemName, quantity, index);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

    showList.bougth = ShoppingListCheckOffService.getBougth();
}


function ShoppingListCheckOffService() {
    var service = this;

    var bougth = [];

    service.removeItem = function (itemName, quantity, index) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      buy.splice(index, 1);
      bougth.push(item);
    };

    service.getBuy = function () {
      return buy;
    };

    service.showBougth = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      bougth.push(item);
    };

    service.getBougth = function () {
      return bougth;
    };
  };

})();
