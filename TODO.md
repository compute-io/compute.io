TODO
====

## General

1. 	Method to throw all methods into the global namespace; compute.mean() --> mean(). How to prevent methods from getting clobbered?
2. 	Should methods explicitly handle cases where the input `array` is empty? e.g., `mean([]) === null` or `NaN`, rather than returning `0`, an initialized value.
	- 	How else to distinguish between a mean of `0` and having provided an empty `array`?
	-	Could also throw, but this may be a bit harsh. Type checking and throwing, okay, but throwing due to an empty `array` may be too disruptive.
	- 	see nanmin and nanmax
3. 	**performance optimization**
	- 	linspace/logspace/datespace/zip/<any method which creates an output array>
		- 	use push for arrays longer than fast element limit
		-	see incrspace/incrdatespace
4. 	
5. 	in all module examples, reuse compute modules (e.g., for computing sum, mean, etc) --> dev dependencies
6. 	timeseries date utilities
7. 	csv utilities
8. 	json utilities
9. 	tsv utilities
10. other data formats (?)
11. .jshintignore
	-	include jshint makefile target in all deps
12. update mocha link in READMEs
13. 
14. .jscs.json
	-	include jscs makefile target
	- 	use jsdoc [plugin](https://github.com/jscs-dev/jscs-jsdoc)
15. reorganize stats modules
	-	descriptive
	-	nan
	-	incremental
	-	weighted
	-	moving
	- 	multivariate


## Functions

1. 	
2. 	_histc_
3. 	mpcorr
4. 	mcov
5. 	histcn
6. 	_binsearch_
7. 	truncated mean
8. 	winsorized mean
9. 	nanmedian
10. binarysearch --> bsearch
11. bisect/bisectleft/bisectright (d3)
12. _incrmsum_
13. incrkurtosis
14. incrskewness
15. incrwmean
16. incrnanmean
17. incrgmean
18. incrhmean
19. 
20. incrnanvariance
21. incrnanstdev
22. incrnanmax
23. incrnanmin
24. incrnangmean
25. incrnanhmean
26. incrnansum
27. incrwmean --> wmean( x, w ) new weight
28. nanmode
29. nanquantiles
30. naniqr
31. nanrange
32. _incrmmax_
33. _incrmmin_
34. 
35. 
36. incrpcorr
37. incrcov
38. mean/median deviation (mdev; from any value)
	- 	Is this necessary? Just `array` subtract and take mean/median.
	- 	Probably not needed.
39. cumulative deviation (cdev)
	- 	Just `array` subtract and compute csum
	- 	Probably not needed. If not, same logic applies to 38-41!!!
40. _absolute deviation_ (absdev)
	- 	absdev( arr, x )
	- 	Just `array` subtract and `array` abs
41. mean/median absolute deviation
	-	mad( arr, opts )
		- 
	-	Just `array` substract and `array` mean/median
	- 	[outlier detection](http://stackoverflow.com/questions/22354094/pythonic-way-of-detecting-outliers-in-one-dimensional-observation-data)
42. z-score
43. linear regression
44. multiple methods for interpolating quantile value (ala R; see Wiki on Quantile)
45. moving median (clean-up)
46. repmat (???)
47. Holt-Winters time series forecasting algorithm
48. expm1 (element-wise)
49. cbrt (element-wise)
50. floor (element-wise)
51. ceil (element-wise)
52. pow (element-wise)
53. exp (element-wise)
54. sin (element-wise)
55. cos (element-wise)
56. acos (element-wise)
57. asin (element-wise)
58. atan/atan2 (element-wise)
59. cosh (element-wise)
60. sinh (element-wise)
61. sec (element-wise)
62. sech (element-wise)
63. cot (element-wise)
64. coth (element-wise)
65. mod (element-wise)
66. rem (element-wise)
67. tan (element-wise)
68. ln (element-wise)
69. log10 (element-wise)
70. _gamma_ (erf)
71. 
72. 
73. silhouette values (kmeans)
74. voronoi algo (lloyds algo)
75. kmeans++
76. setxor
77. log(element-wise; arbitrary base; default e)
78. log2 (element-wise)
79. log1p (element-wise)
80. logical/bitwise ops (element-wise)
	- 	&& (and) --> 1s and 0s; not T/F
	- 	|| (or)
	-	! (not)
	- 	xor
	- 	band
	-	bor
	-	bxor
	-	bnot
	-	blshift
	- 	brshift (sign opt --> >> vs >>>)
81. isdecimal (element-wise)
82. 
83. egcd (extended)
84. 
85. loess
86. kmeans
87. kde
88. bandwidth
89. r2 (coef determination)
90. binocoef (see substack)
91. factorial (bignum; <=171) --> split into factorial and bigfactorial (?)
92. unit conversion
93. linear regression
94. loess
95. splines
96. fft
97. dfft
98. ifft
99. idfft
100. viterbi
101. intersect
102. setdiff
103. nanunique
104. mttest (vassili)
105. mbtest
106. ttest
107. gtest
108. mva --> mmoments (moving descriptive stats; mu,std,skew,kurt)
109. sorting (hsort, isort, qsort, msort, ...)
110. [linear partition](https://github.com/the-swerve/linear-partitioning)
111. chunkify
112. select( indices|logical )
	- 	get
	-	set( idx|log, val|arr ) --> do we need opts? 2nd arg type, mode (scalar versus element-wise)
113. partitions (math)
114. imhist (?)
115. weighted median (?)
116. weighted percentile
117. selection algorithm, median of medians, quickselect
118. zeros (?)
	- 	fast elements (opts: sparse)
	-	type arrays? ndarray support?
119. ones (?)
	-	fast elements (opts: sparse)
	- 	recursive
120. replace (see select-set)
121. bitwise (element-wise) (note abt int32)
122. ndvariance(dim)
123. ndmean(dim) --> return new array
124. ndsum(dim)
125. ndmin(dim)
126. ndmax(dim)
127. ndstdev(dim)
128. ndskewness(dim)
129. ndkurtosis
130. ndmode
131. ndmedian
132. ndarray
133. ndcovariance
134. ndpcorr
135. date utilities
	- 	array utils
		- to timestamp
		- to iso string
		- ...
	- 	**with** mind toward timeseries
	- 	human readable array diff, where array contains dates (e.g., '5days', '2days', etc)(?)
136. equivalent to A(:) ??
137. deep close to (see also almost-equal)
138. ccorr (cross-corr) --> fft
139. acorr (auto-corr) --> fft
140. 
141. kcorr (kendall)
142. scorr (spearman)
143. kendall's w
144. kendall tau distance
145. goodman kruskal gamma
146. Theil-Sen estimator
147. median using median of medians algorithm
148. rv coefficient
149. distance skewness
150. distance/brownian correlation
151. hoeffding's d
152. mutual information
153. aic
154. bic
155. hannan-quinn information criterion (hqc)
156. analysis of variance (anova)
	-	[non-parametric](http://en.wikipedia.org/wiki/Kruskal%E2%80%93Wallis_one-way_analysis_of_variance)
157. wcovariance
158. nancovariance (see R; pairwise complete, etc)
159. nanpcorr
160. residuals (analysis fcns?)
161. scaled correlation
162. **optimize** pcorr and covariance by using a single linear array consisting of upper triangle elements; simply compute the index of the `i,j` element in the linear array. Space optimization and no nested arrays.
163. some (min threshold option; see underscore; clbk to apply condition)
164. all/every
165. none (same as all!)
166. [gini coefficient](http://en.wikipedia.org/wiki/Gini_coefficient)
167. DTW
168. isPow2
169. nextPow2
170. prevPow2
171. [pad](http://www.mathworks.com/help/images/ref/padarray.html)
172. average shifted histogram
173. various bin selection for histogram algorithms (options to histc)



## Fluent

1. 	implement `then` method, which takes a callback to which data is returned
2. 	how to handle asynchronous computation? Currently, assume all synchronous tasks. If computations are outsourced to other languages, bindings, etc, which are asynchronous, how do we handle that? --> compute.async().roundn().mean()...



## Prior Art

*	jstat.js (250)
*	ratio.js (<50)
*	numeric.js (150)
*	science.js (<70)
*	math.js (110)
*	numbers.js (<150)
*	sylvester.js (<100)
*	decimal.js
*	bignum.js
*	numeral.js
*	nerdamer.js
*	javascript-cas


## Update

*	README.md - mocha link
*	README.md - `make view-cov`
*	README.md - api documentation
*	.gitattributes
*	.editorconfig
*	.jshintrc
*	.jshintignore
*	.npmignore - ignore benchmark dir and dot files
*	Makefile - notes
*	Makefile - jshint target
*	test.js - 'use strict' at top
*	test.js - /* globals */ at top
*	examples/index.js - 'use strict' at top
*	examples/index.js - use compute-io modules where possible (dev deps); e.g., to compute sum, min, max, etc.
*	package.json - include jshint and jshint-stylish as dev deps
* 	lib/index.js - remove IIFE


### Extra

*	benchmarks
*	cli.js
*	jscs
*	jsfmt
