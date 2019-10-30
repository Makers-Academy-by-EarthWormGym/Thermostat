'use strict';

function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature
}

Thermostat.prototype.tempUp = function() {
  this.temperature += 1;
}

Thermostat.prototype.tempDown = function() {
  this.temperature -= 1;
}

var thermostat = new Thermostat();
