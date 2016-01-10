/**
 * Colaboratori controllers
 */
(function () {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('ColaboratoriCtrl', ColaboratoriCtrl);

    function ColaboratoriCtrl($scope, getColaboratori) {

        getColaboratori.async().then(function () {
            $scope.data = getColaboratori.data();

            var locations = [];
            angular.forEach($scope.data, function (value, key) {
                if (value.field_latitude[0]) {
                    this.push([value.field_adresa_colaboratori[0].value, value.field_latitude[0].value, value.field_longitude[0].value]);
                }
            }, locations);

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 6,
                center: new google.maps.LatLng(45.8429693, 23.0375165),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map
                });

                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent(locations[i][0], locations[i][6]);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }

        });
    }

})();
