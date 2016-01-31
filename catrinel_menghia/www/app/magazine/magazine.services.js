(function () {
    'use strict';

    angular
        .module('starter.services')
        .factory('getMagazine', getMagazine);

    /**
     *
     * @param $http
     * @param $q
     * @returns all Magazine
     */
    function getMagazine($http, $q) {

        var deffered = $q.defer();
        var data = [];
        var getMagazine = {};
        var path = 'http://workout.elegance-ama.ro/magazine';

        getMagazine.async = function () {
            $http.get(path)
                .success(function (d) {
                    data = d;
                    deffered.resolve();
                });
            return deffered.promise;
        };
        getMagazine.data = function () {
            return data;
        };

        return getMagazine;
    }

})();
