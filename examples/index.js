var compute = require( './../lib' );


// Fluent interface:
var flow = compute.flow();

var data = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()*1000;
}

flow
	.value( data )
	.roundn( -3 )
	.mean()
	.roundn( 0 );

console.log( compute.mean( data ) );
console.log( flow.value() );