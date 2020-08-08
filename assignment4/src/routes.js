(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/category.template.html',
    controller: 'CategoriesController as ctrl',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
      url:"/categories/{categoryShortName}/items",
      templateUrl: "src/templates/router-items.template.html",
      controller: "ItemsController as citem",
      resolve: {
        items: ["$stateParams","MenuDataService", function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategories($stateParams.categoryShortName);
        }]
    }
  });

}

})();
