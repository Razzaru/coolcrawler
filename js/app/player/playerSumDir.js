var app = angular.module('crawler');

app.directive('playerSum', function () {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'js/app/player/templates/player-sum.html',
        controller: PlayerController,
        controllerAs: 'player'
    }
})