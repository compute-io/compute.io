/* globals describe, it, beforeEach, require */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	compute = require( './../lib' ),
	createFlow = require( './../lib/flow.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute.io flow', function tests() {

	// SETUP //

	var Flow;

	beforeEach( function task() {
		Flow = createFlow( compute );
	});


	// TESTS //

	it( 'should export a function', function test() {
		expect( createFlow ).to.be.a( 'function' );
	});

	it( 'should return a Flow constructor', function test() {
		expect( Flow ).to.be.a( 'function' );
	});

	it( 'should wrap compute methods to create a fluent interface', function test() {
		var keys = Object.keys( compute );

		for ( var i = 0; i < keys.length; i++ ) {
			expect( Flow.prototype[ keys[i] ] ).to.be.a( 'function' );
		}
	});

	it( 'should return a Flow instance', function test() {
		// `new` prefix not required...
		assert.ok( Flow() instanceof Flow );
	});

	it( 'should provide a method to set/get the flow value', function test() {
		var flow = new Flow();

		expect( flow.value ).to.be.a( 'function' );
	});

	it( 'should set the flow value', function test() {
		var flow = new Flow();
		flow.value( [5] );
		assert.deepEqual( flow.value(), [5] );
	});

	it( 'should provide a method to inspect a flow instance and maintain a fluent interface', function test() {
		var flow = new Flow();
		expect( flow.inspect ).to.be.a( 'function' );
		assert.strictEqual( flow.inspect(), flow );
	});

	it( 'should create a fluent interface', function test() {
		var flow = new Flow();
		expect( foo ).to.not.throw( Error );
		function foo() {
			flow
				.value( [4.1,3.6,5.51] )
				.roundn( 0 )
				.min()
				.value();
		}

	});

});
