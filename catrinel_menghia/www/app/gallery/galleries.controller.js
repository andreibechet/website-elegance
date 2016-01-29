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

  function GalleryDetailCtrl($scope, getGalleriesByNid, $ionicModal) {
    getGalleriesByNid.async().then(function () {
      $scope.data = getGalleriesByNid.data();
    });

    //modal functions
    $ionicModal.fromTemplateUrl('gallery-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function () {
      $scope.modal.show();
    };

    $scope.closeModal = function () {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });

  }

})();
