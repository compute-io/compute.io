
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	compute = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// FUNCTIONS //

/**
* FUNCTION: test_property( name )
*	Tests that the compute library has a property and that the property value is a function.
*
* @param {string} name - property name
*/
function test_property( name ) {
	it ( 'should have a `'+ name + '` property that is a function', function test() {
		expect( compute ).to.have.property( name ).that.is.a( 'function' );
	});
} // end FUNCTION test_property()


// TESTS //

describe( 'compute.io', function tests() {
	'use strict';

	var properties = [
		// Utilities:
		'roundn',
		'polyval',
		'reverse',
		'shuffle',
		'circshift',
		'diff',
		'find',
		'dims',
		'issorted',
		'isnumeric',
		'isnan',
		'isfinite',
		'isinteger',
		'isinf',
		'zip',
		'linspace',
		'incrspace',
		'logspace',

		// Special functions:
		'abs',
		'sqrt',
		'signum',
		'erf',
		'erfc',
		'erfinv',
		'erfcinv',

		// Arithmetic:
		'add',
		'subtract',
		'multiply',
		'divide',

		// Relational operations:
		'eq',
		'neq',
		'gt',
		'geq',
		'lt',
		'leq',

		// Trigonometry:
		'deg2rad',
		'rad2deg',

		// Geometry:
		'hypot',

		// Sets:
		'unique',

		// Discrete mathematics:
		'gcd',
		'lcm',

		// Linear algebra:
		'l1norm',
		'l2norm',
		'linfnorm',
		'lpnorm',
		'dot',
		'cross',

		// Statistics:
		'min',
		'argmin',
		'nanmin',
		'argnanmin',
		'incrmin',
		'mmin',
		'cmin',
		'max',
		'argmax',
		'nanmax',
		'argnanmax',
		'incrmax',
		'mmax',
		'cmax',
		'range',
		'sum',
		'nansum',
		'incrsum',
		'msum',
		'csum',
		'mean',
		'nanmean',
		'incrmean',
		'mmean',
		'incrmmean',
		'wmean',
		'gmean',
		'nangmean',
		'hmean',
		'nanhmean',
		'qmean',
		'nanqmean',
		'variance',
		'nanvariance',
		'incrvariance',
		'covariance',
		'stdev',
		'nanstdev',
		'incrstdev',
		'mode',
		'median',
		'quantile',
		'quantiles',
		'iqr',
		'idr',
		'midrange',
		'midhinge',
		'midsummary',
		'midmean',
		'lmidmean',
		'umidmean',
		'trimean',
		'skewness',
		'kurtosis',

		// Information theory:
		'hamdist'
	];

	it( 'should export an object', function test() {
		expect( compute ).to.be.an( 'object' );
	});

	// Run the property tests...
	for ( var i = 0; i < properties.length; i++ ) {
		test_property( properties[ i ] );
	}

	it( 'should have a fluent interface', function test() {
		expect( compute.flow ).to.be.a( 'function' );
	});

});
