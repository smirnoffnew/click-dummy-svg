(function () {
  'use strict';

  angular
  .module('clickdummy')
  .service('CustomModalService', CustomModalService);

  /** @ngInject */
  function CustomModalService(ModalService) {

    var vm = this;
    vm.showModalDialog = showModalDialog;

    function showModalDialog(removeFunction, context) {
      /** @ngInject */
      ModalService.showModal({
        templateUrl: 'app/modules/clickdummy/services/modal/modal.template.html',
        controller: 'ModalController',
        controllerAs: 'vm',
        inputs: {
          removeFunction: removeFunction,
          context: context
        }
      })
    }
  }

})();