/**
 * Galleries controllers
 */
(function () {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('GalleriesCtrl', GalleriesCtrl)
        .controller('GalleryDetailCtrl', GalleryDetailCtrl);

    function GalleriesCtrl($scope) {
        $scope.galleries = [
            {title: 'Reggae', id: 1},
            {title: 'Chill', id: 2},
            {title: 'Dubstep', id: 3},
            {title: 'Indie', id: 4},
            {title: 'Rap', id: 5},
            {title: 'Cowbell', id: 6}
        ];
    }

    function GalleryDetailCtrl($scope, $stateParams) {
        $scope = '';
        console.log($stateParams);
    }

})();
