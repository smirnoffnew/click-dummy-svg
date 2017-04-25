(function () {
  'use strict';

  angular
  .module('clickdummy')
  .factory('JointPaper', JointPaper);


  /** @ngInject */
  function JointPaper($window, JointGraph, _) {
    var paper;

    return {
      init: function ($element) {
        paper = new $window.joint.dia.Paper({
          el: $element[0],
          width: $window.innerWidth,
          height: $window.innerHeight,
          gridSize: 1,
          model: JointGraph,
          interactive: {vertexAdd: false},
          perpendicularLinks: false,
          snapLinks: {radius: 75},
          linkPinning: false,
          highlighting: {
            'default': {
              name: 'stroke',
              options: {
                padding: 0,
                rx: 5,
                ry: 5,
                attrs: {
                  'stroke-width': 0,
                  stroke: '#FF0000'
                }
              }
            },
            'embedding': {
              name: 'addClass',
              options: {
                className: 'highlighted-parent'
              }
            }
          },

          defaultLink: function(/*elementView*/) {
            return new $window.joint.shapes.html.Link;
          },
          linkView: $window.joint.dia.LinkView.extend({
            options: _.defaults({
              doubleLinkTools: true
            }, $window.joint.dia.LinkView.prototype.options),
            getConnectionPoint: function() { // fix start/end coordinates
              var self = angular.copy(this);

              self.sourceBBox.height = 0;
              self.sourceBBox.width = 0;

              self.targetBBox.height = 0;
              self.targetBBox.width = 0;


              var coordinats = $window.joint.dia.LinkView.prototype.getConnectionPoint.apply(self, arguments);
              coordinats.x +=10;
              coordinats.y +=10;


              return coordinats;
            }
          })
        });
      },
      getPaper: function () {
        return paper;
      }

    };

  }

})();