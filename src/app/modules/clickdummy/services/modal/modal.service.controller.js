(function () {

  angular
  .module('clickdummy')
  .controller('ModalController', ModalController);

  /** @ngInject */
  function ModalController(close, removeFunction, context) {
    var vm = this;
    vm.close = function (result) {
      if (result == 'Yes') {
        removeFunction.call(context);
      }
      close(result);
    };
  }


})();