/**
*
*	COMPUTE.IO
*
*
*	DESCRIPTION:
*		- Computation library.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var createFlow = require( './flow.js' );


	// COMPUTE //

	var compute = {};

	/**
	* Utilities.
	*/
	compute.roundn = require( 'compute-roundn' );

	/**
	* Statistics.
	*/
	compute.min = require( 'compute-min' );
	compute.max = require( 'compute-max' );
	compute.sum = require( 'compute-sum' );
	compute.mean = require( 'compute-mean' );
	compute.variance = require( 'compute-variance' );
	compute.stdev = require( 'compute-stdev' );
	compute.mode = require( 'compute-mode' );

	/**
	* Flow.
	*/
	compute.flow = createFlow( compute );


	// EXPORTS //

	module.exports = compute;

})();