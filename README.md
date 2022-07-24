# A simple shopping cart App

AddToCart is a simple React app that allows you to add items to a shopping cart with the following functions.

# The app features.

The app utilized passing props through components so as to re-use states and functions across components.

- lets you select list of items to add to the cart
- lets you select the quantity of each item to add to the cart by two options:
  1. adjusting the range slider to increment the quantity of products.
  2. by input box to enter the value of the quantity of products desired.
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

# libraries:

* Library: React
* Reactstrap
* Path: react
* Language: typescript
* Version: 18.2.0

# Directory Structure
```bash
src
 ┣ components
 ┃ ┣ Buy.tsx
 ┃ ┣ CartProgressBar.tsx
 ┃ ┣ CartTable.tsx
 ┃ ┣ ClearCart.tsx
 ┃ ┗ ListProducts.tsx
 ┣ css
 ┃ ┣ buy.styles.css
 ┃ ┣ cart.styles.css
 ┃ ┣ clear-cart.styles.css
 ┃ ┣ productlist.styles.css
 ┃ ┗ progressbar.styles.css
 ┣ data
 ┃ ┗ products.json
 ┣ interfaces
 ┃ ┣ cart.ts
 ┃ ┣ productItem.ts
 ┃ ┗ products.ts
 ┣ utils
 ┃ ┗ useDebounce.ts
 ┣ App.css
 ┣ App.test.tsx
 ┣ App.tsx
 ┣ index.css
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┗ setupTests.ts

````
### To run the app
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


live project url: [https://addtocart.vercel.app/](https://addtocart.vercel.app/)

# Contributing
Contribute to the project by opening an issue or creating a pull request.
