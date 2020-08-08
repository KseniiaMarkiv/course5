(function () {
  angular.module("MenuApp")
  .controller("ItemsController", ItemsController);

  ItemsController.$inject = ["items"];
  function ItemsController(items) {
    var citem = this;
    citem.items = items;
  }
})();