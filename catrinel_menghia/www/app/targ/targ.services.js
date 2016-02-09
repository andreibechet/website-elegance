(function () {
    'use strict';

    angular
        .module('starter.services')
        .factory('getTarguri', getTarguri);

    /**
     *
     * @param $http
     * @param $q
     * @returns all targuri
     */
    function getTarguri($http, $q) {

        var deffered = $q.defer();
        var data = [];
        var getTarguri = {};
        var path = 'http://workout.elegance-ama.ro/targuri';

        getTarguri.async = function () {
            $http.get(path)
                .success(function (d) {
                    data = d;
                    deffered.resolve();
                });
            return deffered.promise;
        };
        getTarguri.data = function () {
            return data;
        };

        return getTarguri;
    }

})();
