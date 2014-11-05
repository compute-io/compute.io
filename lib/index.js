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
compute.shuffle = require( 'compute-shuffle' );
compute.diff = require( 'compute-diff' );

/**
* Special functions.
*/
compute.signum = require( 'compute-signum' );
compute.erf = require( 'compute-erf' );
compute.erfc = require( 'compute-erfc' );
compute.erfinv = require( 'compute-erfinv' );
compute.erfcinv = require( 'compute-erfcinv' );

/**
* Arithmetic.
*/
compute.add = require( 'compute-add' );
compute.subtract = require( 'compute-subtract' );
compute.multiply = require( 'compute-multiply' );
compute.divide = require( 'compute-divide' );

/**
* Sets.
*/
compute.unique = require( 'compute-unique' );

/**
* Linear Algebra.
*/
compute.l1norm = require( 'compute-l1norm' );
compute.l2norm = require( 'compute-l2norm' );
compute.linfnorm = require( 'compute-linfnorm' );
compute.lpnorm = require( 'compute-lpnorm' );

/**
* Statistics.
*/
compute.min = require( 'compute-min' );
compute.incrmin = require( 'compute-incrmin' );
compute.mmin = require( 'compute-mmin' );
compute.cmin = require( 'compute-cmin' );
compute.max = require( 'compute-max' );
compute.incrmax = require( 'compute-incrmax' );
compute.mmax = require( 'compute-mmax' );
compute.cmax = require( 'compute-cmax' );
compute.range = require( 'compute-range' );
compute.sum = require( 'compute-sum' );
compute.nansum = require( 'compute-nansum' );
compute.incrsum = require( 'compute-incrsum' );
compute.msum = require( 'compute-msum' );
compute.csum = require( 'compute-csum' );
compute.mean = require( 'compute-mean' );
compute.nanmean = require( 'compute-nanmean' );
compute.incrmean = require( 'compute-incrmean' );
compute.mmean = require( 'compute-mmean' );
compute.wmean = require( 'compute-wmean' );
compute.gmean = require( 'compute-gmean' );
compute.nangmean = require( 'compute-nangmean' );
compute.hmean = require( 'compute-hmean' );
compute.nanhmean = require( 'compute-nanhmean' );
compute.qmean = require( 'compute-qmean' );
compute.nanqmean = require( 'compute-nanqmean' );
compute.variance = require( 'compute-variance' );
compute.nanvariance = require( 'compute-nanvariance' );
compute.incrvariance = require( 'compute-incrvariance' );
compute.stdev = require( 'compute-stdev' );
compute.nanstdev = require( 'compute-nanstdev' );
compute.incrstdev = require( 'compute-incrstdev' );
compute.mode = require( 'compute-mode' );
compute.median = require( 'compute-median' );
compute.quantile = require( 'compute-quantile' );
compute.quantiles = require( 'compute-quantiles' );
compute.iqr = require( 'compute-iqr' );
compute.idr = require( 'compute-idr' );
compute.midhinge = require( 'compute-midhinge' );
compute.midmean = require( 'compute-midmean' );
compute.trimean = require( 'compute-trimean' );
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
