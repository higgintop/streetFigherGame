// use mocha and chai to test the street fighter game
/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect,
	Game = require(process.cwd() + '/lib/Game');

// test the Game
describe('Game', function () {
  describe('init', function() {
  	it('should be of type Game', function () {
  	 var myGame = new Game();
     expect(myGame).to.be.instanceof(Game);
    });
  });
  describe('adding players', function () {
    it('should have 2 players when i pass in 2', function () {
	  var myGame = new Game(2);
      expect(myGame.players.length).to.equal(2);
    });
  });

  describe('#getRandomWeapon', function () {
   it('should give player one of three weapons', function () {
	  var myGame = new Game(2);
      expect(myGame.players[0].weapon.name).to.include('Fist'|| 'Shotgun' || 'Sword');
    });
  });
});
















