var app = angular.module("app",["ngMaterial"]).config(function($mdThemingProvider){

  $mdThemingProvider
      .theme('default')
      .primaryPalette('red')
      .accentPalette('amber');

  $mdThemingProvider
          .theme('defaultdark')
          .primaryPalette('red')
          .accentPalette('amber')
          .dark();
});
