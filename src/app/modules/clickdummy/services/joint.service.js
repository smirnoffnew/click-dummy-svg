(function () {
  'use strict';

  angular
  .module('clickdummy')
  .factory('joint', joint);


  /** @ngInject */
  function joint($window) {
    return $window.joint;
  }

})();