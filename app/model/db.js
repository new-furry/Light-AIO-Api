const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mongoose.connect(`mongodb://${dbConfig.HOST}/${dbConfig.DB}`, {                   //local
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
