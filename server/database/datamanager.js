let DB = require("./data.json");

const SPORT_QUERY_INPUTS = ["lifestyle", "football", "football", "running", "basketball", "soccer", "skateboarding", "all"];
const GENDER_QUERY_INPUTS = ["men", "women", "unisex", "all"];
const BOOLEAN__QUERY__INPUTS = ["true", "false"];

const getAllData = (sport, gender, new_arrival, sale) => {
    return filter(sport, gender, new_arrival, sale)
}

const getItemById = (itemId) => {
    const item = DB.find((item) => item.id === Number(itemId))

    if (!item) return { message: "Not Found" }

    return [item]
}

const getAllShoes = (sport, gender) => {
    /* first, filter items by req.query */
    const filtered = filter(sport, gender)

    /* then filter the prev filtered items by category */
    const shoes = filtered.filter((item) => {
        if (item.category === "shoes") return item
    })
    return shoes
}


const getAllClothing = (sport, gender) => {
    const filtered = filter(sport, gender)
    const clothing = filtered.filter((item) => {
        if (item.category === "clothing") return item
    })
    return clothing
}

const getAllAccessories = (sport, gender) => {
    const filtered = filter(sport, gender)
    const accesories = filtered.filter((item) => {
        if (item.category === "accessories") return item
    })
    return accesories
}

const getAllSales = (sport, gender) => {
    const filtered = filter(sport, gender)
    const sales = filtered.filter((item) => {
        if (item.sale) return item
    })
    return sales
}

const getAllNewArrivals = (sport, gender) => {
    const filtered = filter(sport, gender)
    const newArrivals = filtered.filter((item) => {
        if (item.arrival) return item
    })
    return newArrivals
}

module.exports = {
    getAllData,
    getItemById,
    getAllShoes,
    getAllClothing,
    getAllAccessories,
    getAllSales,
    getAllNewArrivals
}

/* Filter function, accepts req.query for sport and gender */
const filter = (sportq, genderq, new_arrivalq, saleq) => {
    let sport = sportq || "all";  /* if there is no query, get all  */
    let gender = genderq || "all";
    let new_arrival = new_arrivalq || "all";
    let sale = saleq || "all";

    /* Checks if the query matches with allowed values, if not, return "all" (ignore filter) */
    SPORT_QUERY_INPUTS.indexOf(sport) === -1 ? sport = "all" : sport
    GENDER_QUERY_INPUTS.indexOf(gender) === -1 ? gender = "all" : gender

    BOOLEAN__QUERY__INPUTS.indexOf(new_arrival) === -1 ? new_arrival = "all" : new_arrival = true
    BOOLEAN__QUERY__INPUTS.indexOf(sale) === -1 ? sale = "all" : sale = true

    return DB.filter((item) => {
        return (
            (gender === "all" ||
                item.genre === gender
            ) &&
            (sport === "all" ||
                item.sport === sport
            ) &&
            (new_arrival === "all" ||
                item.arrival === new_arrival
            ) &&
            (sale === "all" ||
                item.sale === sale
            )
        )
    })
}

/* console.log(filter(null, "unisex")) */

/* ./database/datamanager */
/* 
sport values: "all" | "lifestyle" | "football" | "running" | "basketball" | "soccer" | "skateboarding"
gender values: "all" | "unisex" | "men" | "women"
*/

/* 
El fetch le está mandando null al API cuando no recibe un req.query, manejar ese request en el filter()

SPORT_QUERY.indexOf(valueA) === -1 ** si indexOf da -1, es que el valor no existe

Filter with only gender and sport req.query

return DB.filter((item) => {
        return (
            (gender === "all" ||
                item.genre === gender
            ) &&
            (
                sport === "all" ||
                item.sport === sport
            )
        )
    })

*/