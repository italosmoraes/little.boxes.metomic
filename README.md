

### Environment

This project was built using:
- yarn
- nvm
- Node v16.15.0
- Jest
- Typescript
- VSCode

### To build locally
--------------------

1. Install npm
2. Install npx

On the command line:
```
# compile typescript
npx tsc
```

nvm use

yarn

yarn test


### Potential improvements
--------------------------

- separate the `parcelsCostResolver` into more specialized functions as per each business rule added, instead of cramping it all within the same function
- improve the `getParcelCostItem` function to be a bit more explicity about the way the comparisons are being run
- unless we are dealing in tons, the `maxDimension` limit of 9999 works fine but could be re-thought
- the `heavy parcel` included as part of the cost table makes the whole design of how the software calculates price a big mess. We are first working of parcel categorization based on dimensions, and then comes an adition of a constraint based on weight, which has to co-exist with all the other items. Also, in the real world there would need to be a more detailed explanation as to how to related weight and dimension. as I can have a small parcel, with a > 50kg weight, and at the moment one does not know what constraint to prioritize when pricing it.



### Notes on the task
--------------------------

(!) "The combination of discounts which saves the most money should be
selected every time" > This is really confusing within the context of the above sentences, which tells one to choose the cheapest parcel as the free one
[] Time spent:
[] About the 2 hours limit: 

Given more time - an maybe obvious - more tests could be written to account for more package combinations, better proving the business logic

