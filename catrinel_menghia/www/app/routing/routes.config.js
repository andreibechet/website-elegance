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
                templateUrl: 'layout/menu.html'
            })

            .state('app.acasa', {
                url: '/acasa',
                views: {
                    'menuContent': {
                        templateUrl: 'app/acasa/acasa.html',
                        controller: 'AcasaCtrl'
                    }
                }
            })

            .state('app.magazine', {
                url: '/magazine',
                views: {
                    'menuContent': {
                        templateUrl: 'app/magazine/magazine.html',
                        controller: 'MagazineCtrl'
                    }
                }
            })

            .state('app.colaboratori', {
                url: '/colaboratori',
                views: {
                    'menuContent': {
                        templateUrl: 'app/colaboratori/colaboratori.html',
                        controller: 'ColaboratoriCtrl'
                    }
                }
            })

            .state('app.targ', {
                url: '/targ',
                views: {
                    'menuContent': {
                        templateUrl: 'app/targ/targ.html',
                        controller: 'TargCtrl'
                    }
                }
            })

            .state('app.contact', {
                url: '/contact',
                views: {
                    'menuContent': {
                        templateUrl: 'app/contact/contact.html',
                        controller: 'ContactCtrl'
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
