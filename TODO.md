TODO
====

## General

1. 	Method to throw all methods into the global namespace; compute.mean() --> mean(). How to prevent methods from getting clobbered?


## Functions

1. 	
2. 	upper semi-midmean (umidmean)
3. 	mpcc
4. 	mcov
5. 	midrange
6. 	lower semi-midmean (lmidmean)
7. 	truncated mean
8. 	winsorized mean
9. 	nanmedian
10. nanmin
11. incrmmean
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
27. incrwmean --> wmean( x, w )
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
38. mean deviation
39. cumulative mean deviation
40. repmat (???)
41. mean/median absolute deviation
	- mad( arr, opts )
		- 
42. z-score
43. linear regression
44. multiple methods for interpolating quantile value (ala R; see Wiki on Quantile)
45. moving median (polish)
46. absolute deviation (absdev)
	- 	absdev( arr, x )
47. Holt-Winters time series forecasting algorithm



## Fluent

1. 	implement `then` method, which takes a callback to which data is returned
2. 	how to handle asynchronous computation? Currently, assume all synchronous tasks. If computations are outsourced to other languages, bindings, etc, which are asynchronous, how do we handle that? --> compute.async().roundn().mean()...
