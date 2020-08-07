(function() {
  'use strict';

  angular.module("NarrowItDownApp", [])
  .controller("NarrowItDownController", NarrowItDownController)
  .service("MenuSearchService", MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'displaySearch.html',
      scope:{
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'dlist',
      bindToController: true
    };
    return ddo;
  } // function FoundItemsDirective

  function FoundItemsDirectiveController(){}

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";
    menu.getMatchedMenuItems = function() {
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
      promise.then(function(response) {
        menu.items = response;
      })
    };
    menu.removeItem = function(index){
      menu.items.splice(index,1);
    }
  } // function NarrowItDownController

  MenuSearchService.$inject = ['$http','ApiBasePath'];
  function MenuSearchService($http,ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
    return $http({
        method:"GET",
        url:(ApiBasePath + "/menu_items.json")
    }).then(function (result) {
    // process result and only keep items that match
    var foundItems = result.data.menu_items;

    return foundItems.filter(function(value){
          return (searchTerm!==""&&value.description.indexOf(searchTerm)!==-1);
        }) // return foundItems

    // return processed items
    return foundItems;
});  // .then(function (result) 
    } // service.getMatchedMenuItems
  } // function MenuSearchService

})(); // IIFE


