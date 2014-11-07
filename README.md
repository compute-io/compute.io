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
		*	[shuffle( arr )](#shuffle)
		*	[diff( arr )](#diff)
		*	[find( arr, opts, clbk)](#find)
	-	[Special Functions](#special-functions)
		*	[signum( x )](#signum)
		*	[erf( x )](#erf)
		*	[erfc( x )](#erfc)
		*	[erfinv( x )](#erfinv)
		*	[erfcinv( x )](#erfcinv)
	- 	[Arithmetic](#arithmetic)
		*	[add( arr, x )](#add)
		*	[subtract( arr, x )](#subtract)
		*	[multiply( arr, x )](#multiply)
		*	[divide( arr, x )](#divide)
	- 	[Sets](#sets)
		*	[unique( arr, sorted )](#unique)
	-	[Linear Algebra](#linear-algebra)
		* 	[l1norm( arr )](#l1norm)
		* 	[l2norm( arr )](#l2norm)
		* 	[linfnorm( arr )](#linfnorm)
		* 	[lpnorm( arr )](#lpnorm)
	- 	[Statistics](#statistics)
		*	[min( arr )](#min)
		*	[incrmin()](#incrmin)
		*	[mmin( arr, window )](#mmin)
		*	[cmin( arr )](#cmin)
		*	[max( arr )](#max)
		*	[incrmax()](#incrmax)
		*	[mmax( arr, window )](#mmax)
		*	[cmax( arr )](#cmax)
		*	[range( arr )](#range)
		*	[sum( arr )](#sum)
		*	[nansum( arr )](#nansum)
		*	[incrsum()](#incrsum)
		*	[msum( arr, window )](#msum)
		*	[csum( arr )](#csum)
		*	[mean( arr )](#mean)
		*	[nanmean( arr )](#nanmean)
		*	[incrmean()](#incrmean)
		*	[mmean( arr, window )](#mmean)
		*	[wmean( arr, weights )](#wmean)
		*	[gmean( arr )](#gmean)
		*	[nangmean( arr )](#nangmean)
		*	[hmean( arr )](#hmean)
		*	[nanhmean( arr )](#nanhmean)
		*	[qmean( arr )](#qmean)
		*	[nanqmean( arr )](#nanqmean)
		*	[variance( arr )](#variance)
		*	[nanvariance( arr )](#nanvariance)
		*	[incrvariance()](#incrvariance)
		*	[stdev( arr )](#stdev)
		*	[nanstdev( arr )](#nanstdev)
		*	[incrstdev()](#incrstdev)
		*	[mode( arr )](#mode)
		*	[median( arr, sorted )](#median)
		*	[quantile( arr, p, opts )](#quantile)
		*	[quantiles( arr, num, opts )](#quantiles)
		*	[iqr( arr, opts )](#iqr)
		*	[idr( arr, opts )](#idr)
		*	[midhinge( arr, opts )](#midhinge)
		*	[midmean( arr, sorted )](#midmean)
		*	[trimean( arr, opts )](#trimean)
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
compute.roundn( Math.PI, -2 );
// returns 3.14

compute.roundn( 111, 2 );
// returns 100

var data = [ 2.342, 4.943, 2.234, 7.992, 3.142 ];

compute.roundn( data, -2 );
// returns [...] where each value is rounded to nearest hundredth
```

Note: if provided an `array`, the `array` is mutated.


<a name="polyval"></a>
#### [compute.polyval( coef, x )](https://github.com/compute-io/polynomial)

Evaluates a polynomial with coefficients `coef`, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var coef = [ 4, 2, 6, -17 ];

compute.polyval( coef, [ 10, -3] );
```


<a name="reverse"></a>
#### [compute.reverse( arr )](https://github.com/compute-io/reverse)

Reverses an `array` in place.

``` javascript
var arr = [ 1, 2, 3, 4 ];

reverse( arr );
// returns [ 4, 3, 2, 1 ];
```

Note: the `array` is mutated.


<a name="shuffle"></a>
#### [compute.shuffle( arr )](https://github.com/compute-io/shuffle)

Generates a random permutation of (shuffles) an `array` in place.

``` javascript
var arr = [ 1, 2, 3, 4 ];

shuffle( arr );
```

Note: the `array` is mutated.


<a name="diff"></a>
#### [compute.diff( arr )](https://github.com/compute-io/diff)

Calculates the differences between adjacent elements in an `array`.

``` javascript
var arr = [ 2, 1, 3, 4 ];

diff( arr );
// returns [ 1, -2, -1 ];
```

Note: the length of the returned `array` is one less than the length of the original `array`.


<a name="find"></a>
#### [compute.find( arr, [opts,] clbk )](https://github.com/compute-io/find)

Finds `array` elements which satisfy a test condition.

``` javascript
var arr = [ 2, 1, 3, 4 ];

var opts = {
	'k': -2,
	'returns': '*'
};

function condition( val ) {
	return val < 4;
}

find( arr, opts, condition );
// returns [ [2,3], [1,1] ];
```

For further documentation, see the [compute-find](https://github.com/compute-io/find) module.


### Special Functions

<a name="signum"></a>
#### [compute.signum( x )](https://github.com/compute-io/signum)

Evaluates the signum function, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var data = [ -10, -1, -0, 0, 1, 10 ];

compute.signum( data );
```

<a name="erf"></a>
#### [compute.erf( x )](https://github.com/compute-io/erf)

Evaluates the error function, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var data = [ -10, -1, 0, 1, 10 ];

compute.erf( data );
```


<a name="erfc"></a>
#### [compute.erfc( x )](https://github.com/compute-io/erfc)

Evaluates the complementary error function, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var data = [ -10, -1, 0, 1, 10 ];

compute.erfc( data );
```

<a name="erfinv"></a>
#### [compute.erfinv( x )](https://github.com/compute-io/erfinv)

Evaluates the inverse error function, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var data = [ -1, -0.5, 0, 0.5, 1 ];

compute.erfinv( data );
```


<a name="erfcinv"></a>
#### [compute.erfcinv( x )](https://github.com/compute-io/erfcinv)

Evaluates the inverse complementary error function, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var data = [ 0, 0.5, 1, 1.5, 2 ];

compute.erfcinv( data );
```


### Arithmetic

<a name="add"></a>
#### [compute.add( arr, x )](https://github.com/compute-io/add)

Computes an element-wise addition of a numeric `array`, where `x` may be an `array` of equal length or a `numeric` value.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.add( data, 5.5 );
```

Note: mutates the input `array`.


<a name="subtract"></a>
#### [compute.subtract( arr, x )](https://github.com/compute-io/subtract)

Computes an element-wise subtraction of a numeric `array`, where `x` may be an `array` of equal length or a `numeric` value.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.subtract( data, 5.5 );
```

Note: mutates the input `array`.


<a name="multiply"></a>
#### [compute.multiply( arr, x )](https://github.com/compute-io/multiply)

Computes an element-wise multiplication of a numeric `array`, where `x` may be an `array` of equal length or a `numeric` value.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.multiply( data, 5.5 );
```

Note: mutates the input `array`.

<a name="divide"></a>
#### [compute.divide( arr, x )](https://github.com/compute-io/divide)

Computes an element-wise division of a numeric `array`, where `x` may be an `array` of equal length or a `numeric` value.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.divide( data, 5.5 );
```

Note: mutates the input `array`.


### Sets

<a name="unique"></a>
#### [compute.unique( arr[, sorted] )](https://github.com/compute-io/unique)

Removes duplicate values to determine the subset containing all unique values of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.unique( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` flag to `true`.

Note: mutates the input `array`.



### Linear Algebra

<a name="l1norm"></a>
#### [compute.l1norm( arr )](https://github.com/compute-io/l1norm)

Computes the _L1_ norm (Manhattan/Taxicab norm) of an `array` of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.l1norm( data );
```

<a name="l2norm"></a>
#### [compute.l2norm( arr )](https://github.com/compute-io/l2norm)

Computes the _L2_ norm (Euclidean norm) of an `array` of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.l2norm( data );
```


<a name="linfnorm"></a>
#### [compute.linfnorm( arr )](https://github.com/compute-io/linfnorm)

Computes the infinity norm (Chebyshev/maximum/supremum/uniform norm) of an `array` of values.

``` javascript
var data = [ 2, 4, 2, -7, 3 ];

compute.linfnorm( data );
```

<a name="lpnorm"></a>
#### [compute.lpnorm( arr[, p] )](https://github.com/compute-io/lpnorm)

Computes the _Lp_ norm of an `array` of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

// Compute the L5 norm:
compute.lpnorm( data, 5 );
```


### Statistics

<a name="min"></a>
#### [compute.min( arr )](https://github.com/compute-io/min)

Computes the minimum value of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.min( data );
```

<a name="incrmin"></a>
#### [compute.incrmin()](https://github.com/compute-io/incrmin)

Returns a method to compute a minimum value incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var min = incrmin(),
	m;

for ( var i = 0; i < data.length; i++ ) {
	m = min( data[ i ] );
	console.log( m );
}
console.log( min() );
```

<a name="mmin"></a>
#### [compute.mmin( arr, window )](https://github.com/compute-io/mmin)

Computes a moving minimum over a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.mmin( data, 2 );
```


<a name="cmin"></a>
#### [compute.cmin( arr )](https://github.com/compute-io/cmin)

Computes the cumulative minimum of a numeric `array`.

``` javascript
var data = [ 7, 4, 2, 4, 3 ];

compute.cmin( data );
```


<a name="max"></a>
#### [compute.max( arr )](https://github.com/compute-io/max)

Computes the maximum value of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.max( data );
```


<a name="incrmax"></a>
#### [compute.incrmax()](https://github.com/compute-io/incrmax)

Returns a method to compute a maximum value incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var max = incrmax(),
	m;

for ( var i = 0; i < data.length; i++ ) {
	m = max( data[ i ] );
	console.log( m );
}
console.log( max() );
```

<a name="mmax"></a>
#### [compute.mmax( arr, window )](https://github.com/compute-io/mmax)

Computes a moving maximum over a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.mmax( data, 2 );
```


<a name="cmax"></a>
#### [compute.cmax( arr )](https://github.com/compute-io/cmax)

Computes the cumulative maximum of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.cmax( data );
```


<a name="range"></a>
#### [compute.range( arr )](https://github.com/compute-io/range)

Computes the arithmetic range of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.range( data );
```


<a name="sum"></a>
#### [compute.sum( arr )](https://github.com/compute-io/sum)

Computes the sum of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.sum( data );
```

<a name="nansum"></a>
#### [compute.nansum( arr )](https://github.com/compute-io/nansum)

Computes the sum of an `array` ignoring any non-numeric values.

``` javascript
var data = [ 2, NaN, 4, 2, 7, NaN, 3 ];

compute.nansum( data );
```

<a name="incrsum"></a>
#### [compute.incrsum()](https://github.com/compute-io/incrsum)

Returns a method to compute a sum incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var sum = incrsum(),
	s;

for ( var i = 0; i < data.length; i++ ) {
	s = sum( data[ i ] );
	console.log( s );
}
console.log( sum() );
```


<a name="msum"></a>
#### [compute.msum( arr, window )](https://github.com/compute-io/msum)

Computes a moving sum over a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.msum( data, 2 );
```


<a name="csum"></a>
#### [compute.csum( arr )](https://github.com/compute-io/csum)

Computes the cumulative sum of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.csum( data );
```


<a name="mean"></a>
#### [compute.mean( arr )](https://github.com/compute-io/mean)

Computes the arithmetic mean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.mean( data );
```

<a name="nanmean"></a>
#### [compute.nanmean( arr )](https://github.com/compute-io/nanmean)

Computes the arithmetic mean over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

compute.nanmean( data );
```


<a name="incrmean"></a>
#### [compute.incrmean()](https://github.com/compute-io/incrmean)

Returns a method to compute an arithmetic mean incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var mean = incrmean(),
	mu;

for ( var i = 0; i < data.length; i++ ) {
	mu = mean( data[ i ] );
	console.log( mu );
}
console.log( mean() );
```


<a name="mmean"></a>
#### [compute.mmean( arr, window )](https://github.com/compute-io/mmean)

Computes a moving arithmetic mean (sliding window average) over a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.mmean( data, 2 );
```


<a name="wmean"></a>
#### [compute.wmean( arr, weights )](https://github.com/compute-io/wmean)

Computes a weighted mean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ],
	weights = [ 1, 2, 1, 4, 0 ];

compute.wmean( data, weights );
```

<a name="gmean"></a>
#### [compute.gmean( arr )](https://github.com/compute-io/gmean)

Computes the geometric mean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.gmean( data );
```


<a name="nangmean"></a>
#### [compute.nangmean( arr )](https://github.com/compute-io/nangmean)

Computes the geometric mean over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

compute.nangmean( data );
```


<a name="hmean"></a>
#### [compute.hmean( arr )](https://github.com/compute-io/hmean)

Computes the harmonic mean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.hmean( data );
```

<a name="nanhmean"></a>
#### [compute.nanhmean( arr )](https://github.com/compute-io/nanhmean)

Computes the harmonic mean over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

compute.nanhmean( data );
```


<a name="qmean"></a>
#### [compute.qmean( arr )](https://github.com/compute-io/qmean)

Computes the quadratic mean (root mean square) of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.qmean( data );
```


<a name="nanqmean"></a>
#### [compute.nanqmean( arr )](https://github.com/compute-io/nanqmean)

Computes the quadratic mean (root mean square) over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

compute.nanqmean( data );
```


<a name="variance"></a>
#### [compute.variance( arr )](https://github.com/compute-io/variance)

Computes the sample variance over a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.variance( data );
```


<a name="nanvariance"></a>
#### [compute.nanvariance( arr )](https://github.com/compute-io/nanvariance)

Computes the sample variance over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

compute.nanvariance( data );
```

<a name="incrvariance"></a>
#### [compute.incrvariance()](https://github.com/compute-io/incrvariance)

Returns a method to compute a sample variance incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var variance = incrvariance(),
	s2;

for ( var i = 0; i < data.length; i++ ) {
	s2 = variance( data[ i ] );
	console.log( s2 );
}
console.log( variance() );
```


<a name="stdev"></a>
#### [compute.stdev( arr )](https://github.com/compute-io/stdev)

Computes the sample standard deviation of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.stdev( data );
```


<a name="nanstdev"></a>
#### [compute.nanstdev( arr )](https://github.com/compute-io/nanstdev)

Computes the sample standard deviation over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

compute.nanstdev( data );
```

<a name="incrstdev"></a>
#### [compute.incrstdev()](https://github.com/compute-io/incrstdev)

Returns a method to compute a sample standard deviation incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var stdev = incrstdev(),
	sigma;

for ( var i = 0; i < data.length; i++ ) {
	sigma = stdev( data[ i ] );
	console.log( sigma );
}
console.log( stdev() );
```


<a name="mode"></a>
#### [compute.mode( arr )](https://github.com/compute-io/mode)

Computes the mode of an `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.mode( data );
```


<a name="median"></a>
#### [compute.median( arr[, sorted] )](https://github.com/compute-io/median)

Computes the median of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.median( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` flag to `true`.


<a name="quantile"></a>
#### [compute.quantile( arr, p[, opts] )](https://github.com/compute-io/quantile)

Computes a quantile for a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.quantile( data, 0.25 );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` option to `true`.

``` javascript
var opts = {
	'sorted': true
};

var data = [ 2, 2, 3, 4, 7 ];

compute.quantile( data, 0.25, opts );
```


<a name="quantiles"></a>
#### [compute.quantiles( arr, num[, opts] )](https://github.com/compute-io/quantiles)

Computes quantiles for a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.quantiles( data, 3 );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` option to `true`.

``` javascript
var opts = {
	'sorted': true
};

var data = [ 2, 2, 3, 4, 7 ];

compute.quantiles( data, 2, opts );
```


<a name="iqr"></a>
#### [compute.iqr( arr[, opts] )](https://github.com/compute-io/iqr)

Computes the interquartile range of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.iqr( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` options flag to `true`.


<a name="idr"></a>
#### [compute.idr( arr[, opts] )](https://github.com/compute-io/idr)

Computes the interdecile range of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.idr( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` options flag to `true`.


<a name="midhinge"></a>
#### [compute.midhinge( arr[, opts] )](https://github.com/compute-io/midhinge)

Computes the midhinge of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.midhinge( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` options flag to `true`.



<a name="midmean"></a>
#### [compute.midmean( arr[, sorted] )](https://github.com/compute-io/midmean)

Computes the midmean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.midmean( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` flag to `true`.


<a name="trimean"></a>
#### [compute.trimean( arr[, opts] )](https://github.com/compute-io/trimean)

Computes the trimean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.trimean( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` options flag to `true`.



<a name="skewness"></a>
#### [compute.skewness( arr )](https://github.com/compute-io/skewness)

Computes the sample skewness of an `array` of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.skewness( data );
```


<a name="kurtosis"></a>
#### [compute.kurtosis( arr )](https://github.com/compute-io/kurtosis)

Computes the sample excess kurtosis of an `array` of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.kurtosis( data );
```



### Geometry

<a name="hypot"></a>
#### [compute.hypot( a, b )](https://github.com/compute-io/hypot)

Computes the hypotenuse of a right triangle.

``` javascript
var a = 10,
	b = 12;

compute.hypot( a, b );
```


### Information Theory

<a name="hamdist"></a>
#### [compute.hamdist( a, b )](https://github.com/compute-io/hamming)

Computes the [Hamming distance](http://en.wikipedia.org/wiki/Hamming_distance) between two sequences of equal length.

``` javascript
var a = 'beep',
	b = 'boop';

compute.hamdist( a, b );

var c = [ 4, 2, 3, 4 ],
	d = [ 2, 4, 3, 1 ];

compute.hamdist( c, d );
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
