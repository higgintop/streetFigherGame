// use mocha and chai to test the street fighter game
/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect,
	Game = require(process.cwd() + '/lib/Game'),
	Player = require(process.cwd() + '/lib/Player'),
	Weapon = require(process.cwd() + '/lib/Weapon');


// test the Weapon
describe('Weapon', function () {
  it('should have 3 choices, sword shotgun and fist', function () {
  	 var myGame = new Game(2);
  	 var weapons = myGame.weapons;
     expect(weapons[0].name).to.equal('Sword');
     expect(weapons[1].name).to.equal('Shotgun');
     expect(weapons[2].name).to.equal('Fist');
  });
});
