var app = angular.module('crawler');

app.directive('atkUp', function () {
    return {
        restrict: 'E',
        scope: false,
        template: '<img src="img/atk.png" alt="Attack up" class="center-block sprite">',
        controller: PlayfieldController,
        controllerAs: 'playfield'
    }
})