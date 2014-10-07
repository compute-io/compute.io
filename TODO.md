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


## Fluent

1. 	implement `then` method, which takes a callback to which data is returned
2. 	how to handle asynchronous computation? Currently, assume all synchronous tasks. If computations are offsourced to other languages, bindings, etc, which are asynchronous, how do we handle that? --> compute.async().roundn().mean()...