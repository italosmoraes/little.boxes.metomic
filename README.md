## Parcels cost calculation solution

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
- improve the `getParcelCostItem` function to be a bit more explicity about the way the comparisons are being run and better organized in terms of how the code maps to the business logic being applied
- unless we are dealing in tons, the `maxDimension` limit of 9999 works fine but could be re-thought
- the `heavy parcel` included as part of the cost table makes the whole design of how the software calculates price a big mess. We are first working of parcel categorization based on dimensions, and then comes an adition of a constraint based on weight, which has to co-exist with all the other items. Also, in the real world there would need to be a more detailed explanation as to how to related weight and dimension. as I can have a small parcel, with a > 50kg weight, and at the moment one does not know what constraint to prioritize when pricing it.
- `parcelCostResolver` needs proper formatting of text
- add more combinations on the tests

### Notes on the task
--------------------------

(!) "The combination of discounts which saves the most money should be
selected every time" > This is really confusing within the context of the above sentences, which tells one to choose the cheapest parcel as the free one.

(!) at first one seems to need to output a text receipt, then by the end, I have no idea what the intended output should be. Whether some text, a note or some type of object that could then be manipulated into some presentation form.

(!) Time spent: around 3:30 hours, not counting project setup. And done non linearly, as one can see from the commit times.

(!) About the 2 hours limit:
The challenge of trying to build the solution within the time limit is an interesting one.
But that in addition to the orientation of trying to not sneak-peak, and build the solution up as one go (as I did), add a few elements to it which make the 2 hours limit unrealistic.
This feeling comes mostly from not knowing what will actually be evalutation or how. So one could find a sitation of focusing on design and not giving a complete solution, or focusing on finishing it all and delivering a solution with no thought of design, no comments, badly named things and not tests. To then, be evaluated exactly on what was missing. 
Given the overall scenario with tech test and interviews, the "suggested" 2 hours simply, from the get go, stressed me out.
So I went through it non linearly and not focusing too much on the timings.
Also, in trying to go through the task item per item, the redesign could mean re-writing a lot of the base logic and tests. So that did not feel like something to be done resonably in only 2 hours.

- Given more time - an maybe obvious - more tests could be written to account for more package combinations, better proving the business logic

