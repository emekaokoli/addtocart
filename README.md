# A simple shopping cart App.

AddToCart is a simple React app that allows you to add items to a shopping cart with the following functions.

### To run the app
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

:rocket:
live project URL: [https://addtocart.vercel.app/](https://addtocart.vercel.app/) 

## Features
#

The app utilized lifting the state pattern by passing props through components **(A.K.A prop drilling)** and also re-used components.

- lets you select the list of items to add to the cart
- lets you select the quantity of each item to add to the cart by two options:
    * adjusting the range slider will increment/decrement the number of products quantity
    * typing a value into the input box also updates the number of products quantity: this automatically sums the amount for the user to see before adding the product to the cart.
- and finally, the user can add the product to the cart.

The app also tabulates the total amount of products in the cart, showing:

1. product name
2. product quantity
3. product price

Users can also remove individual items from the cart.
### cart limitation
The shopping cart is designed to only hold a maximum of 10 products, you get to see the product limit decrements/decrement each time a new item is added or removed from the cart.

The app also shows a progress bar, indicating the progress limit reached by colour, and value in percentage.

The app lets you clear the entire shopping cart without reloading the page.

and finally, click the **buy** button to show a success message in a modal window with the option to close the window.
## Notable Features
#
created a custom hook, **useDebounce** so that the sum for a product does not recalculate immediately after the quantity changes by the range slider.

used react's **memoization hooks** such as seMemo hook to mitigate excessive component re-renders.
#
## Technologies:
#
* React
* Reactstrap
* Typescript
* Font-awesome
#
### Project Directory Structure
#
```bash
src
 ┣ components
 ┃ ┣ Buy.tsx
 ┃ ┣ BuySuccess.tsx
 ┃ ┣ CartProgressBar.tsx
 ┃ ┣ CartTable.tsx
 ┃ ┣ ClearCart.tsx
 ┃ ┣ Header.tsx
 ┃ ┣ ItemsInCart.tsx
 ┃ ┣ ListProducts.tsx
 ┃ ┗ TotalPriceOfItems.tsx
 ┣ css
 ┃ ┣ buy.styles.css
 ┃ ┣ cart.styles.css
 ┃ ┣ clear-cart.styles.css
 ┃ ┣ productlist.styles.css
 ┃ ┗ progressbar.styles.css
 ┣ data
 ┃ ┗ products.json
 ┣ helpers
 ┃ ┣ AddToCart.tsx
 ┃ ┣ Input.tsx
 ┃ ┣ SelectProduct.tsx
 ┃ ┣ Table.tsx
 ┃ ┗ TableItems.tsx
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
### Contributing
#
Contribute to the project by opening an issue or creating a pull request.

### Project author
#
[Github](www.github.com/emekaokoli)
[Twitter](www.twitter.com/emyokoli)
