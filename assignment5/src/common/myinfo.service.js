(function () {
"use strict";

  angular.module('common')
  .service('MyInfoService', MyInfoService);

  MyInfoService.$inject = [];
  function MyInfoService() {
    var service = this;
    service.myInfo = {};

    service.setMyinfo = function(myInfo) {
        service.completed = true;
        service.myInfo = myInfo;
    };

    service.getMyinfo = function () {
        return service.myInfo;
    };
  } // function MyInfoService
})();
