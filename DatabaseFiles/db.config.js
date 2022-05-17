module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "RTHayes856!",
    DB: "workout_data",
    dialect: "mysql",
    pool: {
      max: 5, // Max number of connections in pool
      min: 0, // Min"                             "
      acquire: 30000, // Max time idle before being released
      idle: 10000 // Max time taken to establish connection before error
    }
  };