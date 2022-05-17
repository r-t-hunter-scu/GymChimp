module.exports = (sequelize, Sequelize) => {
    const workout = sequelize.define("workout", {
      exercise: {
        type: Sequelize.STRING
      },
      pounds: {
        type: Sequelize.FLOAT
      },
      reps: {
        type: Sequelize.INT
      }
    });
    return Workout;
  };

  // This represents the workout table in our database and 
  // automatically assigns and id as well as createdAt and
  // updatedAt columns