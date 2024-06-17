const express = require("express");
const v1Router = require("./v1/routes/apiroutes");
const controller = require("./controllers/controllers");
/* const cors = require("cors");  */

const app = express();

const PORT = process.env.PORT || 4000;
app.set("port", PORT);
app.set("appName", "Express Test");

app.use(express.json());

app.use(controller.setCorsHeader);
/* app.use(cors()); */

app.use("/api/v1/items", v1Router);

/* app.listen(app.get("port"), () => {
    console.log(`${app.get("appName")} ready on Port ${app.get("port")}`);
}) */
console.log("index")
app.listen(PORT, () => { console.log(`server ready on port ${PORT}`) })

/* 
using filter query params and filtering the data at backend
unless you surely know that the same client will require all the record within a short time frame
then I would recommend fetching all and storing them in local storage.
*/
