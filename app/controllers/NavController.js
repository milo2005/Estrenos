app.controller("NavController",function($scope){
  $scope.openNav= function(){
    $mdSidenav('nav').open();
  }
  $scope.categories=['comedia', 'animacion', 'romance', 'accion', 'terror', 'scifi'];

});
