(function () {
  'use strict';

  angular
  .module('clickdummy')
  .factory('JointLink', JointLink);


  /** @ngInject */
  function JointLink($window) {

    function initLink() {
      $window.joint.shapes.html.Link = $window.joint.dia.Link.extend({

        defaults: {
          type: 'myclass.Link',
          z: -1,
          connector: function (sourcePoint, targetPoint) {
            var d = ['M', sourcePoint.x, sourcePoint.y, targetPoint.x, targetPoint.y];

            var newSourcePointX = sourcePoint.x + 20;
            if(targetPoint.x > newSourcePointX){
              d.splice(3, 0, newSourcePointX, sourcePoint.y);
            }

            var newTargetPointX = targetPoint.x - 20;
            if(newTargetPointX > newSourcePointX){
              d.splice(d.length-2, 0, newTargetPointX, targetPoint.y);

              d.splice(d.length, 0, 'L', targetPoint.x-12, targetPoint.y-4);
              d.splice(d.length, 0, 'L', targetPoint.x-12, targetPoint.y+4);
              d.splice(d.length, 0, 'L', targetPoint.x, targetPoint.y);
            }

            return d.join(' ');
          },
          attrs: {
            '.connection' : {
              'stroke-width' :  1,
              'sourceMarker' : {
                type: 'circle', // SVG Circle
                fill: '#666',
                stroke: '#333',
                r: 1, // radius of the circle
                cx: 1 // move the centre of the circle 5 pixels from the end of the path
              }
            }
            },
          smooth:false
        }
      });
    }

    return {
      init: function () {
        initLink();
      }
    };
  }

})();