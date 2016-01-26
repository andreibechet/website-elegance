/**
 * Ionic Starter App
 * Angular Module is global place for creating registering and retrieving Angular modules
 * The 2nd parameter is an array of 'requirements'
 */

(function () {
    'use strict';

    angular
        .module('starter', [
            'ionic',
            'starter.controllers',
            'starter.services',
            'angular-carousel'
        ])

        .run(runConfig)
        .config(appConfig);

    /**
     * General Run configuration
     * @param $ionicPlatform
     */
    function runConfig($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }

    /**
     * General app configurations
     * @param $ionicConfigProvider
     */
    function appConfig($ionicConfigProvider, $httpProvider) {
        //disables the transition (slide) effect when changing views
        $ionicConfigProvider.views.transition('none');

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }

})();
