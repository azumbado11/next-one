const service = require("../services/services");

const setCorsHeader = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
}

const getAllItems = (req, res) => {
    /* res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); */
    const { sport, gender, new_arrival, sale } = req.query

    const items = service.getAllItems(sport, gender, new_arrival, sale)

    if (items.length === 0) return res.send({ status: "404", message: "No Matches" })

    res.send({ status: "ok", data: items })
}

const getItemById = (req, res) => {
    const { params: { itemId } } = req;
    const item = service.getItemById(itemId)

    if (item.message === "Not Found") return res.status(404).json({ status: "404", message: "Item Not Found" })

    res.send({ status: "ok", data: item })
}

const getAllShoes = (req, res) => {
    const { sport, gender } = req.query

    const items = service.getAllShoes(sport, gender)
    if (items.length === 0) return res.send({ status: "404", message: "No Matches" })

    res.send({ status: "ok", data: items })
}

const getAllClothing = (req, res) => {
    const { sport, gender } = req.query

    const items = service.getAllClothing(sport, gender)
    if (items.length === 0) return res.send({ status: "404", message: "No Matches" })

    res.send({ status: "ok", data: items })
}

const getAllAccessories = (req, res) => {
    const { sport, gender } = req.query

    const items = service.getAllAccessories(sport, gender)
    if (items.length === 0) return res.send({ status: "404", message: "No Matches" })

    res.send({ status: "ok", data: items })
}

/* const getAllSales = (req, res) => {
    const { sport, gender } = req.query

    const items = service.getAllSales(sport, gender)
    if (items.length === 0) return res.send({ status: "404", message: "No Matches" })

    res.send({ status: "ok", data: items })
} */

/* const getAllNewArrivals = (req, res) => {
    const { sport, gender } = req.query

    const items = service.getAllNewArrivals(sport, gender)
    if (items.length === 0) return res.send({ status: "404", message: "No Matches" })

    res.send({ status: "ok", data: items })
} */


module.exports = {
    getAllItems,
    getItemById,
    getAllShoes,
    getAllClothing,
    getAllAccessories,
    setCorsHeader
}

/* v1/items/?sport=""&gender="" */