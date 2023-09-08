# MERN AMAZONA

# Lessons
1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository
5. List Products
    1. create products array
    2. add product images
    3. render products
    4. style products
6. Add Routing
    1. pnpm i react-router-dom
    2. create route for home screen
    3. create router for product screen 
7. Create Node.JS Server
    1. run pnpm init in root folder
    2. update package.json set type:module
    3. add .js to imports
    4. pnpm i express
    5. crete server.js
    6. add start command as node backend/server.js
    7. require express
    8. create route for / return backend is ready
    9. move products.js from frontend to backend
    10. create route for api/products
    11. return prodcuts
    12. pnpm run dev
8. Fetch Products From Backend
    1. set proxy in package.json
    2. pnpm i axios
    3. use state hook
    4. use effect hook
    5. use reducer hook
9. Manage State By Reducer Hook
    1. define reducer
    2. update fetch data
    3. get state from us Reducer
10. Add Bootstrap UI Framework
    1. pnpm i react-bootstrap bootstrap
    2. update App.jsx
11. Create Product and Rating Component
    1. create Rating component
    2. create Product component
    3. use Rating component in Product component
12. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action
13. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function
14. Implement Add To Cart
    1. crete react context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
15. Complete Add To Cart
    1. check exist item in the cart
    2. check count in stock in backend
16. Create Cart Screen
    1. create 2 columns
    2. display items list
    3. create action column