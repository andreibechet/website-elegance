(function () {
    'use strict';

    angular
        .module('starter.services')
        .factory('getGalleries', getGalleries)
        .factory('getGalleriesByNid', getGalleriesByNid);

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

    /**
     *
     * @param $http
     * @param $stateParams
     * @param $q
     * @returns a gallery by id
     */
    function getGalleriesByNid($http, $stateParams, $q) {
        var deffered = $q.defer();
        var data = [];
        var getGalleriesByNid = {};
        var path = 'http://workout.elegance-ama.ro/gallery_id/' + $stateParams.galleryId;

        getGalleriesByNid.async = function () {
            $http.get(path)
                .success(function (d) {
                    data = d;
                    deffered.resolve();
                });
            return deffered.promise;
        };
        getGalleriesByNid.data = function () {
            return data;
        };

        return getGalleriesByNid;
    }

})();
