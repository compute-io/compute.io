
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
			'roundn',
			'min',
			'max',
			'sum',
			'mean',
			'variance',
			'stdev',
			'mode'
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