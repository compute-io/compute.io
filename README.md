Compute.io
==========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computation library.


## Table of Contents

1. 	[Installation](#installation)
1. 	[Usage](#usage)
	- 	[Utilities](#utilities)
		*	[polyval( coef, x )](#polyval)
		*	[find( arr, opts, clbk )](#find)
		*	[dims( arr, max )](#dims)
		*	[issorted( arr, clbk )](#issorted)
	-	[Array Creation](#array-creation)
		*	[linspace( start, stop, length )](#linspace)
		*	[incrspace( start, stop, increment )](#incrspace)
		*	[logspace( a, b, length )](#logspace)
		*	[datespace( start, stop, length, opts )](#datespace)
		*	[incrdatespace( start, stop, increment, opts )](#incrdatespace)
		*	[zip( arr1, arr2,..., opts )](#zip)
		*	[unzip( arr, idx )](#unzip)
	- 	[Sorting and Reshaping Arrays](#sorting-and-reshaping-arrays)
		*	[reverse( arr )](#reverse)
		*	[shuffle( arr )](#shuffle)
		*	[circshift( x, k )](#circshift)
	-	[Special Functions](#special-functions)
		*	[abs( arr )](#abs)
		*	[sqrt( arr )](#sqrt)
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
		* 	[roundn( x, n )](#roundn)
		*	[diff( arr )](#diff)
	- 	[Relational Operations](#relational-operations)
		* 	[eq( arr, x, opts)](#eq)
		* 	[neq( arr, x, opts)](#neq)
		*	[gt( arr, x )](#gt)
		*	[geq( arr, x )](#geq)
		*	[lt( arr, x )](#lt)
		*	[leq( arr, x )](#leq)
	-	[Logical Operations](#logical-operations)
		*	[isnumeric( arr )](#isnumeric)
		*	[isnan( arr )](#isnan)
		*	[isfinite( arr )](#isfinite)
		*	[isinteger( arr )](#isinteger)
		*	[isinf( arr )](#isinf)
	-	[Trigonometry](#trigonometry)
		*	[deg2rad( x )](#deg2rad)
		*	[rad2deg( x )](#rad2deg)
	-	[Geometry](#geometry)
		*	[hypot( a, b )](#hypot)
	- 	[Sets](#sets)
		*	[unique( arr, sorted )](#unique)
	- 	[Discrete Mathematics](#discrete-mathematics)
		*	[gcd( arr )](#gcd)
		*	[lcm( arr )](#lcm)
	-	[Linear Algebra](#linear-algebra)
		* 	[l1norm( arr )](#l1norm)
		* 	[l2norm( arr )](#l2norm)
		* 	[linfnorm( arr )](#linfnorm)
		* 	[lpnorm( arr )](#lpnorm)
		*	[dot( x, y )](#dot)
		*	[cross( x, y )](#cross)
	- 	[Statistics](#statistics)
		*	[Min](#stats-min)
			*	[min( arr )](#min)
			*	[argmin( arr )](#argmin)
			*	[nanmin( arr )](#nanmin)
			*	[argnanmin( arr )](#argnanmin)
			*	[incrmin()](#incrmin)
			*	[mmin( arr, window )](#mmin)
			*	[cmin( arr )](#cmin)
		*	[Max](#stats-max)
			*	[max( arr )](#max)
			*	[argmax( arr )](#argmax)
			*	[nanmax( arr )](#nanmax)
			*	[argnanmax( arr )](#argnanmax)
			*	[incrmax()](#incrmax)
			*	[mmax( arr, window )](#mmax)
			*	[cmax( arr )](#cmax)
		*	[Range](#stats-range)
			*	[range( arr )](#range)
			*	[nanrange( arr, accessor )](#nanrange)
		*	[Sum](#stats-sum)
			*	[sum( arr )](#sum)
			*	[nansum( arr )](#nansum)
			*	[incrsum()](#incrsum)
			*	[msum( arr, window )](#msum)
			*	[incrmsum( window )](#incrmsum)
			*	[csum( arr )](#csum)
		*	[Product](#stats-product)
			*	[prod( arr, accessor )](#prod)
			*	[nanprod( arr, accessor)](#nanprod)
			*	[mprod( arr, window, accessor)](#mprod)
			*	[cprod( arr, accessor)](#cprod)
		*	[Arithmetic Mean](#stats-mean)
			*	[mean( arr )](#mean)
			*	[nanmean( arr )](#nanmean)
			*	[incrmean()](#incrmean)
			*	[mmean( arr, window )](#mmean)
			*	[incrmmean( window )](#incrmmean)
		*	[Weighted Mean](#stats-wmean)
			*	[wmean( arr, weights )](#wmean)
		*	[Geometric Mean](#stats-gmean)
			*	[gmean( arr )](#gmean)
			*	[nangmean( arr )](#nangmean)
		*	[Harmonic Mean](#stats-hmean)
			*	[hmean( arr )](#hmean)
			*	[nanhmean( arr )](#nanhmean)
		*	[Quadratic Mean](#stats-qmean)
			*	[qmean( arr )](#qmean)
			*	[nanqmean( arr )](#nanqmean)
		*	[Variance](#stats-variance)
			*	[variance( arr )](#variance)
			*	[nanvariance( arr )](#nanvariance)
			*	[incrvariance()](#incrvariance)
			*	[mvariance( arr, window )](#mvariance)
			*	[incrmvariance( window )](#incrmvariance)
		*	[Standard Deviation](#stats-stdev)
			*	[stdev( arr )](#stdev)
			*	[nanstdev( arr )](#nanstdev)
			*	[incrstdev()](#incrstdev)
			*	[mstdev( arr, window )](#mstdev)
			*	[incrmstdev( arr )](#incrmstdev)
		*	[Mode](#stats-mode)
			*	[mode( arr )](#mode)
		*	[Rank Statistics](#stats-rank)
			*	[median( arr, sorted )](#median)
			*	[nanmedian( arr, opts )](#nanmedian)
			*	[quantile( arr, p, opts )](#quantile)
			*	[quantiles( arr, num, opts )](#quantiles)
			*	[iqr( arr, opts )](#iqr)
			*	[idr( arr, opts )](#idr)
			*	[midrange( arr, sorted )](#midrange)
			*	[midhinge( arr, opts )](#midhinge)
			*	[midsummary( arr, n, opts )](#midsummary)
			*	[midmean( arr, sorted )](#midmean)
			*	[lmidmean( arr, sorted )](#lmidmean)
			*	[umidmean( arr, sorted )](#umidmean)
			*	[trimean( arr, opts )](#trimean)
		*	[Skewness](#stats-skewness)
			*	[skewness( arr )](#skewness)
		*	[Kurtosis](#stats-kurtosis)
			*	[kurtosis( arr )](#kurtosis)
		*	[Multivariate](#stats-multivariate)
			*	[covariance( arr1, arr2,..., opts )](#covariance)
			*	[pcorr( arr1, arr2,... )](#pcorr)
	- 	[Information Theory](#information-theory)
		*	[hamdist( a, b )](#hamdist)
		*	[tversky( a, b, opts)](#tversky)
1. 	[Fluent Interface](#fluent-interface)
1. 	[Tests](#tests)
	- 	[Unit](#unit)
	-	[Coverage](#test-coverage)
1. 	[Contributing](#contributing)
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

<a name="polyval"></a>
#### [compute.polyval( coef, x )](https://github.com/compute-io/polynomial)

Evaluates a polynomial with coefficients `coef`, where `x` may be a single `numeric` value or an `array` of numeric values.

``` javascript
var coef = [ 4, 2, 6, -17 ];

var x = compute.polyval( coef, [ 10, -3] );
```


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

var results = compute.find( arr, opts, condition );
// returns [ [2,3], [1,1] ]
```

For further documentation, see the [compute-find](https://github.com/compute-io/find) module.


<a name="dims"></a>
#### [compute.dims( arr[, max] )](https://github.com/compute-io/dims)

Computes `array` dimensions, including nested `arrays`.

``` javascript
var data, d;

data = [ 1, 2 ];
d = compute.dims( data );
// returns [2]

data = [ [1,2], [1,2] ];
d = compute.dims( data );
// returns [2,2]
```

To limit the number of dimensions returned, set the `max` option.



<a name="issorted"></a>
#### [compute.issorted( arr[, comparator] )](https://github.com/compute-io/issorted)

Returns a `boolean` indicating if an input `array` is sorted.

``` javascript
var bool = compute.issorted( [ 2, 3, 5, 4 ] );
// returns false
```

By default, the method assumes __ascending__ order. To impose an arbitrary sort order, provide a `comparator` function.

``` javascript
function descending( a, b ) {
	return b - a;
}

var bool = compute.issorted( [ 5, 4, 3, 2 ], descending );
// returns true
```







### Array Creation

<a name="linspace"></a>
#### [compute.linspace( start, stop[, length] )](https://github.com/compute-io/linspace)

Generates a linearly spaced numeric `array`. If a `length` is not provided, the default output `array` length is `100`.

``` javascript
var arr = compute.linspace( 0, 100, 6 );
// returns [ 0, 20, 40, 60, 80, 100 ]
```


<a name="incrspace"></a>
#### [compute.incrspace( start, stop[, increment] )](https://github.com/compute-io/incrspace)

Generates a linearly spaced numeric `array`. If an `increment` is not provided, the default `increment` is `1`.

``` javascript
var arr = compute.incrspace( 0, 11, 2 );
// returns [ 0, 2, 4, 6, 8, 10 ]
```


<a name="logspace"></a>
#### [compute.logspace( a, b[, length] )](https://github.com/compute-io/logspace)

Generates a logarithmically spaced numeric `array`. If a `length` is not provided, the default output `array` length is `10`.

``` javascript
var arr = compute.logspace( 0, 2, 6 );
// returns [ 1, ~2.5, ~6.31, ~15.85, ~39.81, 100 ]
```


<a name="datespace"></a>
#### [compute.datespace( start, stop[, length, opts] )](https://github.com/compute-io/datespace)

Generates an `array` of linearly spaced [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects. If a `length` is not provided, the default output `array` length is `100`.

``` javascript
var stop = '2014-12-02T07:00:54.973Z',
	start = new Date( stop ) - 60000;

var arr = compute.datespace( start, stop, 6 );
/* returns [
	'Mon Dec 01 2014 22:59:54 GMT-0800 (PST)',
	'Mon Dec 01 2014 23:00:06 GMT-0800 (PST)',
	'Mon Dec 01 2014 23:00:18 GMT-0800 (PST)',
	'Mon Dec 01 2014 23:00:30 GMT-0800 (PST)',
	'Mon Dec 01 2014 23:00:42 GMT-0800 (PST)',
	'Mon Dec 01 2014 23:00:54 GMT-0800 (PST)'
]
*/
```

For function `options`, see the [compute-datespace](https://github.com/compute-io/datespace) module.


<a name="incrdatespace"></a>
#### [compute.incrdatespace( start, stop[, increment, opts] )](https://github.com/compute-io/incrdatespace)

Generates an `array` of linearly spaced [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects. If an `increment` is not provided, the default `increment` is `day`.

``` javascript
var stop = '2014-12-02T07:00:54.973Z',
	start = new Date( stop ) - 60000;

var arr = compute.incrdatespace( start, stop, '8sec' );
/* returns [
	'Mon Dec 01 2014 22:59:54 GMT-0800 (PST)',
	'Mon Dec 01 2014 23:00:06 GMT-0800 (PST)',
	'Mon Dec 01 2014 23:00:18 GMT-0800 (PST)',
	'Mon Dec 01 2014 23:00:30 GMT-0800 (PST)',
	'Mon Dec 01 2014 23:00:42 GMT-0800 (PST)'
]
*/
```

For function `options`, see the [compute-incrdatespace](https://github.com/compute-io/incrdatespace) module.



<a name="zip"></a>
#### [compute.zip( arr1, arr2,...[, opts] )](https://github.com/compute-io/zip)

Returns an `array` of `arrays`, where the ith element (tuple) in the returned `array` contains the ith elements of the input `arrays`.

``` javascript
var zipped = compute.zip( [1,2], ['a','b'] );
// returns [ [1,'a'], [2,'b'] ]
```

For function `options`, see the [compute-zip](https://github.com/compute-io/zip) module.


<a name="unzip"></a>
#### [compute.unzip( arr[, idx] )](https://github.com/compute-io/unzip)

Unzips a [zipped array](https://github.com/compute-io/zip) (i.e., a nested `array` of tuples).

``` javascript
var arr = [ [1,'a',3], [2,'b',4] ];

var out = compute.unzip( arr );
// returns [ [1,2], ['a','b'], [3,4] ];
```

To unzip specific tuple elements, you can provide an `array` of indices as an optional second argument.

``` javascript
var arr = [ [1,'a',3], [2,'b',4] ];

var out = compute.unzip( arr, [0,2] );
// returns [ [1,2], [3,4] ];
```



### Sorting and Reshaping Arrays

<a name="reverse"></a>
#### [compute.reverse( arr )](https://github.com/compute-io/reverse)

Reverses an `array` in place.

``` javascript
var arr = [ 1, 2, 3, 4 ];

compute.reverse( arr );
// returns [ 4, 3, 2, 1 ]
```

Note: the `array` is mutated.


<a name="shuffle"></a>
#### [compute.shuffle( arr )](https://github.com/compute-io/shuffle)

Generates a random permutation of (shuffles) an `array` in place.

``` javascript
var arr = [ 1, 2, 3, 4 ];

compute.shuffle( arr );
```

Note: the `array` is mutated.


<a name="circshift"></a>
#### [compute.circshift( x, k )](https://github.com/compute-io/circshift)

Circularly shifts elements/characters. `x` may be an `array` or a `string`. `k` is an `integer` specifying the number of positions to shift. The sign of `k` specifies the shift direction.

``` javascript
compute.circshift( [1,2,3,4,5], 2 );
// returns [4,5,1,2,3]

var str = compute.circshift( 'beepboop', -3 );
// returns 'pboopbee'
```

Note: if provided an `array`, the `array`, is mutated.





### Special Functions

<a name="abs"></a>
#### [compute.abs( arr )](https://github.com/compute-io/abs)

Computes an element-wise absolute value for each element of a numeric `array`.

``` javascript
var data = [ 2, -4, 2, -7, 3 ];

compute.abs( data );
```

Note: mutates the input `array`.


<a name="sqrt"></a>
#### [compute.sqrt( arr )](https://github.com/compute-io/sqrt)

Computes an element-wise principal square root for each element of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

compute.sqrt( data );
```

Note: mutates the input `array`.


<a name="signum"></a>
#### [compute.signum( x )](https://github.com/compute-io/signum)

Evaluates the signum function, where `x` may be a single `numeric` value or a numeric `array`.

``` javascript
var data = [ -10, -1, -0, 0, 1, 10 ];

var x = compute.signum( data );
```

<a name="erf"></a>
#### [compute.erf( x )](https://github.com/compute-io/erf)

Evaluates the error function, where `x` may be a single `numeric` value or a numeric `array`.

``` javascript
var data = [ -10, -1, 0, 1, 10 ];

var x = compute.erf( data );
```


<a name="erfc"></a>
#### [compute.erfc( x )](https://github.com/compute-io/erfc)

Evaluates the complementary error function, where `x` may be a single `numeric` value or a numeric `array`.

``` javascript
var data = [ -10, -1, 0, 1, 10 ];

var x = compute.erfc( data );
```

<a name="erfinv"></a>
#### [compute.erfinv( x )](https://github.com/compute-io/erfinv)

Evaluates the inverse error function, where `x` may be a single `numeric` value or a numeric `array`.

``` javascript
var data = [ -1, -0.5, 0, 0.5, 1 ];

var x = compute.erfinv( data );
```


<a name="erfcinv"></a>
#### [compute.erfcinv( x )](https://github.com/compute-io/erfcinv)

Evaluates the inverse complementary error function, where `x` may be a single `numeric` value or a numeric `array`.

``` javascript
var data = [ 0, 0.5, 1, 1.5, 2 ];

var x = compute.erfcinv( data );
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


<a name="roundn"></a>
#### [compute.roundn( x, n )](https://github.com/compute-io/roundn)

Rounds values to the nearest multiple of `10^n`. `x` may be either a single numeric value or an array of values. `n` must be an `integer`.

``` javascript
compute.roundn( Math.PI, -2 );
// returns 3.14

var x = compute.roundn( 111, 2 );
// returns 100

var data = [ 2.342, 4.943, 2.234, 7.992, 3.142 ];

compute.roundn( data, -2 );
// returns [...] where each value is rounded to nearest hundredth
```

Note: if provided an `array`, the `array` is mutated.


<a name="diff"></a>
#### [compute.diff( arr )](https://github.com/compute-io/diff)

Calculates the differences between adjacent elements in an `array`.

``` javascript
var arr = [ 2, 1, 3, 4 ];

var diff = compute.diff( arr );
// returns [ 1, -2, -1 ]
```

Note: the length of the returned `array` is one less than the length of the original `array`.









### Relational Operations


<a name="eq"></a>
#### [compute.eq( arr, x[, opts] )](https://github.com/compute-io/eq)

Computes an element-wise comparison (equality) of an `array`, where `x` may either be an `array` of equal length or a single value (of any type).

The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is equal to a compared value and `0` means that an element is __not__ equal to a compared value.

``` javascript
var data = [ 2, 4, 2, 7, 3 ],
	out;

out = compute.eq( data, 3 );
// returns [ 0, 0, 0, 0, 1 ]

out = compute.eq( data, [ 3, 4, 1, 7, 4 ] );
// returns [ 0, 1, 0, 1, 0 ]
```

For function `options`, see [compute-eq](https://github.com/compute-io/eq).


<a name="neq"></a>
#### [compute.neq( arr, x[, opts] )](https://github.com/compute-io/neq)

Computes an element-wise comparison (not equal) of an `array`, where `x` may either be an `array` of equal length or a single value (of any type).

The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is __not__ equal to a compared value and `0` means that an element is equal to a compared value.

``` javascript
var data = [ 2, 4, 2, 7, 3 ],
	out;

out = compute.neq( data, 3 );
// returns [ 1, 1, 1, 1, 0 ]

out = compute.neq( data, [ 3, 4, 1, 7, 4 ] );
// returns [ 1, 0, 1, 0, 1 ]
```

For function `options`, see [compute-neq](https://github.com/compute-io/neq).



<a name="gt"></a>
#### [compute.gt( arr, x )](https://github.com/compute-io/gt)

Computes an element-wise comparison (greater than) of an `array`, where `x` may either be an `array` of equal length or a single value (`number` or `string`).

The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is greater than a compared value and `0` means that an element is __not__ greater than a compared value.

``` javascript
var data = [ 2, 4, 2, 7, 3 ],
	out;

out = compute.gt( data, 3.14 );
// returns [ 0, 1, 0, 1, 0 ]

out = compute.gt( data, [3, 5, 1, 4, 4 ] );
// returns [ 0, 0, 1, 1, 0 ]
```


<a name="geq"></a>
#### [compute.geq( arr, x )](https://github.com/compute-io/geq)

Computes an element-wise comparison (greater than or equal to) of an `array`, where `x` may either be an `array` of equal length or a single value (`number` or `string`).

The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is greater than or equal to a compared value and `0` means that an element is __not__ greater than or equal to a compared value.

``` javascript
var data = [ 2, 4, 2, 7, 3 ],
	out;

out = compute.geq( data, 3.14 );
// returns [ 0, 1, 0, 1, 0 ]

out = compute.geq( data, [3, 5, 1, 7, 4 ] );
// returns [ 0, 0, 1, 1, 0 ]
```


<a name="lt"></a>
#### [compute.lt( arr, x )](https://github.com/compute-io/lt)

Computes an element-wise comparison (less than) of an `array`, where `x` may either be an `array` of equal length or a single value (`number` or `string`).

The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is less than a compared value and `0` means that an element is __not__ less than a compared value.

``` javascript
var data = [ 2, 4, 2, 7, 3 ],
	out;

out = compute.lt( data, 3.14 );
// returns [ 1, 0, 1, 0, 1 ]

out = compute.lt( data, [3, 5, 1, 4, 4 ] );
// returns [ 1, 1, 0, 0, 1 ]
```


<a name="leq"></a>
#### [compute.leq( arr, x )](https://github.com/compute-io/leq)

Computes an element-wise comparison (less than or equal to) of an `array`, where `x` may either be an `array` of equal length or a single value (`number` or `string`).

The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is less than or equal to a compared value and `0` means that an element is __not__ less than or equal to a compared value.

``` javascript
var data = [ 2, 4, 2, 7, 3 ],
	out;

out = compute.leq( data, 3.14 );
// returns [ 1, 0, 1, 0, 1 ]

out = compute.leq( data, [3, 5, 1, 7, 4 ] );
// returns [ 1, 1, 0, 1, 1 ]
```


### Logical Operations

<a name="isnumeric"></a>
#### [compute.isnumeric( arr )](https://github.com/compute-io/isnumeric)

Computes for each `array` element whether an element is numeric. The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is numeric and `0` means that an element is __not__ numeric.

``` javascript
var out = compute.isnumeric( [ 2, '3', 5, 4, null, NaN ] );
// returns [ 1, 0, 1, 1, 0, 0 ]
```


<a name="isnan"></a>
#### [compute.isnan( arr )](https://github.com/compute-io/isnan)

Computes for each `array` element whether an element is `NaN`. The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is `NaN` and `0` means that an element is __not__ `NaN`.

``` javascript
var out = compute.isnan( [ 2, '3', 5, 4, null ] );
// returns [ 0, 1, 0, 0, 1 ]
```


<a name="isfinite"></a>
#### [compute.isfinite( arr )](https://github.com/compute-io/isfinite)

Computes for each `array` element whether an element is a finite `number`. The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is a finite `number` and `0` means that an element is __not__ a finite `number`.

``` javascript
var out = compute.isfinite( [ 2, 1/0, 'beep', 5, 4, -1/0, null, NaN ] );
// returns [ 1, 0, 0, 1, 1, 0, 0, 0 ]
```


<a name="isinteger"></a>
#### [compute.isinteger( arr )](https://github.com/compute-io/isinteger)

Computes for each `array` element whether an element is an `integer`. The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is an `integer` and `0` means that an element is __not__ an `integer`.

``` javascript
var out = compute.isinteger( [ 2, 1/0, 'beep', 0, -4, 3.14, null, NaN ] );
// returns [ 1, 0, 0, 1, 1, 0, 0, 0 ]
```



<a name="isinf"></a>
#### [compute.isinf( arr )](https://github.com/compute-io/isinf)

Computes for each `array` element whether an element is infinite. The function returns an `array` with length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is infinite and `0` means that an element is __not__ infinite.

``` javascript
var out = compute.isinf( [ 2, 1/0, 'beep', 5, 4, -1/0 ] );
// returns [ 0, 1, 0, 0, 0, 1 ]
```




### Trigonometry

<a name="deg2rad"></a>
#### [compute.deg2rad( x )](https://github.com/compute-io/deg2rad)

Converts degrees to radians, where `x` may be a single `numeric` value or a numeric `array`.

``` javascript
var val = compute.deg2rad( 90 );
// returns pi/2

var data = [ 0, 45, 90, 135, 180 ];
compute.deg2rad( data );
// returns [ 0, pi/4, pi/2, 3pi/4, pi ]
```

Note: mutates the input `array`.


<a name="rad2deg"></a>
#### [compute.rad2deg( x )](https://github.com/compute-io/rad2deg)

Converts radians to degrees, where `x` may be a single `numeric` value or a numeric `array`.

``` javascript
var val = compute.rad2deg( Math.PI/2 );
// returns 90

var data = [ 0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI ];
compute.rad2deg( data );
// returns [ 0, 45, 90, 135, 180 ]
```

Note: mutates the input `array`.



### Geometry

<a name="hypot"></a>
#### [compute.hypot( a, b )](https://github.com/compute-io/hypot)

Computes the hypotenuse of a right triangle.

``` javascript
var a = 10,
	b = 12;

var c = compute.hypot( a, b );
```




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


### Discrete Mathematics

<a name="gcd"></a>
#### [compute.gcd( arr )](https://github.com/compute-io/gcd)

Computes the [greatest common divisor](http://en.wikipedia.org/wiki/Greatest_common_divisor) (gcd) of two or more `integers`. 

``` javascript
var val = compute.gcd( [48, 18] );
// returns 6
```

If provided an empty `array`, returns `null`.


<a name="lcm"></a>
#### [compute.lcm( arr )](https://github.com/compute-io/lcm)

Computes the [least common multiple](http://en.wikipedia.org/wiki/Least_common_multiple) (lcm) of two or more `integers`. 

``` javascript
var val = compute.lcm( [21, 6] );
// returns 42
```

If provided an empty `array`, returns `null`.




### Linear Algebra

<a name="l1norm"></a>
#### [compute.l1norm( arr )](https://github.com/compute-io/l1norm)

Computes the _L1_ norm (Manhattan/Taxicab norm) of an `array` of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var norm = compute.l1norm( data );
```

<a name="l2norm"></a>
#### [compute.l2norm( arr )](https://github.com/compute-io/l2norm)

Computes the _L2_ norm (Euclidean norm) of an `array` of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var norm = compute.l2norm( data );
```


<a name="linfnorm"></a>
#### [compute.linfnorm( arr )](https://github.com/compute-io/linfnorm)

Computes the infinity norm (Chebyshev/maximum/supremum/uniform norm) of an `array` of values.

``` javascript
var data = [ 2, 4, 2, -7, 3 ];

var norm = compute.linfnorm( data );
```

<a name="lpnorm"></a>
#### [compute.lpnorm( arr[, p] )](https://github.com/compute-io/lpnorm)

Computes the _Lp_ norm of an `array` of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

// Compute the L5 norm:
var norm = compute.lpnorm( data, 5 );
```


<a name="dot"></a>
#### [compute.dot( x, y )](https://github.com/compute-io/dot)

Computes the dot product between two `arrays` of equal length.

``` javascript
var val = compute.dot( [1,2,3], [4,5,6] );
```


<a name="cross"></a>
#### [compute.cross( x, y )](https://github.com/compute-io/cross)

Computes the cross product between two `arrays` of length `3`.

``` javascript
var val = compute.cross( [1,2,3], [4,5,6] );
```


### Statistics

<a name="stats-min"></a>

<a name="min"></a>
#### [compute.min( arr )](https://github.com/compute-io/min)

Computes the minimum value of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var min = compute.min( data );
// returns 2
```

<a name="argmin"></a>
#### [compute.argmin( arr )](https://github.com/compute-io/argmin)

Computes the minimum value of a numeric `array` and returns the corresponding `array` indices.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var idx = compute.argmin( data );
// returns [0,2]
```

<a name="nanmin"></a>
#### [compute.nanmin( arr )](https://github.com/compute-io/nanmin)

Computes the minimum value of an `array` ignoring non-numeric values.

``` javascript
var data = [ null, 2, 4, 2, null, 7, 3 ];

var min = compute.nanmin( data );
// returns 2
```


<a name="argnanmin"></a>
#### [compute.argnanmin( arr )](https://github.com/compute-io/argnanmin)

Computes the minimum value of an `array` ignoring non-numeric values and returns the corresponding `array` indices.

``` javascript
var data = [ null, 2, 4, 2, null, 7, 3 ];

var idx = compute.argnanmin( data );
// returns [1,3]
```


<a name="incrmin"></a>
#### [compute.incrmin()](https://github.com/compute-io/incrmin)

Returns a method to compute a minimum value incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var min = compute.incrmin(),
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

var arr = compute.mmin( data, 2 );
```


<a name="cmin"></a>
#### [compute.cmin( arr )](https://github.com/compute-io/cmin)

Computes the cumulative minimum of a numeric `array`.

``` javascript
var data = [ 7, 4, 2, 4, 3 ];

var arr = compute.cmin( data );
```


<a name="stats-max"></a>

<a name="max"></a>
#### [compute.max( arr )](https://github.com/compute-io/max)

Computes the maximum value of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var max = compute.max( data );
// returns 7
```



<a name="argmax"></a>
#### [compute.argmax( arr )](https://github.com/compute-io/argmax)

Computes the maximum value of a numeric `array` and returns the corresponding `array` indices.

``` javascript
var data = [ 2, 4, 2, 7, 7, 3 ];

var idx = compute.argmax( data );
// returns [3,4]
```


<a name="nanmax"></a>
#### [compute.nanmax( arr )](https://github.com/compute-io/nanmax)

Computes the maximum value of a numeric `array` ignoring non-numeric values.

``` javascript
var data = [ -2, -4, null, -2, null, -7, -3 ];

var max = compute.nanmax( data );
// returns -2
```


<a name="argnanmax"></a>
#### [compute.argnanmax( arr )](https://github.com/compute-io/argnanmax)

Computes the maximum value of an `array` ignoring non-numeric values and returns the corresponding `array` indices.

``` javascript
var data = [ null, -2, -4, -2, null, -7, -3 ];

var idx = compute.argnanmax( data );
// returns [1,3]
```


<a name="incrmax"></a>
#### [compute.incrmax()](https://github.com/compute-io/incrmax)

Returns a method to compute a maximum value incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var max = compute.incrmax(),
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

var arr = compute.mmax( data, 2 );
```


<a name="cmax"></a>
#### [compute.cmax( arr )](https://github.com/compute-io/cmax)

Computes the cumulative maximum of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var arr = compute.cmax( data );
```


<a name="stats-range"></a>

<a name="range"></a>
#### [compute.range( arr )](https://github.com/compute-io/range)

Computes the arithmetic range of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var range = compute.range( data );
// returns [2,7]
```



<a name="nanrange"></a>
#### [compute.nanrange( arr[, accessor] )](https://github.com/compute-io/nanrange)

Computes the arithmetic range of an `array` ignoring non-numeric values.

``` javascript
var data = [ 2, null, 4, 2, NaN, 7, 3 ];

var range = compute.nanrange( data );
// returns [2,7]
```

For object `arrays`, provide an accessor `function` for accessing `array` values

``` javascript
var data = [
	[1,2],
	[2,null],
	[3,4],
	[5,2],
	[6,NaN],
	[7,7],
	[8,3]
];

function getValue( d ) {
	return d[ 1 ];
}

var range = compute.nanrange( data, getValue );
// returns [2,7]
```



<a name="stats-sum"></a>

<a name="sum"></a>
#### [compute.sum( arr )](https://github.com/compute-io/sum)

Computes the sum of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var sum = compute.sum( data );
// returns 18
```

<a name="nansum"></a>
#### [compute.nansum( arr )](https://github.com/compute-io/nansum)

Computes the sum of an `array` ignoring any non-numeric values.

``` javascript
var data = [ 2, NaN, 4, 2, 7, NaN, 3 ];

var sum = compute.nansum( data );
// returns 18
```

<a name="incrsum"></a>
#### [compute.incrsum()](https://github.com/compute-io/incrsum)

Returns a method to compute a sum incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var sum = compute.incrsum(),
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

var arr = compute.msum( data, 2 );
```


<a name="incrmsum"></a>
#### [compute.incrmsum( window )](https://github.com/compute-io/incrmsum)

Returns a method to compute a moving sum incrementally. `window` sets the window size, i.e., the number of values over which to compute a moving sum.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var msum = compute.incrmsum( 3 ),
	sum;

for ( var i = 0; i < data.length; i++ ) {
	sum = msum( data[ i ] );
	console.log( sum );
}
console.log( msum() );
```


<a name="csum"></a>
#### [compute.csum( arr )](https://github.com/compute-io/csum)

Computes the cumulative sum of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var arr = compute.csum( data );
```



<a name="stats-prod"></a>

<a name="prod"></a>
#### [compute.prod( arr[, accessor] )](https://github.com/compute-io/prod)

Computes the product of an `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var prod = compute.prod( data );
// returns 336
```

For object `arrays`, provide an accessor `function` for accessing `array` values

``` javascript
var data = [
	{'x':2},
	{'x':1},
	{'x':3}
];

function getValue( d ) {
	return d.x;
}

var prod = compute.prod( data, getValue );
// returns 6
```

<a name="nanprod"></a>
#### [compute.nanprod( arr[, accessor] )](https://github.com/compute-io/nanprod)

Computes the product of an `array` ignoring any non-numeric values.

``` javascript
var data = [ 2, NaN, 4, 2, 7, NaN, 3 ];

var prod = compute.nanprod( data );
// returns 336
```

For object `arrays`, provide an accessor `function` for accessing `array` values

``` javascript
var data = [
	{'x':2},
	{'x':NaN},
	{'x':'beep'},
	{'x':1},
	{'x':3}
];

function getValue( d ) {
	return d.x;
}

var prod = compute.nanprod( data, getValue );
// returns 6
```


<a name="mprod"></a>
#### [compute.mprod( arr, window[, accessor] )](https://github.com/compute-io/mprod)

Computes a moving product over an `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var arr = compute.mprod( data, 2 );
// returns [ 8, 8, 14, 21 ]
```

For object `arrays`, provide an accessor `function` for accessing `array` values

``` javascript
var data = [
	[2],
	[1],
	[3]
];

function getValue( d ) {
	return d[ 0 ];
}

var arr = compute.mprod( data, 2, getValue );
// returns [ 2, 3 ]
```


<a name="cprod"></a>
#### [compute.cprod( arr[, accessor] )](https://github.com/compute-io/cprod)

Computes the cumulative product of an `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var arr = compute.cprod( data );
// returns [ 2, 8, 16, 112, 336 ]
```

For object `arrays`, provide an accessor `function` for accessing `array` values

``` javascript
var data = [
	[1,2],
	[2,1],
	[3,3]
];

function getValue( d ) {
	return d[ 1 ];
}

var arr = compute.cprod( data, getValue );
// returns [ 2, 2, 6 ]
```




<a name="stats-mean"></a>

<a name="mean"></a>
#### [compute.mean( arr )](https://github.com/compute-io/mean)

Computes the arithmetic mean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var mean = compute.mean( data );
```

<a name="nanmean"></a>
#### [compute.nanmean( arr )](https://github.com/compute-io/nanmean)

Computes the arithmetic mean over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

var mean = compute.nanmean( data );
```


<a name="incrmean"></a>
#### [compute.incrmean()](https://github.com/compute-io/incrmean)

Returns a method to compute an arithmetic mean incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var mean = compute.incrmean(),
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

var arr = compute.mmean( data, 2 );
// returns [ 3, 3, 4.5, 5 ]
```


<a name="incrmmean"></a>
#### [compute.incrmmean( window )](https://github.com/compute-io/incrmmean)

Returns a method to compute a moving arithmetic mean incrementally. `window` sets the window size, i.e., the number of values over which to compute a moving mean.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var mmean = compute.incrmmean( 3 ),
	mu;

for ( var i = 0; i < data.length; i++ ) {
	mu = mmean( data[ i ] );
	console.log( mu );
}
console.log( mmean() );
```


<a name="stats-wmean"></a>

<a name="wmean"></a>
#### [compute.wmean( arr, weights )](https://github.com/compute-io/wmean)

Computes a weighted mean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ],
	weights = [ 1, 2, 1, 4, 0 ];

var wmean = compute.wmean( data, weights );
```

<a name="stats-gmean"></a>

<a name="gmean"></a>
#### [compute.gmean( arr )](https://github.com/compute-io/gmean)

Computes the geometric mean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var gmean = compute.gmean( data );
```


<a name="nangmean"></a>
#### [compute.nangmean( arr )](https://github.com/compute-io/nangmean)

Computes the geometric mean over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

var gmean = compute.nangmean( data );
```


<a name="stats-hmean"></a>

<a name="hmean"></a>
#### [compute.hmean( arr )](https://github.com/compute-io/hmean)

Computes the harmonic mean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var hmean = compute.hmean( data );
```

<a name="nanhmean"></a>
#### [compute.nanhmean( arr )](https://github.com/compute-io/nanhmean)

Computes the harmonic mean over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

var hmean = compute.nanhmean( data );
```


<a name="stats-qmean"></a>

<a name="qmean"></a>
#### [compute.qmean( arr )](https://github.com/compute-io/qmean)

Computes the quadratic mean (root mean square) of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var qmean = compute.qmean( data );
```


<a name="nanqmean"></a>
#### [compute.nanqmean( arr )](https://github.com/compute-io/nanqmean)

Computes the quadratic mean (root mean square) over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

var qmean = compute.nanqmean( data );
```


<a name="stats-variance"></a>

<a name="variance"></a>
#### [compute.variance( arr )](https://github.com/compute-io/variance)

Computes the sample variance over a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var s2 = compute.variance( data );
```


<a name="nanvariance"></a>
#### [compute.nanvariance( arr )](https://github.com/compute-io/nanvariance)

Computes the sample variance over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

var s2 = compute.nanvariance( data );
```

<a name="incrvariance"></a>
#### [compute.incrvariance()](https://github.com/compute-io/incrvariance)

Returns a method to compute a sample variance incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var variance = compute.incrvariance(),
	s2;

for ( var i = 0; i < data.length; i++ ) {
	s2 = variance( data[ i ] );
	console.log( s2 );
}
console.log( variance() );
```

<a name="mvariance"></a>
#### [compute.mvariance( arr, window )](https://github.com/compute-io/mvariance)

Computes a moving (sliding window) sample variance over a numeric `array`.

``` javascript
var data = [ 1, 5, 0, 10, 2 ];

var arr = compute.mvariance( data, 3 );
// returns [ 7, 25, 28 ]
```

<a name="incrmvariance"></a>
#### [compute.incrmvariance( window )](https://github.com/compute-io/incrmvariance)

Returns a method to compute a moving sample variance incrementally. `window` sets the window size, i.e., the number of values over which to compute a moving sample variance.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var mvariance = compute.incrmvariance( 3 ),
	s2;

for ( var i = 0; i < data.length; i++ ) {
	s2 = mvariance( data[ i ] );
	console.log( s2 );
}
console.log( mvariance() );
```


<a name="stats-stdev"></a>

<a name="stdev"></a>
#### [compute.stdev( arr )](https://github.com/compute-io/stdev)

Computes the sample standard deviation of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var stdev = compute.stdev( data );
```


<a name="nanstdev"></a>
#### [compute.nanstdev( arr )](https://github.com/compute-io/nanstdev)

Computes the sample standard deviation over an `array` of values ignoring any non-numeric values.

``` javascript
var data = [ 2, 4, NaN, 2, 7, NaN, 3 ];

var stdev = compute.nanstdev( data );
```

<a name="incrstdev"></a>
#### [compute.incrstdev()](https://github.com/compute-io/incrstdev)

Returns a method to compute a sample standard deviation incrementally.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var stdev = compute.incrstdev(),
	sigma;

for ( var i = 0; i < data.length; i++ ) {
	sigma = stdev( data[ i ] );
	console.log( sigma );
}
console.log( stdev() );
```

<a name="mstdev"></a>
#### [compute.mstdev( arr, window )](https://github.com/compute-io/mstdev)

Computes a moving (sliding window) sample standard deviation over a numeric `array`.

``` javascript
var data = [ 1, 5, 0, 10, 2 ];

var arr = compute.mstdev( data, 3 );
// returns [ ~2.6, 5, ~5.3 ]
```

<a name="incrmstdev"></a>
#### [compute.incrmstdev( window )](https://github.com/compute-io/incrmstdev)

Returns a method to compute a moving sample standard deviation incrementally. `window` sets the window size, i.e., the number of values over which to compute a moving sample standard deviation.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var mstdev = compute.incrmstdev( 3 ),
	sigma;

for ( var i = 0; i < data.length; i++ ) {
	sigma = mstdev( data[ i ] );
	console.log( sigma );
}
console.log( mstdev() );
```


<a name="stats-mode"></a>

<a name="mode"></a>
#### [compute.mode( arr )](https://github.com/compute-io/mode)

Computes the mode of an `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var mode = compute.mode( data );
```


<a name="stats-rank"></a>

<a name="median"></a>
#### [compute.median( arr[, sorted] )](https://github.com/compute-io/median)

Computes the median of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var median = compute.median( data );
// returns 3
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` flag to `true`.


<a name="nanmedian"></a>
#### [compute.nanmedian( arr[, opts] )](https://github.com/compute-io/nanmedian)

Computes the median of an `array` ignoring non-numeric values.

``` javascript
var data = [ 2, null, 4, 2, NaN, 7, 3 ];

var median = compute.nanmedian( data );
// returns 3
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` option to `true`.

``` javascript
var data = [ 2, null, 2, 3, NaN, 4, 7 ];

var median = compute.nanmedian( data, {
	'sorted': true	
});
// returns 3
```

For object `arrays`, provide an accessor `function` for accessing `array` values

``` javascript
var data = [
	[1,2],
	[2,null],
	[3,4],
	[4,2],
	[5,NaN],
	[6,7],
	[7,3]
];

function getValue( d ) {
	return d[ 1 ];
}

var median = compute.nanmedian( data, {
	'accessor': getValue
});
// returns 3
```


<a name="quantile"></a>
#### [compute.quantile( arr, p[, opts] )](https://github.com/compute-io/quantile)

Computes a quantile for a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var q = compute.quantile( data, 0.25 );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` option to `true`.

``` javascript
var opts = {
	'sorted': true
};

var data = [ 2, 2, 3, 4, 7 ];

var q = compute.quantile( data, 0.25, opts );
```


<a name="quantiles"></a>
#### [compute.quantiles( arr, num[, opts] )](https://github.com/compute-io/quantiles)

Computes quantiles for a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var arr = compute.quantiles( data, 3 );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` option to `true`.

``` javascript
var opts = {
	'sorted': true
};

var data = [ 2, 2, 3, 4, 7 ];

var arr = compute.quantiles( data, 2, opts );
```


<a name="iqr"></a>
#### [compute.iqr( arr[, opts] )](https://github.com/compute-io/iqr)

Computes the interquartile range of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var iqr = compute.iqr( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` options flag to `true`.


<a name="idr"></a>
#### [compute.idr( arr[, opts] )](https://github.com/compute-io/idr)

Computes the interdecile range of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var idr = compute.idr( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` options flag to `true`.


<a name="midrange"></a>
#### [compute.midrange( arr[, sorted] )](https://github.com/compute-io/midrange)

Computes the mid-range (mid-extreme) of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var mr = compute.midrange( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` flag to `true`.


<a name="midhinge"></a>
#### [compute.midhinge( arr[, opts] )](https://github.com/compute-io/midhinge)

Computes the midhinge of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var mh = compute.midhinge( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` options flag to `true`.


<a name="midsummary"></a>
#### [compute.midsummary( arr, n[, opts] )](https://github.com/compute-io/midsummary)

Computes the *n*% midsummary of a numeric `array`. `n` exists on the interval `[0.0, 0.50]` and specifies the proportion of values to discard in the distribution tails.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var ms = compute.midsummary( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` options flag to `true`.



<a name="midmean"></a>
#### [compute.midmean( arr[, sorted] )](https://github.com/compute-io/midmean)

Computes the midmean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var mm = compute.midmean( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` flag to `true`.


<a name="lmidmean"></a>
#### [compute.lmidmean( arr[, sorted] )](https://github.com/compute-io/lmidmean)

Computes the lower midmean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3, 7, 5 ];

var lmm = compute.lmidmean( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` flag to `true`.


<a name="umidmean"></a>
#### [compute.umidmean( arr[, sorted] )](https://github.com/compute-io/umidmean)

Computes the upper midmean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3, 7, 5 ];

var umm = compute.umidmean( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` flag to `true`.


<a name="trimean"></a>
#### [compute.trimean( arr[, opts] )](https://github.com/compute-io/trimean)

Computes the trimean of a numeric `array`.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var trimean = compute.trimean( data );
```

If the input `array` is already sorted in __ascending__ order, set the `sorted` options flag to `true`.



<a name="stats-skewness"></a>

<a name="skewness"></a>
#### [compute.skewness( arr )](https://github.com/compute-io/skewness)

Computes the sample skewness of an `array` of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var skew = compute.skewness( data );
```


<a name="stats-kurtosis"></a>

<a name="kurtosis"></a>
#### [compute.kurtosis( arr )](https://github.com/compute-io/kurtosis)

Computes the sample excess kurtosis of an `array` of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

var kur = compute.kurtosis( data );
```


<a name="stats-multivariate"></a>

<a name="covariance"></a>
#### [compute.covariance( arr1[, arr2,...,opts] )](https://github.com/compute-io/covariance)

Computes the [covariance](http://en.wikipedia.org/wiki/Covariance) between one or more numeric arrays.

``` javascript
var x = [ 1, 2, 3, 4, 5 ],
	y = [ 5, 4, 3, 2, 1 ];

var mat = compute.covariance( x, y );
// returns [[2.5,-2.5],[-2.5,2.5]]
```

For method options, see [compute-covariance](https://github.com/compute-io/covariance).



<a name="pcorr"></a>
#### [compute.pcorr( arr1[, arr2,...] )](https://github.com/compute-io/pcorr)

Computes a [correlation matrix](http://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices) for one or more numeric arrays.

``` javascript
var x = [ 1, 2, 3, 4, 5 ],
	y = [ 5, 4, 3, 2, 1 ];

var mat = compute.pcorr( x, y );
// returns [[1,-1],[-1,1]]
```



### Information Theory

<a name="hamdist"></a>
#### [compute.hamdist( a, b )](https://github.com/compute-io/hamming)

Computes the [Hamming distance](http://en.wikipedia.org/wiki/Hamming_distance) between two sequences of equal length.

``` javascript
var a = 'beep',
	b = 'boop';

var dist = compute.hamdist( a, b );

var c = [ 4, 2, 3, 4 ],
	d = [ 2, 4, 3, 1 ];

var dist = compute.hamdist( c, d );
```


<a name="tversky"></a>
#### [compute.tversky( a, b[, opts] )](https://github.com/compute-io/tversky-index)

Computes the [Tversky Index](http://en.wikipedia.org/wiki/Tversky_index) between two sequences.

``` javascript
var a = 'beep',
	b = 'boop';

var idx = compute.tversky( a, b );

var c = [ 4, 2, 3, 5, 7 ],
	d = [ 2, 4, 3, 1 ];

var idx = compute.tversky( c, d );
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

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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


## Contributing

To contribute to [compute.io](https://github.com/compute-io), see the contributing [guide](https://github.com/compute-io/contributing).


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
