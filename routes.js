const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const connection = mysql.createPool({
  host: "localhost", // Your connection adress (localhost).
  user: "root", // Your database's username.
  password: "Siku2001", // Your database's password.
  database: "GymChimp1.0", // Your database's name.
});

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.post("/users", function (req, res) {
  // Connecting to the database.
  connection.postConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query(
      "INSERT INTO USERS (1,'g','g');",
      function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results);
      }
    );
  });
});

// Starting our server.
app.listen(3306, () => {
  console.log("Go to http://localhost:3306/users so you can see the data.");
});
