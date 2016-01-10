(function () {
    'use strict';

    angular
        .module('starter.services')
        .factory('getColaboratori', getColaboratori);

    /**
     *
     * @param $http
     * @param $q
     * @returns all colaboratori
     */
    function getColaboratori($http, $q) {

        var deffered = $q.defer();
        var data = [];
        var getColaboratori = {};
        var path = 'http://workout.elegance-ama.ro/colaboratori';

        getColaboratori.async = function () {
            $http.get(path)
                .success(function (d) {
                    data = d;
                    deffered.resolve();
                });
            return deffered.promise;
        };
        getColaboratori.data = function () {
            return data;
        };

        return getColaboratori;
    }

})();
