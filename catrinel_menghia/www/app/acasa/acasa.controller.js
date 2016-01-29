/**
 * Acasa controllers
 */
(function () {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('AcasaCtrl', AcasaCtrl);

  function AcasaCtrl($scope, getHomeCarouselGallery) {
    getHomeCarouselGallery.async().then(function () {
      $scope.data = getHomeCarouselGallery.data();
    });
  }

})();
