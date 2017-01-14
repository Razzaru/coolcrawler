var app = angular.module('crawler');

app.controller('PlayfieldController', PlayfieldController);

function PlayfieldController() {
    this.generateField = function () {
        var nums = [];
        for(var i = 0; i<238; i++) {
            nums.push(i);
        }
        return nums;
    }
}
