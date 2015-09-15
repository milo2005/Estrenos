var app = angular.module("app",["ngMaterial"]).config(function($mdThemingProvider){

    $mdThemingProvider.theme('default')
      .primaryPalette('red')
      .accentPalette('orange');

      $mdThemingProvider.theme('defaultdark')
        .primaryPalette('red')
        .accentPalette('orange').dark();

});
