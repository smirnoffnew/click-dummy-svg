(function () {
  'use strict';

  angular
  .module('clickdummy')
  .factory('JointElement', JointElementView);


  /** @ngInject */
  function JointElementView($window, _) {

    var widthElement = 150;
    var heightElement = 150;

    function initElement() {
      $window.joint.shapes.html.Element = $window.joint.shapes.basic.Generic.extend(_.extend({}, $window.joint.shapes.basic.PortsModelInterface, {
        markup: '<g class="rotatable">' +
        '<g class="scalable">' +
        '<rect class="secondRect"/>' +
        '<image class="image"/>' +
        '</g>' +
        '<g class="inPorts"/>' +
        '<g class="outPorts"/>' +
        '<g class="delete-button" transform="translate(60,-110)">' +
        '<image class="delete-button-img"/>' +
        '</g>' +
        '</g>',
        portMarkupIn: '<g class="port<%= id %>"><circle class="circleIn"/></g>',
        portMarkupOut: '<g class="port<%= id %>"><circle/><image class="port"/></g>',
        defaults: $window.joint.util.deepSupplement({
          type: 'html.Element',
          size: {width: widthElement, height: heightElement},
          inPorts: [],
          outPorts: [],
          attrs: {
            '.': {magnet: false},
            '.secondRect': {
              fill: '#fff59d', 'fill-opacity': 1,
              'stroke-width': 2, 'stroke': '#bdbdbd',
              width: widthElement - 35,
              height: heightElement - 35
            },
            '.inPorts circle': {'ref-x': 0, fill: 'white', type: 'input', magnet: 'passive'},
            '.outPorts circle': {'ref-x': 0, fill: 'white', type: 'output'},
            circle: {
              r: 11.5,
              blur: 3,
              magnet: true
            },
            '.circleIn': {
              r: 10,
              blur: 3,
              magnet: true
            },
            '.port' : {
              fill: '#fff', 'fill-opacity': 1,
              width: 25,
              height: 25,
              magnet: true,
              'ref-x': -12.5,
              'ref-y': -12.5,
              'xlink:href': 'https://img.clipartfest.com/1e314f36c70bbd3f231a52c55052c66c_royal-blue-right-round-icon-blue-arrow-right_256-256.png'
            },

            '.image': {
              width: widthElement - 70,
              height: heightElement - 70,
              'ref-x': .5, 'ref-y': .5, ref: 'rect', 'y-alignment': 'middle', 'x-alignment': 'middle'
            },

            '.delete-button-img': {
              'ref-x': 75,
              'ref-y': 100,
              width: '30px',
              height: '30px',
              'xlink:href': 'http://s1.iconbird.com/ico/2013/10/464/w512h5121380984637delete1.png'
            },

            elementTypeId: 'typeId',
            changePosition: 'static'
          }
        }, $window.joint.shapes.basic.Generic.prototype.defaults),

        getPortAttrs: function (portName, index, total, selector, type) {
          var attrs = {};
          var portClass = 'port' + index;
          var portSelector = selector + '>.' + portClass;
          var portCircleSelector = portSelector + '>circle';
          attrs[portCircleSelector] = {port: {id: portName || _.uniqueId(type), type: type}};
          attrs[portSelector] = {ref: 'rect', 'ref-y': (index + 0.5) * (1 / total)};
          if (selector === '.outPorts') {
            attrs[portSelector]['ref-dx'] = 0;
          }
          return attrs;
        }
      }));
    }

    return {
      init: function ($container) {
        initElement($container);
      }
    };
  }

})();