'use strict';

function Plane() {
  this._location;
}

Plane.prototype.land = function(airport) {
    airport.clearForLanding(this);
    this._location = airport;
};

Plane.prototype.takeoff = function() {
  console.log(this._location);
  this._location.clearForTakeOff("");
} ;
