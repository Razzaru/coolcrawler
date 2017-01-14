var app = angular.module('crawler');

app.directive('player', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<img src="img/shadow-man.gif" alt="Your hero" class="center-block sprite">',
        controller: PlayerController,
        controllerAs: 'player'
    }
})