module.exports = (sequelize, Sequelize) => {
    const new_workout = sequelize.define("new_workout", {
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
    return NewWorkout;
  };