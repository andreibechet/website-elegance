/**
 * Acasa controllers
 */
(function () {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('AcasaCtrl', AcasaCtrl);

  function AcasaCtrl($scope, getHomeCarouselGallery) {
    getHomeCarouselGallery.async().then(function () {

      var galleryDataObj = getHomeCarouselGallery.data(),
          originalImagesObj = galleryDataObj[0].field_image,
          addedString = 'styles/portrait_mobile/public/',
          originalUrl,
          mobileUrl;

      for (var i = 0, len = originalImagesObj.length; i < len; i++) {
        originalUrl = originalImagesObj[i].url;
        mobileUrl = [originalUrl.slice(0, 51), addedString, originalUrl.slice(51)].join('');
        originalImagesObj[i].mobile_url = mobileUrl;
      }

      $scope.data = galleryDataObj;
    });
  }

})();
