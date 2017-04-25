(function () {
  'use strict';

  angular
  .module('clickdummy')
  .factory('JointElementView', JointElementView);


  /** @ngInject */
  function JointElementView($window, _, CustomModalService) {

    function initElementView() {
      $window.joint.shapes.html.ElementView = $window.joint.dia.ElementView.extend({

        mouseover: ShowPorts,
        mouseout: HidePorts,

        initialize: function () {
          $window.joint.dia.ElementView.prototype.initialize.apply(this, arguments);
        },

        render: function () {
          $window.joint.dia.ElementView.prototype.render.apply(this, arguments);

          //Event for delete element
          this.$el.find('.delete-button-img').on('click', _.bind(function() {
            CustomModalService.showModalDialog(this.model.remove, this.model);
          }, this ));

          return this;
        },

        renderPorts: function () {
          var $inPorts = this.$('.inPorts').empty();
          var $outPorts = this.$('.outPorts').empty();
          var portTemplateIn = _.template(this.model.portMarkupOut);
          var portTemplateOut = _.template(this.model.portMarkupOut);

          _.each(_.filter(this.model.ports, function (p) {
            return p.type === 'in'
          }), function (port, index) {
            $inPorts.append($window.joint.V(portTemplateIn({id: index, port: port})).node);
          });

          _.each(_.filter(this.model.ports, function (p) {
            return p.type === 'out'
          }), function (port, index) {
            $outPorts.append($window.joint.V(portTemplateOut({id: index, port: port})).node);
          });
        },

        update: function () {
          // First render ports so that `attrs` can be applied to those newly created DOM elements
          // in `ElementView.prototype.update()`.
          this.renderPorts();

          $window.joint.dia.ElementView.prototype.update.apply(this, arguments);
        }
      });
    }

    function ShowPorts() {
      if (!this.model.attributes.attrs.isCreateCopy) {
        this.$el.find('.delete-button-img')
        .add(this.$el.find('.inPorts'))
        .add(this.$el.find('.outPorts'))
        .css({display: 'block'});
      }
    }

    function HidePorts() {
      angular.element('clickdummy').find('.delete-button-img, .inPorts, .outPorts')
      .css({display: 'none'});
    }

    return {
      init: function ($container) {
        initElementView($container);
      }
    };
  }

})();