TODO
====

## General

1. 	Method to throw all methods into the global namespace; compute.mean() --> mean(). How to prevent methods from getting clobbered?


## Functions

1. 	trimean
2. 	midhinge
3. 	midsummary
4. 	iqm
5. 	midrange
6. 	interdecile range (idr)
7. 	truncated mean
8. 	winsorized mean
9. 	
10. nanmin
11. incrmin
12. incrmax
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


## Fluent

1. 	implement `then` method, which takes a callback to which data is returned
2. 	how to handle asynchronous computation? Currently, assume all synchronous tasks. If computations are outsourced to other languages, bindings, etc, which are asynchronous, how do we handle that? --> compute.async().roundn().mean()...