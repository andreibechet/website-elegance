/**
 * Targuri controllers
 */
(function () {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('TargCtrl', TargCtrl);

    function TargCtrl($scope, getTarguri) {

        getTarguri.async().then(function () {
            $scope.data = getTarguri.data();

            var locations = [];
            angular.forEach($scope.data, function (value, key) {
                if (value.field_locatie_targ[0]) {
                    this.push([value.field_locatie_targ[0].value, value.field_data_inceput_targ[0].value, value.field_data_sfarsit_targ[0].value]);
                }
            }, locations);

        });
    }

})();
