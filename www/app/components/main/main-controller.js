"use strict";

angular.module("ngapp").controller("MainController", function(shared, $state, $scope, $mdSidenav, $mdComponentRegistry, $http){

    var ctrl = this;

    this.auth = shared.info.auth;

    this.toggle = angular.noop;

    this.title = $state.current.title;


    this.isOpen = function() { return false };
    $mdComponentRegistry
    .when("left")
    .then( function(sideNav){
      ctrl.isOpen = angular.bind( sideNav, sideNav.isOpen );
      ctrl.toggle = angular.bind( sideNav, sideNav.toggle );
    });

    this.toggleRight = function() {
    $mdSidenav("left").toggle()
        .then(function(){
        });
    };

    this.close = function() {
    $mdSidenav("right").close()
        .then(function(){
        });
    };

    
    $scope.mostraResultado = false;
    
    $scope.BuscarItem = function($event, mercadolivre) {
        if (typeof mercadolivre === 'undefined') {
            // SE NÃO PREENCHEU NADA....
            console.dir(mercadolivre);
            $http.post('https://api.mercadolibre.com/sites/MLB/search?q=gitalina&access_token=APP_USR-4941010159154357-052416-09a92f7ff3a3a554b6aa32623ce682b0-323924729', { headers: { "Content-Type": "application/x-www-form-urlencoded" }})
            .then(function(response) {
                // sucesso!    
                $scope.resultado = response.data;
                $scope.data = response.data.results;
                console.dir($scope.data);
                console.dir($scope.resultado);
            }).finally(function() { 
                
            });     
            $scope.mostraResultado = true;
        } else {
            // SE PREENCHEU ALGO....
            console.dir(mercadolivre);
            $http.post('https://api.mercadolibre.com/sites/MLB/search?q='+mercadolivre.itemBusca+'&access_token='+mercadolivre.token, { headers: { "Content-Type": "application/x-www-form-urlencoded" }})
            .then(function(response) {
                // sucesso!    
                $scope.resultado = response.data;
                $scope.data = response.data.results;
                console.dir($scope.data);
                console.dir($scope.resultado);
            }).finally(function() { 
                
            });     
            $scope.mostraResultado = true;
        }
    };
    
    var imagePath = 'http://mercadolibredevsite.s3.amazonaws.com/wp-content/themes/newDevelopersTheme/images/LogoDevelopers_Lato.png';
    
    $scope.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
    
});
