var app = angular.module('crawler', []);

app.directive('mainApp', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/app/templates/main-app.html',
        controller: MainAppController,
        controllerAs: 'main'
    }
})