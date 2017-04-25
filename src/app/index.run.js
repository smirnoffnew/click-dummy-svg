(function() {
  'use strict';

  angular
    .module('jointJs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
