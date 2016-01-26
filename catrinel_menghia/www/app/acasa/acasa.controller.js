/**
 * Acasa controllers
 */
(function () {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('AcasaCtrl', AcasaCtrl);

    function AcasaCtrl($scope) {
        console.log('Acasa controller');
        $scope.data = [
            {
                url: "img/carousel/catalog_elegance_20162.jpg",
                text: "Noua colectie 2016?"
            },
            {
                url: "img/carousel/catalog_elegance_20163.jpg",
                text: "Hai la noi la magazin"
            },
            {
                url: "img/carousel/catalog_elegance_20165.jpg",
                text: "Vindem gogosi"
            }
        ]
        console.log($scope.data);
    }

})();
