module.exports = app => {
    const workouts = require("../controllers/workout.controller.js");
    var router = require("express").Router();
    // Create a new Workout
    router.post("/", workouts.create);
    // Retrieve all Workouts
    router.get("/", workouts.findAll);
    // Retrieve all published Workouts
    //router.get("/published", workouts.findAllPublished);
    // Retrieve a single Workout with id
    //router.get("/:id", Workouts.findOne);
    // Update a Workout with id
    //router.put("/:id", Workouts.update);
    // Delete a Workout with id
    //router.delete("/:id", Workouts.delete);
    // Delete all Workouts
    //router.delete("/", Workouts.deleteAll);
    app.use('/api/Workouts', router);
  };

  /*
  Routes are just URIs/paths (can be regular expressions too): basic format is 
  "app.METHOD(PATH, HANDLER)"
  - app is an instance of express
  - METHOD is an HTTP request method (lower case)
  - PATH is a path on the server
  - HANDLER is the function executed when the route is matched

  ex: router.get("/", workouts.findAll) implements the GET request and the function
      is findAll which is defined in the workout.controller.js file. This function 
      could also have been defined in place with (req, res) => {func body} instead.


  After a workout is completed and we need to store the data in the server, the relevant info for a workout is:
    row instance >> the workout
    columns >> unique id and foreign key to the respective table for that table
    
    workout table, set table exercise table 
    workout table [id, name, workout_id == foreign key]
    set table [set#, pounds, reps, exercise_id == foreign_key, workout_id == foreign_key] (primary key is set#, exercise_id and workout_id)
    exercise table [exercise_id == primary key, name, workout_id == foreign_key]


  Routes             HTTP Methods    Description
  /workout              GET         return all workout data for a user
  /workout              PUT(maybe post if ryan is dumb)      create a new workout (idempotent for repeat workouts >> no dups?)
  /workout/:exercise        GET         return all the data related to a single lift
  /workout/:exercise        POST        update data for an already existing lift
  /workout/:exercise       DELETE       delete a specific lift(do we need this?)

  */