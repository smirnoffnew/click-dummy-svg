(function () {
  'use strict';

  angular
  .module('clickdummy')
  .service('JointGraphCells', JointGraphCells);


  /** @ngInject */
  function JointGraphCells($window, _, JointGraph) {
    var vm = this;

    vm.createElement = createElement;
    vm.addCell = addCell;
    vm.addCells = addCells;


    function createElement(params) {
      return new $window.joint.shapes.html.Element(params);
    }

    function addCell(params) {
      var newParams = angular.copy(params);
      var element = this.createElement(newParams);
      element.initialParams = newParams;

      JointGraph.addCell(element);
    }

    function addCells(params) {
      _.forEach(params, function(elemParams) {
        this.addCell(elemParams);
      }.bind(this));
    }
  }

})();