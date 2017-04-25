(function () {
  'use strict';

  angular
  .module('clickdummy')
  .constant('InitializeCellParams', [
    {
      position: {x: 10, y: 10},
      editableLabel: 'test label 1',
      inPorts: ['in'],
      outPorts: ['out'],
      attrs: {
        '.secondRect': { fill: '#0099cb'},
        isCreateCopy: true,
        '.image': {
          'xlink:href': 'http://s1.iconbird.com/ico/2013/9/452/w512h5121380476717calendar.png'
        },
        elementTypeId: 'staticElement_1'
      }
    },

    {
      position: {x: 180, y: 10},
      editableLabel: 'test label 2',
      inPorts: ['in'],
      outPorts: ['out'],
      attrs: {
        '.secondRect': { fill: '#8c589f'},
        isCreateCopy: true,
        '.image': {
          'xlink:href': 'http://s1.iconbird.com/ico/2013/9/452/w512h5121380477044settings.png'
        },
        elementTypeId: 'staticElement_2'
      }
    },

    {
      position: {x: 10, y: 180},
      editableLabel: 'test label 2',
      inPorts: ['in'],
      outPorts: ['out'],
      attrs: {
        '.secondRect': { fill: '#0099cb'},
        isCreateCopy: true,
        '.image': {
          'xlink:href': 'http://icons.iconarchive.com/icons/icons8/windows-8/256/Transport-Rocket-icon.png'
        },
        elementTypeId: 'staticElement_2'
      }
    },

    {
      position: {x: 180, y: 180},
      editableLabel: 'test label 2',
      inPorts: ['in'],
      outPorts: ['out'],
      attrs: {
        '.secondRect': { fill: '#8c589f'},
        isCreateCopy: true,
        '.image': {
          'xlink:href': 'https://d30y9cdsu7xlg0.cloudfront.net/png/65006-200.png'
        },
        elementTypeId: 'staticElement_2'
      }
    },

    {
      position: {x: 10, y: 350},
      editableLabel: 'test label 2',
      inPorts: ['in'],
      outPorts: ['out'],
      attrs: {
        '.secondRect': { fill: '#760145'},
        isCreateCopy: true,
        '.image': {
          'xlink:href': 'https://cdn2.iconfinder.com/data/icons/picons-essentials/57/camera-512.png'
        },
        elementTypeId: 'staticElement_2'
      }
    },

    {
      position: {x: 180, y: 350},
      editableLabel: 'test label 2',
      inPorts: ['in'],
      outPorts: ['out'],
      attrs: {
        '.secondRect': { fill: '#0099cb'},
        isCreateCopy: true,
        '.image': {
          'xlink:href': 'http://www.freeiconspng.com/uploads/links-icon-10.png'
        },
        elementTypeId: 'staticElement_2'
      }
    },

    {
      position: {x: 10, y: 520},
      editableLabel: 'test label 2',
      inPorts: ['in'],
      outPorts: ['out'],
      attrs: {
        '.secondRect': { fill: '#ec8622'},
        isCreateCopy: true,
        '.image': {
          'xlink:href': 'http://www.freeiconspng.com/uploads/sign-out-icon-3.png'
        },
        elementTypeId: 'staticElement_2'
      }
    },

    {
      position: {x: 180, y: 520},
      editableLabel: 'test label 2',
      inPorts: ['in'],
      outPorts: ['out'],
      attrs: {
        '.secondRect': { fill: '#760145'},
        isCreateCopy: true,
        '.image': {
          'xlink:href': 'http://www.freeiconspng.com/uploads/search-icon-png-17.png'
        },
        elementTypeId: 'staticElement_2'
      }
    }
  ])

})();
