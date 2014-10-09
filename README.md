Compute.io
==========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computation library.


## Table of Contents

1. 	[Installation](#installation)
1. 	[Usage](#usage)
	- 	[Utilities](#utilities)
		* 	[roundn( x, n )](#roundn)
		*	[polyval( coef, x )](#polyval)
		*	[reverse( arr )](#reverse)
		*	[diff( arr )](#diff)
	-	[Special Functions](#special-functions)
		*	[signum( x )](#signum)
		*	[erf( x )](#erf)
		*	[erfc( x )](#erfc)
		*	[erfinv( x )](#erfinv)
		*	[erfcinv( x )](#erfcinv)
	- 	[Statistics](#statistics)
		*	[min( arr )](#min)
		*	[max( arr )](#max)
		*	[range( arr )](#range)
		*	[sum( arr )](#sum)
		*	[nansum( arr )](#nansum)
		*	[csum( arr )](#csum)
		*	[mean( arr )](#mean)
		*	[nanmean( arr )](#nanmean)
		*	[wmean( arr, weights )](#wmean)
		*	[gmean( arr )](#gmean)
		*	[nangmean( arr )](#nangmean)
		*	[hmean( arr )](#hmean)
		*	[variance( arr )](#variance)
		*	[nanvariance( arr )](#nanvariance)
		*	[stdev( arr )](#stdev)
		*	[nanstdev( arr )](#nanstdev)
		*	[mode( arr )](#mode)
		*	[median( arr )](#median)
		*	[quantiles( arr, num )](#quantiles)
		*	[iqr( arr )](#iqr)
		*	[skewness( arr )](#skewness)
		*	[kurtosis( arr )](#kurtosis)
	-	[Geometry](#geometry)
		*	[hypot( a, b )](#hypot)
	- 	[Information Theory](#information-theory)
		*	[hamdist( a, b )](#hamdist)
1. 	[Fluent Interface](#fluent-interface)
1. 	[Tests](#tests)
	- 	[Unit](#unit)
	-	[Coverage](#test-coverage)
1. 	[License](#license)


## Installation

``` bash
$ npm install compute.io
```

## Usage

To use compute,

``` javascript
var compute = require( 'compute.io' );
```

The compute module is comprised of several smaller modules. If you want to roll your own compute, follow the links and import the individual modules.

The compute module has the following methods...


### Utilities

<a name="roundn"></a>
#### [compute.roundn( x, n )](https://github.com/compute-io/roundn)

Rounds values to the nearest multiple of `10^n`. `x` may be either a single numeric value or an array of values. `n` must be an `integer`.

``` javascript
console.log( compute.roundn( Math.PI, -2 ) );
// returns 3.14

console.log( compute.roundn( 111, 2 ) );
// returns 100

var data = [ 2.342, 4.943, 2.234, 7.992, 3.142 ];

console.log( compute.roundn( data, -2 ) );
// returns [...] where each value is rounded to nearest hundredth
```

<a name="polyval"></a>
#### [compute.polyval( coef, x )](https://github.com/compute-io/polynomial)

Evaluates a polynomial with coefficients `coef`, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var coef = [ 4, 2, 6, -17 ];

console.log( compute.polyval( coef, [ 10, -3] ) );
```


<a name="reverse"></a>
#### [compute.reverse( arr )](https://github.com/compute-io/reverse)

Reverses an `array` in place.

``` javascript
var arr = [ 1, 2, 3, 4 ];

console.log( reverse( arr ) );
// returns [ 4, 3, 2, 1 ];
```

Note: the `array` is mutated.


<a name="diff"></a>
#### [compute.diff( arr )](https://github.com/compute-io/diff)

Calculates the differences between adjacent elements in an `array`.

``` javascript
var arr = [ 2, 1, 3, 4 ];

console.log( diff( arr ) );
// returns [ 1, -2, -1 ];
```

Note: the length of the returned `array` is one less than the length of the original `array`.



### Special Functions

<a name="signum"></a>
#### [compute.signum( x )](https://github.com/compute-io/signum)

Evaluates the signum function, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var data = [ -10, -1, -0, 0, 1, 10 ];

console.log( compute.signum( data ) );
```

<a name="erf"></a>
#### [compute.erf( x )](https://github.com/compute-io/erf)

Evaluates the error function, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var data = [ -10, -1, 0, 1, 10 ];

console.log( compute.erf( data ) );
```


<a name="erfc"></a>
#### [compute.erfc( x )](https://github.com/compute-io/erfc)

Evaluates the complementary error function, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var data = [ -10, -1, 0, 1, 10 ];

console.log( compute.erfc( data ) );
```

<a name="erfinv"></a>
#### [compute.erfinv( x )](https://github.com/compute-io/erfinv)

Evaluates the inverse error function, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var data = [ -1, -0.5, 0, 0.5, 1 ];

console.log( compute.erfinv( data ) );
```


<a name="erfcinv"></a>
#### [compute.erfcinv( x )](https://github.com/compute-io/erfcinv)

Evaluates the inverse complementary error function, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var data = [ 0, 0.5, 1, 1.5, 2 ];

console.log( compute.erfcinv( data ) );
```


### Statistics

<a name="min"></a>
#### [compute.min( arr )](https://github.com/compute-io/min)

Computes the minimum value of an array.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.min( data ) );
```


<a name="max"></a>
#### [compute.max( arr )](https://github.com/compute-io/max)

Computes the maximum value of an array.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.max( data ) );
```


<a name="range"></a>
#### [compute.range( arr )](https://github.com/compute-io/range)

Computes the arithmetic range of an array.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.range( data ) );
```


<a name="sum"></a>
#### [compute.sum( arr )](https://github.com/compute-io/sum)

Computes the sum of an array.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.sum( data ) );
```

<a name="nansum"></a>
#### [compute.nansum( arr )](https://github.com/compute-io/nansum)

Computes the sum of an array ignoring any non-numeric values.

``` javascript
var data = [ 2, NaN, 4, 2, 7, NaN, 3 ];

console.log( compute.nansum( data ) );
```


<a name="csum"></a>
#### [compute.csum( arr )](https://github.com/compute-io/csum)

Computes the cumulative sum of an array.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.csum( data ) );
```


<a name="mean"></a>
#### [compute.mean( arr )](https://github.com/compute-io/mean)

Computes the mean over an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.mean( data ) );
```

<a name="nanmean"></a>
#### [compute.nanmean( arr )](https://github.com/compute-io/nanmean)

Computes the mean over an array of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

console.log( compute.nanmean( data ) );
```


<a name="wmean"></a>
#### [compute.wmean( arr, weights )](https://github.com/compute-io/wmean)

Computes a weighted mean over an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ],
	weights = [ 1, 2, 1, 4, 0 ];

console.log( compute.wmean( data, weights ) );
```

<a name="gmean"></a>
#### [compute.gmean( arr )](https://github.com/compute-io/gmean)

Computes the geometric mean over an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.gmean( data ) );
```


<a name="nangmean"></a>
#### [compute.nangmean( arr )](https://github.com/compute-io/nangmean)

Computes the geometric mean over an array of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

console.log( compute.nangmean( data ) );
```


<a name="hmean"></a>
#### [compute.hmean( arr )](https://github.com/compute-io/hmean)

Computes the harmonic mean over an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.hmean( data ) );
```


<a name="variance"></a>
#### [compute.variance( arr )](https://github.com/compute-io/variance)

Computes the sample variance over an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.variance( data ) );
```


<a name="nanvariance"></a>
#### [compute.nanvariance( arr )](https://github.com/compute-io/nanvariance)

Computes the sample variance over an array of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

console.log( compute.nanvariance( data ) );
```


<a name="stdev"></a>
#### [compute.stdev( arr )](https://github.com/compute-io/stdev)

Computes the sample standard deviation over an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.stdev( data ) );
```


<a name="nanstdev"></a>
#### [compute.nanstdev( arr )](https://github.com/compute-io/nanstdev)

Computes the sample standard deviation over an array of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

console.log( compute.nanstdev( data ) );
```


<a name="mode"></a>
#### [compute.mode( arr )](https://github.com/compute-io/mode)

Computes the mode of an array.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.mode( data ) );
```


<a name="median"></a>
#### [compute.median( arr )](https://github.com/compute-io/median)

Computes the median of an array.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.median( data ) );
```


<a name="quantiles"></a>
#### [compute.quantiles( arr, num )](https://github.com/compute-io/quantiles)

Computes quantiles for an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.quantiles( data, 3 ) );
```


<a name="iqr"></a>
#### [compute.iqr( arr )](https://github.com/compute-io/iqr)

Computes the interquartile range for an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.iqr( data ) );
```


<a name="skewness"></a>
#### [compute.skewness( arr )](https://github.com/compute-io/skewness)

Computes the sample skewness of an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.skewness( data ) );
```


<a name="kurtosis"></a>
#### [compute.kurtosis( arr )](https://github.com/compute-io/kurtosis)

Computes the sample excess kurtosis of an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.kurtosis( data ) );
```



### Geometry

<a name="hypot"></a>
#### [compute.hypot( a, b )](https://github.com/compute-io/hypot)

Computes the hypotenuse of a right triangle.

``` javascript
var a = 10,
	b = 12;

console.log( compute.hypot( a, b ) );
```


### Information Theory

<a name="hamdist"></a>
#### [compute.hamdist( a, b )](https://github.com/compute-io/hamming)

Computes the [Hamming distance](http://en.wikipedia.org/wiki/Hamming_distance) between two sequences of equal length.

``` javascript
var a = 'beep',
	b = 'boop';

console.log( compute.hamdist( a, b ) );

var c = [ 4, 2, 3, 4 ],
	d = [ 2, 4, 3, 1 ];

console.log( compute.hamdist( c, d ) );
```



## Fluent Interface

For data pipelines, invoking serial methods can become verbose.

``` javascript
data = compute.roundn( data, -3 );
data = compute.mean( data );
data = compute.roundn( data, 0 );
...
```

[Fluent](http://en.wikipedia.org/wiki/Fluent_interface) interfaces can help alleviate this problem. Such interfaces have been popularized by libraries such as [jQuery](http://jquery.com) and [D3](http://d3js.org) which utilize method chaining.

To create a fluent interface,

``` javascript
var flow = compute.flow();
```

A `flow` pipeline should be initialized.

``` javascript
flow.value( data );
```

Once initialized, all compute methods are now available. The lone difference is that data should __not__ be explicitly passed as an argument. For example,

``` javascript
flow
	.value( data )
	.roundn( -3 )
	.mean()
	.roundn( 0 );
```

To return the flow `value`,

``` javascript
var mean = flow.value();
```

To help understand the transformations comprising a data pipeline, `flow` exposes an `inspect()` method, which logs the current `value` to the console while maintaining the fluent interface.

``` javascript
flow.inspect();
```

The above `flow` can be modified accordingly,

``` javascript
flow
	.value( data )
	.inspect()
	.roundn( -3 )
	.inspect()
	.mean()
	.inspect()
	.roundn( 0 )
	.inspect();
```

To summarize the `flow` API...

#### flow.value( [value] )

This method is a setter/getter. If no `value` is provided, returns the current flow `value`. If a `value` is provided, sets the flow `value`.

``` javascript
flow.value( [ 4, 3, 6, 2 ] );
```


#### flow.inspect()

Logs the current flow `value` to the console, while maintaining the fluent interface.

``` javascript
flow.inspect();
```


## Notes

1. 	When creating flows, ensure that the output from one computation matches the input argument requirements for the next computation.
2. 	For large datasets, rather than loading datasets into memory, consider using file streams and utilize stream tools such as [Flow.io](https://github.com/flow-io/flow.io).


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.



[npm-image]: http://img.shields.io/npm/v/compute.io.svg
[npm-url]: https://npmjs.org/package/compute.io

[travis-image]: http://img.shields.io/travis/compute-io/compute.io/master.svg
[travis-url]: https://travis-ci.org/compute-io/compute.io

[coveralls-image]: https://img.shields.io/coveralls/compute-io/compute.io/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/compute.io?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/compute.io.svg
[dependencies-url]: https://david-dm.org/compute-io/compute.io

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/compute.io.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/compute.io

[github-issues-image]: http://img.shields.io/github/issues/compute-io/compute.io.svg
[github-issues-url]: https://github.com/compute-io/compute.io/issues