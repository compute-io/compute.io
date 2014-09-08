Compute.io
==========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computation library.


## Table of Contents

1. 	[Installation](#installation)
1. 	[Usage](#usage)
	- 	[Utilities](#utilities)
	- 	[Statistics](#statistics)
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

#### [compute.roundn( x, n )](https://github.com/compute-io/roundn)

Round values to the nearest multiple of `10^n`. `x` may be either a single numeric value or an array of values. `n` must be an `integer`.

``` javascript
console.log( compute.roundn( Math.PI, -2 ) );
// Returns 3.14

console.log( compute.roundn( 111, 2 ) );
// Returns 100

var data = [ 2.342, 4.943, 2.234, 7.992, 3.142 ];

console.log( compute.roundn( data, -2 ) );
// Returns [...] where each value is rounded to nearest hundredth
```


### Statistics

#### [compute.min( arr )](https://github.com/compute-io/min)

Computes the minimum value of an array.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.min( data ) );
```


#### [compute.max( arr )](https://github.com/compute-io/max)

Computes the maximum value of an array.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.max( data ) );
```


#### [compute.sum( arr )](https://github.com/compute-io/sum)

Computes the sum of an array.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.sum( data ) );
```


#### [compute.mean( arr )](https://github.com/compute-io/mean)

Computes the mean over an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.mean( data ) );
```


#### [compute.variance( arr )](https://github.com/compute-io/variance)

Computes the sample variance over an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.variance( data ) );
```


#### [compute.stdev( arr )](https://github.com/compute-io/stdev)

Computes the sample standard deviation over an array of values.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.stdev( data ) );
```


#### [compute.mode( arr )](https://github.com/compute-io/mode)

Computes the mode of an array.

``` javascript
var data = [ 2, 4, 2, 7, 3 ];

console.log( compute.mode( data ) );
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
$ open reports/coverage/lcov-report/index.html
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