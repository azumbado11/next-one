const express = require("express");
const router = express.Router();
const controller = require("../../controllers/controllers");
router
    .get("/", controller.getAllItems)
    .get("/item/:itemId", controller.getItemById)
    .get("/shoes", controller.getAllShoes)
    .get("/clothing", controller.getAllClothing)
    .get("/accessories", controller.getAllAccessories)


module.exports = router;
/* 
hacer sales y new__arrivals como req.querys
    .get("/sales", controller.getAllSales)
    .get("/new_arrivals", controller.getAllNewArrivals)
*/