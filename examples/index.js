'use strict';

var compute = require( './../lib' );


// Fluent interface:
var flow = compute.flow();

var data = new Array( 10 ),
	d;

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()*1000;
}

d = Array.prototype.slice.call( data );

flow
	.value( data )
	.roundn( -3 )
	.mean()
	.roundn( 0 );

console.log( compute.mean( d ) );
flow.inspect();
