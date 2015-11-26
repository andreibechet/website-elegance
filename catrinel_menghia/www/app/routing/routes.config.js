/**
 * Routing File
 */

(function () {
    'use strict';

    angular
        .module('starter').config(routes);

    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'layout/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: 'layout/search.html'
                    }
                }
            })

            .state('app.browse', {
                url: '/browse',
                views: {
                    'menuContent': {
                        templateUrl: 'layout/browse.html'
                    }
                }
            })
            .state('app.galleries', {
                url: '/galleries',
                views: {
                    'menuContent': {
                        templateUrl: 'app/gallery/galleries.html',
                        controller: 'GalleriesCtrl'
                    }
                }
            })

            .state('app.single', {
                url: '/galleries/:galleryId',
                views: {
                    'menuContent': {
                        templateUrl: 'app/gallery/gallery.html',
                        controller: 'GalleryDetailCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/galleries');

    }
})();
