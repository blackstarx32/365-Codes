"use strict";
var collision = (function(init) {
	return init(V2D);
})(function(V2D) {

/**
 * ============================================
 */
 	function inRange(value, min, max) {
 		return value >= Math.min(min, max) && value <= Math.max(min, max);
 	}

/**
 * ============================================
 */ 


	function circleToCircle(c0, c1) {
		return V2D.dist(c0.position, c1.position) <= c0.radius + c1.radius;
	}

	function circleToPoint(c, p) {
		return V2D.dist(c.position, p) < c.radius;
	}

	function rectToPoint(r, p) {
		return inRange(p.x, r.position.x - r.width/2, (r.position.x - r.width/2) + r.width) 
			&& inRange(p.y, r.position.y - r.height/2, (r.position.y - r.height/2) + r.height);
	}

	return {
		circleToCircle: circleToCircle,
		circleToPoint: circleToPoint,
		rectToPoint: rectToPoint
	};
});