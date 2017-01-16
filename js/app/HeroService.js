var app = angular.module('crawler');

app.service('HeroService', HeroService);

function HeroService() {
    this.hero = {
        HP: 20,
        Attack: 7,
        Defense: 8,
        Magic: 5,
        Evasion: 6,
        Smth: 7
    }
}