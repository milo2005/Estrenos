app.controller("NavController",function($scope,$mdSidenav){
  $scope.openNav= function(){
    $mdSidenav('nav').open();
  }
  $scope.categories=['comedia', 'animacion', 'romance', 'accion', 'terror', 'scifi'];

});
