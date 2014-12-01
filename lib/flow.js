/**
*
*	COMPUTE.IO: flow
*
*
*	DESCRIPTION:
*		- Creates a fluent interface.
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

	/**
	* FUNCTION: Flow()
	*	Flow constructor.
	*
	* @constructor
	* @returns {Flow} Flow instance
	*/
	function Flow() {
		if ( !(this instanceof Flow) ) {
			return new Flow();
		}
		this._value = null;
		return this;
	} // end FUNCTION Flow()

	/**
	* METHOD: value( [value] )
	*	Flow value setter and getter. If no `value` is provided, returns the flow `value`. If a `value` is provided, sets the flow `value`.
	*
	* @param {*} [value] - flow value
	* @returns {Flow|*} Flow instance or value
	*/
	Flow.prototype.value = function( value ) {
		if ( !arguments.length ) {
			return this._value;
		}
		this._value = value;
		return this;
	}; // end METHOD value()

	/**
	* METHOD: inspect()
	*	Logs the current flow value to the console.
	*
	* @returns {Flow} Flow instance
	*/
	Flow.prototype.inspect = function() {
		console.log( this._value );
		return this;
	}; // end METHOD inspect()

	/**
	* FUNCTION: createMethod( name, func )
	*	Creates a fluent method.
	*
	* @param {String} name - method name
	* @param {Function} func - method to bind to Flow prototype
	*/
	function createMethod( name, func ) {
		Flow.prototype[ name ] = function() {
			var args = Array.prototype.slice.call( arguments );
			args.unshift( this._value );
			this._value = func.apply( null, args );
			return this;
		};
	} // end FUNCTION createMethod()

	/**
	* FUNCTION: createFlow( compute )
	*	Binds a fluent interface to the compute object.
	*
	* @param {Object} compute - object containing compute methods
	* @returns {Flow} Flow constructor
	*/
	function createFlow( compute ) {
		var methods = Object.keys( compute ),
			method;

		methods.filter( function filter( method ) {
			return typeof compute[ method ] === 'function';
		});

		for ( var i = 0; i < methods.length; i++ ) {
			method = methods[ i ];
			createMethod( method, compute[ method ] );
		}

		return Flow;
	} // end FUNCTION createFlow()


	// EXPORTS //

	module.exports = createFlow;

})();
