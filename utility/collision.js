"use strict";
var collision = (function(init) {
	return init(V2D);
})(function(V2D) {

	function circleToCircle(c0, c1) {
		return V2D.dist(c0.position, c1.position) <= c0.radius + c1.radius;
	}

	function circleToPoint(c, p) {
		return V2D.dist(c.position, p) < c.radius;
	}

	return {
		circleToCircle: circleToCircle,
		circleToPoint: circleToPoint
	};
});