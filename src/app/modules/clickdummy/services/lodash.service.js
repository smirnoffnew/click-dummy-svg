(function () {
  'use strict';

  angular
  .module('clickdummy')
  .factory('_', lodash);


  /** @ngInject */
  function lodash($window) {
    return $window._;
  }

})();