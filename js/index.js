'use strict'

var app = angular.module('example', ['as.sortable']);

app.controller('MainCtrl', function ($scope) {

  $scope.items = [{
    name: 'Black Holes',
    subjectcode: 'ASTR',
    coursecode: '123'
  }, {
    name: 'Galaxies',
    subjectcode: 'ASTR',
    coursecode: '423'
  }, {
    name: 'Supernovas',
    subjectcode: 'ASTR',
    coursecode: '167'
  }, {
    name: 'Aliens',
    subjectcode: 'ASTR',
    coursecode: '657'
  }, {
    name: 'Planets',
    subjectcode: 'ASTR',
    coursecode: '6907'
  }, {
    name: 'Stars',
    subjectcode: 'ASTR',
    coursecode: '7686'
  }, {
    name: 'Mars',
    subjectcode: 'ASTR',
    coursecode: '78467'
  }, {
    name: 'Sun',
    subjectcode: 'ASTR',
    coursecode: '657'
  }];

  $scope.$watch('items', function () {
    console.log(arguments);
  });

  $scope.dragControlListeners = {
      orderChanged: function(event) {
        console.log("Moving object:");
        console.log($scope.items[event.dest.index]);
        console.log("From: " + event.source.index +
                    " -- To: " + event.dest.index);
      },
      containment: '#table-container'
  };

});
