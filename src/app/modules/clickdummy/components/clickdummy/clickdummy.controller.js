(function () {
  'use strict';

  angular
  .module('clickdummy')
  .controller('ClickdummyController', ClickdummyController);


  /** @ngInject */
  function ClickdummyController($window, $element, InitializeCellParams, JointPaper, JointElementView, JointElement, JointGraphCells, JointLink) {
    initGraph();

    function initGraph() {
      $window.joint.shapes.html = $window.joint.shapes.html || {};

      JointLink.init();
      JointElement.init();
      JointElementView.init();
      JointPaper.init($element.find('#paper-html-elements'));

      addInitialGraphCells();
      cloneElements();
    }

    function addInitialGraphCells() {
      JointGraphCells.addCells(InitializeCellParams);
    }

    function cloneElements() {
      JointPaper.getPaper().on({
        'element:pointerdown': onElementPointerDown,
        'element:pointerup': onElementPointerUp,
        'cell:pointerup' : removeLinksWithoutPorts
      });

      function onElementPointerDown(cellView) {

        var isCreateCopy = cellView.model.attributes.attrs.isCreateCopy;

        if (isCreateCopy) {
          var newModelParams = angular.copy(cellView.model.initialParams);

          cellView.$el.find('.firstRect').css({'pointer-events': 'auto'});
          cellView.model.attributes.attrs.isCreateCopy = false;

          JointGraphCells.addCell(newModelParams);
        }
      }

      function removeLinksWithoutPorts (cellView) {
        var elem = cellView.model;
        var source = elem.get('source');
        var target = elem.get('target');
        if (elem instanceof $window.joint.dia.Link && (!source.id || !target.id)) {
          elem.remove()
        }
      }

      function onElementPointerUp (cellView) {
        var elem = cellView.model;
        var position = cellView.model.prop('position');
        if ( position.x < 350) {
          elem.remove();
        }
      }

    }
  }

})();


