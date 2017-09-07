Compute.io
==========
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computation library.

<a target="_blank" rel="nofollow" href="https://app.codesponsor.io/link/2GH3ESgBANYoWNMCAicW2LQk/compute-io/compute.io"><img alt="Sponsor" width="888" height="68" src="https://app.codesponsor.io/embed/2GH3ESgBANYoWNMCAicW2LQk/compute-io/compute.io.svg"/></a>

## Table of Contents

1. 	[Installation](#installation)
1. 	[Usage](#usage)
	- 	[Utilities](https://github.com/compute-io/compute.io/wiki/Utilities)
		*	[polyval](https://github.com/compute-io/compute.io/wiki/compute-polyval)
		*	[find](https://github.com/compute-io/compute.io/wiki/compute-find)
		*	[dims](https://github.com/compute-io/compute.io/wiki/compute-dims)
		*	[issorted](https://github.com/compute-io/compute.io/wiki/compute-issorted)
		*	[flatten](https://github.com/compute-io/compute.io/wiki/compute-flatten)
	-	[Array Creation](https://github.com/compute-io/compute.io/wiki/Array-Creation)
		*	[linspace](https://github.com/compute-io/compute.io/wiki/compute-linspace)
		*	[incrspace](https://github.com/compute-io/compute.io/wiki/compute-incrspace)
		*	[indexspace](https://github.com/compute-io/compute.io/wiki/compute-indexspace)
		*	[logspace](https://github.com/compute-io/compute.io/wiki/compute-logspace)
		*	[datespace](https://github.com/compute-io/compute.io/wiki/compute-datespace)
		*	[incrdatespace](https://github.com/compute-io/compute.io/wiki/compute-incrdatespace)
		*	[zip](https://github.com/compute-io/compute.io/wiki/compute-zip)
		*	[unzip](https://github.com/compute-io/compute.io/wiki/comppute-unzip)
	- 	[Sorting and Reshaping Arrays](https://github.com/compute-io/compute.io/wiki/Sorting-and-Reshaping-Arrays)
		*	[reverse](https://github.com/compute-io/compute.io/wiki/compute-reverse)
		*	[shuffle](https://github.com/compute-io/compute.io/wiki/compute-shuffle)
		*	[circshift](https://github.com/compute-io/compute.io/wiki/compute-circshift)
	-	[Special Functions](https://github.com/compute-io/compute.io/wiki/Special-Functions)
		*	[abs](https://github.com/compute-io/compute.io/wiki/compute-abs)
		*	[sqrt](https://github.com/compute-io/compute.io/wiki/compute-sqrt)
		*	[signum](https://github.com/compute-io/compute.io/wiki/compute-signum)
		*	[erf](https://github.com/compute-io/compute.io/wiki/compute-erf)
		*	[erfc](https://github.com/compute-io/compute.io/wiki/compute-erfc)
		*	[erfinv](https://github.com/compute-io/compute.io/wiki/compute-erfinv)
		*	[erfcinv](https://github.com/compute-io/compute.io/wiki/compute-erfcinv)
	- 	[Arithmetic](https://github.com/compute-io/compute.io/wiki/Arithmetic)
		*	[add](https://github.com/compute-io/compute.io/wiki/compute-add)
		*	[subtract](https://github.com/compute-io/compute.io/wiki/compute-subtract)
		*	[multiply](https://github.com/compute-io/compute.io/wiki/compute-multiply)
		*	[divide](https://github.com/compute-io/compute.io/wiki/compute-divide)
		* 	[roundn](https://github.com/compute-io/compute.io/wiki/compute-roundn)
		*	[diff](https://github.com/compute-io/compute.io/wiki/compute-diff)
	- 	[Relational Operations](https://github.com/compute-io/compute.io/wiki/Relational-Operations)
		* 	[eq](https://github.com/compute-io/compute.io/wiki/compute-eq)
		* 	[neq](https://github.com/compute-io/compute.io/wiki/compute-neq)
		*	[gt](https://github.com/compute-io/compute.io/wiki/compute-gt)
		*	[geq](https://github.com/compute-io/compute.io/wiki/compute-geq)
		*	[lt](https://github.com/compute-io/compute.io/wiki/compute-lt)
		*	[leq](https://github.com/compute-io/compute.io/wiki/compute-leq)
	-	[Logical Operations](https://github.com/compute-io/compute.io/wiki/Logical-Operations)
		*	[isnumeric](https://github.com/compute-io/compute.io/wiki/compute-isnumeric)
		*	[isnan](https://github.com/compute-io/compute.io/wiki/compute-isnan)
		*	[isfinite](https://github.com/compute-io/compute.io/wiki/compute-isfinite)
		*	[isinteger](https://github.com/compute-io/compute.io/wiki/compute-isinteger)
		*	[isinf](https://github.com/compute-io/compute.io/wiki/compute-isinf)
	-	[Trigonometry](https://github.com/compute-io/compute.io/wiki/Trigonometry)
		*	[deg2rad](https://github.com/compute-io/compute.io/wiki/compute-deg2rad)
		*	[rad2deg](https://github.com/compute-io/compute.io/wiki/compute-rad2deg)
	-	[Geometry](https://github.com/compute-io/compute.io/wiki/Geometry)
		*	[hypot](https://github.com/compute-io/compute.io/wiki/compute-hypot)
	- 	[Sets](https://github.com/compute-io/compute.io/wiki/Sets)
		*	[unique](https://github.com/compute-io/compute.io/wiki/compute-unique)
	- 	[Discrete Mathematics](https://github.com/compute-io/compute.io/wiki/Discrete-Mathematics)
		*	[gcd](https://github.com/compute-io/compute.io/wiki/compute-gcd)
		*	[lcm](https://github.com/compute-io/compute.io/wiki/compute-lcm)
	-	[Linear Algebra](https://github.com/compute-io/compute.io/wiki/Linear-Algebra)
		* 	[l1norm](https://github.com/compute-io/compute.io/wiki/compute-l1norm)
		* 	[l2norm](https://github.com/compute-io/compute.io/wiki/compute-l2norm)
		* 	[linfnorm](https://github.com/compute-io/compute.io/wiki/compute-linfnorm)
		* 	[lpnorm](https://github.com/compute-io/compute.io/wiki/compute-lpnorm)
		*	[dot](https://github.com/compute-io/compute.io/wiki/compute-dot)
		*	[cross](https://github.com/compute-io/compute.io/wiki/compute-cross)
	- 	[Statistics](https://github.com/compute-io/compute.io/wiki/Statistics)
		*	[Min](https://github.com/compute-io/compute.io/wiki/Stats-Min)
			*	[min](https://github.com/compute-io/compute.io/wiki/compute-min)
			*	[argmin](https://github.com/compute-io/compute.io/wiki/compute-argmin)
			*	[nanmin](https://github.com/compute-io/compute.io/wiki/compute-nanmin)
			*	[argnanmin](https://github.com/compute-io/compute.io/wiki/compute-argnanmin)
			*	[incrmin](https://github.com/compute-io/compute.io/wiki/compute-incrmin)
			*	[mmin](https://github.com/compute-io/compute.io/wiki/compute-mmin)
			*	[cmin](https://github.com/compute-io/compute.io/wiki/compute-cmin)
		*	[Max](https://github.com/compute-io/compute.io/wiki/Stats-Max)
			*	[max](https://github.com/compute-io/compute.io/wiki/compute-max)
			*	[argmax](https://github.com/compute-io/compute.io/wiki/compute-argmax)
			*	[nanmax](https://github.com/compute-io/compute.io/wiki/compute-nanmax)
			*	[argnanmax](https://github.com/compute-io/compute.io/wiki/compute-argnanmax)
			*	[incrmax](https://github.com/compute-io/compute.io/wiki/compute-incrmax)
			*	[mmax](https://github.com/compute-io/compute.io/wiki/compute-mmax)
			*	[cmax](https://github.com/compute-io/compute.io/wiki/compute-cmax)
		*	[Range](https://github.com/compute-io/compute.io/wiki/Stats-Range)
			*	[range](https://github.com/compute-io/compute.io/wiki/compute-range)
			*	[nanrange](https://github.com/compute-io/compute.io/wiki/compute-nanrange)
		*	[Sum](https://github.com/compute-io/compute.io/wiki/Stats-Sum)
			*	[sum](https://github.com/compute-io/compute.io/wiki/compute-sum)
			*	[nansum](https://github.com/compute-io/compute.io/wiki/compute-nansum)
			*	[incrsum](https://github.com/compute-io/compute.io/wiki/compute-incrsum)
			*	[msum](https://github.com/compute-io/compute.io/wiki/compute-msum)
			*	[incrmsum](https://github.com/compute-io/compute.io/wiki/compute-incrmsum)
			*	[csum](https://github.com/compute-io/compute.io/wiki/compute-csum)
		*	[Product](https://github.com/compute-io/compute.io/wiki/Stats-Prod)
			*	[prod](https://github.com/compute-io/compute.io/wiki/compute-prod)
			*	[nanprod](https://github.com/compute-io/compute.io/wiki/compute-nanprod)
			*	[mprod](https://github.com/compute-io/compute.io/wiki/compute-mprod)
			*	[cprod](https://github.com/compute-io/compute.io/wiki/compute-cprod)
		*	[Arithmetic Mean](https://github.com/compute-io/compute.io/wiki/Stats-Arithmetic Mean)
			*	[mean](https://github.com/compute-io/compute.io/wiki/compute-mean)
			*	[nanmean](https://github.com/compute-io/compute.io/wiki/compute-nanmean)
			*	[incrmean](https://github.com/compute-io/compute.io/wiki/compute-incrmean)
			*	[mmean](https://github.com/compute-io/compute.io/wiki/compute-mmean)
			*	[incrmmean](https://github.com/compute-io/compute.io/wiki/compute-incrmmean)
		*	[Weighted Mean](https://github.com/compute-io/compute.io/wiki/Stats-Weighted-Mean)
			*	[wmean](https://github.com/compute-io/compute.io/wiki/compute-wmean)
		*	[Geometric Mean](https://github.com/compute-io/compute.io/wiki/Stats-Geometric-Mean)
			*	[gmean](https://github.com/compute-io/compute.io/wiki/compute-gmean)
			*	[nangmean](https://github.com/compute-io/compute.io/wiki/compute-nangmean)
		*	[Harmonic Mean](https://github.com/compute-io/compute.io/wiki/Stats-Harmonic-Mean)
			*	[hmean](https://github.com/compute-io/compute.io/wiki/compute-hmean)
			*	[nanhmean](https://github.com/compute-io/compute.io/wiki/compute-nanhmean)
		*	[Quadratic Mean](https://github.com/compute-io/compute.io/wiki/Stats-Quadratic-Mean)
			*	[qmean](https://github.com/compute-io/compute.io/wiki/compute-qmean)
			*	[nanqmean](https://github.com/compute-io/compute.io/wiki/compute-nanqmean)
		*	[Variance](https://github.com/compute-io/compute.io/wiki/Stats-Variance)
			*	[variance](https://github.com/compute-io/compute.io/wiki/compute-variance)
			*	[nanvariance](https://github.com/compute-io/compute.io/wiki/compute-nanvariance)
			*	[incrvariance](https://github.com/compute-io/compute.io/wiki/compute-incrvariance)
			*	[mvariance](https://github.com/compute-io/compute.io/wiki/compute-mvariance)
			*	[incrmvariance](https://github.com/compute-io/compute.io/wiki/compute-incrmvariance)
		*	[Standard Deviation](https://github.com/compute-io/compute.io/wiki/Stats-StDev)
			*	[stdev](https://github.com/compute-io/compute.io/wiki/compute-stdev)
			*	[nanstdev](https://github.com/compute-io/compute.io/wiki/compute-nanstdev)
			*	[incrstdev](https://github.com/compute-io/compute.io/wiki/compute-incrstdev)
			*	[mstdev](https://github.com/compute-io/compute.io/wiki/compute-mstdev)
			*	[incrmstdev](https://github.com/compute-io/compute.io/wiki/compute-incrmstdev)
		*	[Mode](https://github.com/compute-io/compute.io/wiki/Stats-Mode)
			*	[mode](https://github.com/compute-io/compute.io/wiki/compute-mode)
		*	[Rank Statistics](https://github.com/compute-io/compute.io/wiki/Stats-Rank)
			*	[median](https://github.com/compute-io/compute.io/wiki/compute-median)
			*	[nanmedian](https://github.com/compute-io/compute.io/wiki/compute-nanmedian)
			*	[quantile](https://github.com/compute-io/compute.io/wiki/compute-quantile)
			*	[quantiles](https://github.com/compute-io/compute.io/wiki/compute-quantiles)
			*	[nanquantiles](https://github.com/compute-io/compute.io/wiki/compute-nanquantiles)
			*	[iqr](https://github.com/compute-io/compute.io/wiki/compute-iqr)
			*	[idr](https://github.com/compute-io/compute.io/wiki/compute-idr)
			*	[midrange](https://github.com/compute-io/compute.io/wiki/compute-midrange)
			*	[midhinge](https://github.com/compute-io/compute.io/wiki/compute-midhinge)
			*	[midsummary](https://github.com/compute-io/compute.io/wiki/compute-midsummary)
			*	[midmean](https://github.com/compute-io/compute.io/wiki/compute-midmean)
			*	[lmidmean](https://github.com/compute-io/compute.io/wiki/compute-lmidmean)
			*	[umidmean](https://github.com/compute-io/compute.io/wiki/compute-umidmean)
			*	[truncmean](https://github.com/compute-io/compute.io/wiki/compute-truncmean)
			*	[trimean](https://github.com/compute-io/compute.io/wiki/compute-trimean)
		*	[Skewness](https://github.com/compute-io/compute.io/wiki/Stats-Skewness)
			*	[skewness](https://github.com/compute-io/compute.io/wiki/compute-skewness)
		*	[Kurtosis](https://github.com/compute-io/compute.io/wiki/Stats-Kurtosis)
			*	[kurtosis](https://github.com/compute-io/compute.io/wiki/compute-kurtosis)
		*	[Multivariate](https://github.com/compute-io/compute.io/wiki/Stats-Multivariate)
			*	[covariance](https://github.com/compute-io/compute.io/wiki/compute-covariance)
			*	[pcorr](https://github.com/compute-io/compute.io/wiki/compute-pcorr)
	- 	[Information Theory](https://github.com/compute-io/compute.io/wiki/Information-Theory)
		*	[hamdist](https://github.com/compute-io/compute.io/wiki/compute-hamming)
		*	[tversky](https://github.com/compute-io/compute.io/wiki/compute-tversky-index)
1. 	[Fluent Interface](https://github.com/compute-io/compute.io/wiki/Fluent-Interface)
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



---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014-2015. The Compute.io Authors.



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
