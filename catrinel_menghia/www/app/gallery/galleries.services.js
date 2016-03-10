(function () {
    'use strict';

    angular
        .module('starter.services')
        .factory('getGalleries', getGalleries);

    /**
     *
     * @param $http
     * @param $q
     * @returns all galleries
     */
    function getGalleries($http, $q) {

        var deffered = $q.defer();
        var data = [];
        var getGalleries = {};
        var path = 'http://workout.elegance-ama.ro/rest_galleries';

        getGalleries.async = function () {
            $http.get(path)
                .success(function (d) {
                    data = d;
                    deffered.resolve();
                });
            return deffered.promise;
        };
        getGalleries.data = function () {
            return data;
        };

        return getGalleries;
    }

})();
