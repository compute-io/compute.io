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
	compute.polyval = require( 'compute-polynomial' );
	compute.reverse = require( 'compute-reverse' );

	/**
	* Special functions.
	*/
	compute.erf = require( 'compute-erf' );
	compute.erfc = require( 'compute-erfc' );
	compute.erfinv = require( 'compute-erfinv' );
	compute.erfcinv = require( 'compute-erfcinv' );

	/**
	* Statistics.
	*/
	compute.min = require( 'compute-min' );
	compute.max = require( 'compute-max' );
	compute.sum = require( 'compute-sum' );
	compute.csum = require( 'compute-csum' );
	compute.mean = require( 'compute-mean' );
	compute.wmean = require( 'compute-wmean' );
	compute.variance = require( 'compute-variance' );
	compute.stdev = require( 'compute-stdev' );
	compute.mode = require( 'compute-mode' );
	compute.median = require( 'compute-median' );
	compute.quantiles = require( 'compute-quantiles' );
	compute.iqr = require( 'compute-iqr' );
	compute.skewness = require( 'compute-skewness' );
	compute.kurtosis = require( 'compute-kurtosis' );

	/**
	* Geometry.
	*/
	compute.hypot = require( 'compute-hypot' );

	/**
	* Information theory.
	*/
	compute.hamdist = require( 'compute-hamming' );

	/**
	* Flow.
	*/
	compute.flow = createFlow( compute );


	// EXPORTS //

	module.exports = compute;

})();