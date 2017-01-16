var app = angular.module('crawler');

app.directive('playfield', function () {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'js/app/playfield/templates/playfield.html',
        controller: PlayfieldController,
        controllerAs: 'playfield'
    }
})