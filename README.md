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
17. Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout
18. Create Signin Screen
    1. create sign in form
    2. add email and password
    3. add signin button
19. Connect To MongoDB Database
    1. create atlas mongodb database
    2. install local mongodb database
    3. pnpm i mongoose
    4. connect to mongodb database
20. Seed Sample Data
    1. create Product model
    2. create User model
    3. create seed route
    4. use route in server.js
    5. seed sample product
21. Seed Sample Users
    1. create User model
    2. seed sample users
    3. create user routes
22. Create Signin Backend API
    1. create signin api
    2. pnpm i jsonwebtoken
    3. define generateToken
23. Complete Signin Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
24. Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
25. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api
26. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
27. Create Place Order Screen
    1. show cart items, payment and address
    2. handle place order action
    3. create order create api
28. Implement Place Order Action
    1. handle place order action
    2. create order create api
29. Create Order Screen
    1. create backend api for order/:id
    2. fecth order api in frontend
    3. show order information in 2 columns
30. Pay Order By Paypal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript Function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
31. Display Order History
    1. create order screen
    2. create order history api
    3. use api in the frontend