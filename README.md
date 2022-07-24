# A simple Add to shopping Cart React App

AddToCart is a simple React app that allows you to add items to a shopping cart with the following functions.

## the app features.

The app utilized passing props through components so as to re-use states and functions across components.

- lets you select list of items to add to the cart
- lets you select the quantity of each item to add to the cart by two options:
- a. adjusting the range slider to increment the quantity of products.
- b. by input box to enter the value of the quantity of products desired.
- the app automatically sums the amound for the user to see before adding to the cart.
- and finally add the product to cart.

The app also tabulates the total amount of products in the cart, showing:

1. product name
2. product quantity
3. product price

users can also remove individual items from the cart.

The shopping cart can only hold a maximum of 10 items, you get to see the limit decrements each time a new item is added to the cart.

The app also shows progress bar, indicating progress of limit reached by color, value and percentage.

The app lets you clear the entire shopping cart with reloading the page.

and finally click the buy button to show success message in a modal window with the option to close the window.

created a custom hook, useDebounce so that the sum for a product does not recalculate immediately after the quantity changes.

used react's memoization with useMemo hook to avoid re-rendering the entire component when the cart is cleared.

### libraries:

[]: # Library: React
[]: # Reactstrap
[]: # Path: react
[]: # Language: typescript
[]: # Version: 18.2.0
[]: # License: MIT

### to run the app

```bash

## Directory Structure

```

AAD DIRECTORY HERE

````

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

live project url: [https://addtocart.vercel.app/](https://addtocart.vercel.app/)

## contributing

```bash
Contribute to the project by opening an issue or creating a pull request.
````
