var app = angular.module('crawler');

app.directive('playerStats', function () {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'js/app/player/templates/player-stats.html',
        controller: PlayerController,
        controllerAs: 'player'
    }
})