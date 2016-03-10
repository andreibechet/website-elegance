/**
 * Galleries controllers
 */
(function () {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('GalleriesCtrl', GalleriesCtrl)
    .controller('GalleryDetailCtrl', GalleryDetailCtrl);

  function GalleriesCtrl($scope, getGalleries) {
    getGalleries.async().then(function () {
      $scope.data = getGalleries.data();
    });
  }

  function GalleryDetailCtrl($scope, $stateParams, $http) {

    $http({
      method: 'get',
      url: 'http://workout.elegance-ama.ro/gallery_id/' + $stateParams.galleryId,

    }).then(
        function succes(response) {
          $scope.data = response.data;

        },
        function error(reason) {
          defer.reject(reason);
        });
  }

})();
