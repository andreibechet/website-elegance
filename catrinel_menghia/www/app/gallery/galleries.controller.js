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
            console.log($scope.data);
        });
    }

    function GalleryDetailCtrl($scope, getGalleriesByNid) {
        getGalleriesByNid.async().then(function () {
            $scope.data = getGalleriesByNid.data();
        });
    }

})();
