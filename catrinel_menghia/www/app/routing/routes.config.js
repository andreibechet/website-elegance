/**
 * Routing File
 */

(function () {
    'use strict';

    angular
        .module('starter').config(routes);

    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('acasa', {
                url: '/acasa',
                templateUrl: 'app/acasa/acasa.html',
                controller: 'AcasaCtrl'

            })

            .state('magazine', {
                url: '/magazine',
                templateUrl: 'app/magazine/magazine.html',
                controller: 'MagazineCtrl'

            })

            .state('colaboratori', {
                url: '/colaboratori',
                templateUrl: 'app/colaboratori/colaboratori.html',
                controller: 'ColaboratoriCtrl'
            })

            .state('targ', {
                url: '/targ',
                templateUrl: 'app/targ/targ.html',
                controller: 'TargCtrl'

            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'app/contact/contact.html',
                controller: 'ContactCtrl'

            })

            .state('galleries', {
                url: '/galleries',
                templateUrl: 'app/gallery/galleries.html',
                controller: 'GalleriesCtrl'
            })

            .state('single', {
                url: '/galleries/:galleryId',
                templateUrl: 'app/gallery/gallery.html',
                controller: 'GalleryDetailCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/acasa');

    }
})();
