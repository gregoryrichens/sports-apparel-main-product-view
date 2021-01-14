# BlueBar Apparel - Sports Apparel Web Application - Main Product Viewer

## Description

BlueBar Apparel is an integrated web application that allows potential customers to browse thoroughly the latest in fashionable, functional sports equipment. User tasks accomplished via the application include:
* examine a product and its variations up close, almost as if in one's hand, via high definition photographs taken from multiple angles
* explore and select available sizes via sizepicker and shopping cart services
* read the real story by perusing product reviews from past customers
* investigate related products at-a-glance

The main product viewer and color picker services for which this README is written utilize a MERN stack - MongoDB, Express, React, and Node - and is best deployed within an EC2 ecosystem. However, the framework is flexible enough to accomodated different database choices (e.g. mysql) with minimal configuration changes.

### Site Preview

##### product viewer and size picker
![](public/FEC.gif)

[##### whole site YouTube preview](https://www.youtube.com/watch?v=KbGiwFLaxBk)

## Related Projects

  - https://github.com/true-barracudas/suggestions-service
  - https://github.com/true-barracudas/sizepicker-service
  - https://github.com/true-barracudas/reviews-service

## Table of Contents

- [Available Scripts](#Available_Scripts)
- [API Routes](#API_routes)
  - [Retrieve a Single Product](#Reading_One_Product)
  - [Retrieve All Products](#All_Products)

## Available_Scripts

### `npm install`

Will install all necessary development and production dependencies.

### `npm run seed-database`

If you have a local instance of mongo running, this command will seed a database named 'sadida' with 100 randomized product ids.

### `npm run transpile-dev`

Builds the app for development to the `public/dist` folder.\
Removing '-dev' from the command correctly bundles React in production mode (configurable within webpack.config.js) and optimizes the build for the best performance. Webpack is deployed in 'watch' mode by default. This is toggleable within webpack.config.js by setting the desired boolean value for the 'watch' property.

### `npm start`

Runs the app in the development mode via nodemon server on local machine.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

Port 3001 is also the listening port for API requests.

The page will reload if you make edits.\

### `npm run test`

Will run both back-end and front-end tests, both configured via jest testing framework. It is possible to run either of these individually. Please examine package.json for appropriate commands. 

note: back-end tests are run via mongodb test server, which may encounter scalability issues depending on the number of records / size of tests.

### other

As listed in package.json

## API_routes

This trackpinch service utilizes a RESTful API architecture to retrieve database-hosted, site-critical information. Syntax and routes conform to common sense REST standards. Only read routes are publicly exposed.

### Reading_One_Product

> GET: '/api/products/:id/trackpinch'

Used to retrieve all variants associated with a sigle given product id.

INPUT:
- id, stored as a parameter in the url (see code snippet above)

STATUS CODES:
- (404) on an unsuccessful request

RESPONSE FORMAT: the id of the created listing OR err message stringified
**JSON**
```
{"_id" : string,
  variants: [
   {
      color: string,
      images: array of strings (urls)
   }, 
   ... other variants
  ],
  productID: int,
  __v: int
}
```
### All_Products

An array of all product objects in the database can be retrieved via

> GET: '/allProducts'

STATUS CODES:
- (404) on an unsuccessful request

RESPONSE FORMAT: an array of product objects as listed above
