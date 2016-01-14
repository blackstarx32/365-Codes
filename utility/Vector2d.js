/**
 * V2D v0.1
 */

var V2D = (function() {

	"use strict";

	function Vector2d(x, y) {
		this.x = x;
		this.y = y;
	}//END OF VECTOR2D


	function create(x, y) {
		return new Vector2d(x, y);
	}

	return {
		create: create
	};

})();