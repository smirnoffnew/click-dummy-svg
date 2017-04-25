(function () {
  'use strict';

  angular
  .module('clickdummy')
  .factory('JointGraph', JointGraph);


  /** @ngInject */
  function JointGraph($window) {
    return new $window.joint.dia.Graph();
  }

})();