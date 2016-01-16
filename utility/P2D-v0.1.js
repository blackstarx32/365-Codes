/**
 *	P2D.js v0.1
 */

"use strict";

var P2D = (function(init) {
	return init(window, window.V2D);
})(function(window, V2D, undefined) {

	function Particle(position, velocity, mass, gravity) {
		this.position = position;
		this.velocity = velocity;
		this.mass = mass || 1;
		this.gravity = gravity || V2D.create(0, 0);
	}

	Particle.prototype = {
		constructor: Particle,
		update: function() {
			this.velocity.add(this.gravity);
			this.position.add(this.velocity);
		},
		accelerate: function(acceleration) {
			this.velocity.add(acceleration);
		},
		angleTo: function(p2) {
			return Math.atan2(p2.position.y - this.position.y, p2.position.x - this.position.x);
		},
		distanceTo: function(p2) {
			var dx = p2.position.x - this.position.x,
				dy = p2.position.y - this.position.y;

			return Math.sqrt(dx * dx + dy * dy);
		},
		gravitateTo: function(p2) {
			var grav = V2D.create(0, 0),
				dist = this.distanceTo(p2);

			grav.setLength(p2.mass / (dist * dist));
			grav.setAngle(this.angleTo(p2));

			this.velocity.add(grav);
		}
	};
	
	return {
		create: function(position, velocity, gravity) {
			return new Particle(position, velocity, gravity);
		}
	};

});