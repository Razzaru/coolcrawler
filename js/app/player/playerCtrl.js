var app = angular.module('crawler');

app.controller('PlayerController', PlayerController);

function PlayerController() {
    this.keys = {
        left: 97,
        top: 119,
        right: 100,
        down: 115
    }

    this.goSomewhere = function (evt) {
        switch (evt.keyCode) {
            case this.keys.left:
                console.log('left pressed');
                break;
            case this.keys.top:
                console.log('top pressed');
                break;
            case this.keys.right:
                console.log('right pressed');
                break;
            case this.keys.down:
                console.log('down pressed');
                break;
        }
    }
}