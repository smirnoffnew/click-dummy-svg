(function () {
  'use strict';

  angular
  .module('clickdummy')
  .component('clickdummy', {
    transclude: true,
    require: {},
    bindings: {},
    controller: 'ClickdummyController',
    controllerAs: 'vm',
    templateUrl: 'app/modules/clickdummy/components/clickdummy/clickdummy.html'
  });
})();


