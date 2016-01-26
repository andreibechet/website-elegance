(function () {
    'use strict';

    angular
        .module('starter.services')
        .factory('getHomeCarouselGallery', getHomeCarouselGallery);

    /**
     *
     * @param $http
     * @param $q
     * @returns all images for the home carousel
     */
    function getHomeCarouselGallery($http, $q) {

        var deffered = $q.defer();
        var data = [];
        var getHomeCarouselGallery = {};
        var path = 'http://workout.elegance-ama.ro/gallery_id/15';

        getHomeCarouselGallery.async = function () {
            $http.get(path)
                .success(function (d) {
                    data = d;
                    // console.log(data);
                    deffered.resolve();
                });
            return deffered.promise;
        };
        getHomeCarouselGallery.data = function () {
            return data;
        };

        return getHomeCarouselGallery;
    }

})();
