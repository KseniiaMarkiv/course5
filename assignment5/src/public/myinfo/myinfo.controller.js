(function() {
'use strict';

  angular.module('public')
  .controller('MyInfoShowController', MyInfoShowController);

  MyInfoShowController.$inject = ['userInfo'];
  function MyInfoShowController(userInfo) {
    var ctrl = this;
    ctrl.userInfo = userInfo;
    ctrl.saved = !angular.equals(userInfo, {});
  }
})();
