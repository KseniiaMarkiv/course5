(function () {
"use strict";

  angular.module('public')
  .controller('SignUpRegistrationController', SignUpRegistrationController);

  SignUpRegistrationController.$inject = ['MyInfoService', 'MenuService', 'ApiPath'];
  function SignUpRegistrationController(MyInfoService, MenuService, ApiPath) {
      var ctrl = this;
      ctrl.userInfo = [];
      ctrl.saved = false;
      ctrl.saveCode = false;
      ctrl.itemShow = false;
      ctrl.basePath = ApiPath;

      ctrl.setMyinfo = function() {
        MyInfoService.setMyinfo(ctrl.userInfo);
        ctrl.saved = true;
      };
      ctrl.validateFavdish = function() {
        ctrl.saveCode = false;
        ctrl.itemShow = false;  // сохранить сообщение  

          if(typeof ctrl.userInfo.favoriteDish === 'undefined') return; // проверка, чтобы сохранить инфу в 'My info'  
          if(ctrl.userInfo.favoriteDish.trim() === false) return;

            MenuService.getMenuItem(ctrl.userInfo.favoriteDish)
              .then(
                function(response) {                    
                    ctrl.userInfo.MenuItem = response.data;
                    ctrl.saveCode = true;
                    ctrl.itemShow = true;
                },
                function(response) {                    
                    ctrl.itemShow = true;
                }); // then
          }; // if
    } // function SignUpRegistrationController
})();
