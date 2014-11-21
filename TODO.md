TODO
====

## General

1. 	Method to throw all methods into the global namespace; compute.mean() --> mean(). How to prevent methods from getting clobbered?
2. 	Should methods explicitly handle cases where the input `array` is empty? e.g., `mean([]) === null` or `NaN`, rather than returning `0`, an initialized value.
	- 	How else to distinguish between a mean of `0` and having provided an empty `array`?
	-	Could also throw, but this may be a bit harsh. Type checking and throwing, okay, but throwing due to an empty `array` may be too disruptive.
3. 	**performance optimization**
	- 	linspace/logspace/zip/<any method which creates an output array>
		- 	use push for arrays longer than fast element limit
		-	see incrspace
4. 	move `deg2rad` and `rad2deg` to `trigonometry`
5. 	in all module examples, reuse compute modules (e.g., for computing sum, mean, etc) --> dev dependencies


## Functions

1. 	midsummary
	- 	add median special case (compute median inline; no need to import compute-median dependency)
2. 	
3. 	mpcc
4. 	mcov
5. 	
6. 	
7. 	truncated mean
8. 	winsorized mean
9. 	nanmedian
10. nanmin
11. 
12. incrmsum
13. incrkurtosis
14. incrskewness
15. incrwmean
16. incrnanmean
17. incrgmean
18. incrhmean
19. nanmax
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
32. incrmmax
33. incrmmin
34. incrmvariance
35. incrmstdev
36. incrpcc
37. incrcov
38. mean deviation (from any value)
39. cumulative mean deviation
40. repmat (???)
41. mean/median absolute deviation
	- mad( arr, opts )
		- 
42. z-score
43. linear regression
44. multiple methods for interpolating quantile value (ala R; see Wiki on Quantile)
45. moving median (clean-up)
46. absolute deviation (absdev)
	- 	absdev( arr, x )
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
70. 
71. 
72. 
73. silhouette values (kmeans)
74. voronoi algo (lloyds algo)
75. kmeans++
76. setxor
77. log(element-wise; arbitrary base; default e)
78. log2 (element-wise)
79. log1p (element-wise)
80. bitwise ops (element-wise)
81. isdecimal (element-wise)
82. 
83. egcd (extended)
84. lcm
85. loess
86. kmeans
87. kde
88. bandwidth
89. r2 (coef determination)
90. binocoef (see substack)
91. factorial (bignum; <=171)
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
110. 
111. chunkify
112. select( indices|logical )
	- 	get
	-	set( idx|log, val|arr ) --> do we need opts? 2nd arg type, mode (scalar versus element-wise)
113. partitions (math)
114. imhist (?)
115. weighted median (?)
116. weighted percentile
117. selection algorithm, median of medians, quickselect
118. zeros (?) -- fast elements (opts: sparse)
119. ones (?) -- fast elements (opts: sparse)
120. replace (see select-set)
121. bitwise (element-wise) (note abt int32)



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
