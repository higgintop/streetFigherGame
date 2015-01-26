// use mocha and chai to test the street fighter game
/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect,
	Game = require(process.cwd() + '/lib/Game'),
	Player = require(process.cwd() + '/lib/Player'),
	Weapon = require(process.cwd() + '/lib/Weapon');


// test the Player
describe('Player', function () {
  it('should exist with a name Player and health 1', function () {
  	 var myPlayer = new Player();
     expect(myPlayer.name).to.equal('Player');
     expect(myPlayer.health).to.equal(1);
  });
});