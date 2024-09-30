## Description
E-Commerce Website created with Next.js. Backend REST API created with Express.js

## Author
**azumbado11**
* [LinkedIn](https://www.linkedin.com/in/azumbado11)

## Getting Started
First, install dependencies and run the development server:

```bash
npm install
npm run dev
```
Then, create a new terminal and run the REST API:
```bash
cd server
npm run dev
```
Check [http://localhost:3000](http://localhost:3000) with your browser to see the frontend.
Check [http://localhost:4000](http://localhost:4000) with your browser to see the API.

## API Routes
- main route  http://localhost:4000/api/v1/items
- items by id http://localhost:4000/api/v1/items/item/:itemId
- item  bycategory http://localhost:4000/api/v1/items/category (shoes, clothing, accessories)

## API Query Filters
Filter Items by Query Params (allowed params)
- Filter by Sport ?sport= (all | lifestyle | football | running | basketball | soccer | skateboarding)
- Filter by Gender ?gender= (all | unisex | men | women)
- Filter by Sale ?sale= (true | false)
- Filter by New Arrival ?new_arrival= (true | false)		

## Contact
Contact me at gv11zumbado@gmail.com
