const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db_Models");
const { sequelize } = require("./db_Models");
const workout = require("./db_Models/workout.model");

var corsOptions = {
  origin: "http://localhost:3306"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");

  

});

require("./routes/workout.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});