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

	// COMPUTE //

	var compute = {};


	// LIBRARIES //

	/**
	* Utilities.
	*/
	compute.roundn = require( 'compute-roundn' );

	/**
	* Statistics.
	*/
	compute.max = require( 'compute-max' );
	compute.min = require( 'compute-min' );
	compute.sum = require( 'compute-sum' );
	compute.mean = require( 'compute-mean' );
	compute.variance = require( 'compute-variance' );
	compute.stdev = require( 'compute-stdev' );


	// EXPORTS //

	module.exports = compute;

})();