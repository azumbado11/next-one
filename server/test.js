const SPORT_QUERY_INPUTS = ["lifestyle", "football", "football", "running", "basketball", "soccer", "skateboarding", "all"];
const GENDER_QUERY_INPUTS = ["men", "women", "unisex", "all"];
const BOOLEAN__QUERY__INPUTS = ["true", "false"]

const handler = (reqA, reqB) => {
    let sport = reqA || "all";
    let gender = reqB || "all";

    console.log(sport, gender) /* null */

    /* gender === "null" ? gender = "all" : gender; */
    /* console.log(gender); */

    SPORT_QUERY_INPUTS.indexOf(sport) === -1 ? sport = "all" : sport
    GENDER_QUERY_INPUTS.indexOf(gender) === -1 ? gender = "all" : gender
    console.log(sport) /* all */
    console.log(gender) /* all */
}

/* handler("soccer"); */
/* 
Si la query es difertente del array, que sea "all", esto antes del filtro

*/

/* let value = "null" */
const CATEGORY_VALUES = ["shoes", "clothing", "accessories"];

const check = (value) => {
    CATEGORY_VALUES.indexOf(value) === -1 ? value = "" : value
    console.log(value)
}

/* check("asd"); */




