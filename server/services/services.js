const data = require("../database/datamanager");

const getAllItems = (sport, gender, new_arrival, sale) => {
    const items = data.getAllData(sport, gender, new_arrival, sale)
    return items
}

const getItemById = (id) => {
    const item = data.getItemById(id)
    return item
}


const getAllShoes = (sport, gender) => {
    const items = data.getAllShoes(sport, gender)
    return items
}

const getAllClothing = (sport, gender) => {
    const items = data.getAllClothing(sport, gender)
    return items
}

const getAllAccessories = (sport, gender) => {
    const items = data.getAllAccessories(sport, gender)
    return items
}

const getAllSales = (sport, gender) => {
    const items = data.getAllSales(sport, gender)
    return items
}

const getAllNewArrivals = (sport, gender) => {
    const items = data.getAllNewArrivals(sport, gender)
    return items
}

module.exports = {
    getAllItems,
    getItemById,
    getAllShoes,
    getAllClothing,
    getAllAccessories,
    getAllSales,
    getAllNewArrivals
}
