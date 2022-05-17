const db = require("../db_Models");
const Workout = db.workout;
const Op = db.Sequelize.Op;

// Create and Save a new workout
exports.create = (req, res) => {
    // Validate request
    if (!req.body.exercise) {
        res.status(400).send({
        message: "Must include exercise!"
        });
        return;
    }

    if (!req.body.pounds) {
        res.status(400).send({
            message: "Must include weight!"
        });
        return;
        }

    if (!req.body.reps) {
    res.status(400).send({
        message: "Must include number of reps!"
    });
    return;
    }

    // Create a new_work
    const workout = {
        exercise: req.body.exercise,
        pounds: req.body.pounds,
        reps: req.body.reps
    };
    // Save Workout in the database
    Workout.create(workout)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Workout."
        });
        });
    };

// Retrieve all workouts from the database for a specific exercise.
exports.findAll = (req, res) => {
    const exercise = req.query.exercise;
    var condition = exercise ? { exercise: { [Op.like]: `%${exercise}%` } } : null;
    Workout.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving Workouts."
        });
    });
};
// Find a single new workout with an id
exports.findOne = (req, res) => {
  
};
// Update a new workout by the id in the request
exports.update = (req, res) => {
  
};
// Delete a new workout with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all new workouts from the database.
exports.deleteAll = (req, res) => {
  
};

// create a new workout: create(object)
// find a workout by id: findByPk(id)
// get all workouts: findAll()
// update a workout by id: update(data, where: { id: id })
// remove a workout: destroy(where: { id: id })
// remove all workouts: destroy(where: {})
// find all workouts by lift: findAll({ where: { title: ... } })