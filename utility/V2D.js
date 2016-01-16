/**
 * V2D v0.1
 */

var V2D = (function() {

	"use strict";

	function V2D(x, y) {
		this.x = x;
		this.y = y;
	}//END OF VECTOR2D

	V2D.prototype = {
		constructor: V2D,
		setAngle: function(angle) {
			var length = this.getLength();
			this.x = Math.cos(angle) * length;
			this.y = Math.sin(angle) * length;
		},
		getAngle: function() {
			return Math.atan2(this.y, this.x);
		},
		setLength: function(length) {
			var angle = this.getAngle();
			this.x = Math.cos(angle) * length;
			this.y = Math.sin(angle) * length;
		},
		getLength: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		},
		add: function(v2d) {
			this.x += v2d.x;
			this.y += v2d.y;
		},
		sub: function(v2d) {
			this.x -= v2d.x;
			this.y -= v2d.y;
		},
		mult: function(value) {
			this.x *= value;
			this.y *= value;
		},
		div: function(value) {
			this.x /= value;
			this.y /= value;
		}
	};

/**
 *=========================================
 */	

	function create(x, y) {
		return new V2D(x, y);
	}

	function add(v1, v2) {
		return create(v1.x + v2.x, v1.y + v2.y);
	}

	function sub(v1, v2) {
		return create(v1.x - v2.x, v1.y - v2.y);
	}

	function mult(v, value) {
		return create(v.x * value, v.y * value);
	}

	function div(v, value) {
		return create(v.x / value, v.y / value);
	}	

	return {
		create: create,
		add: add,
		sub: sub,
		mult: mult,
		div: div
	};

})();