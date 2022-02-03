const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,


        })
        console.log('MongoDB connected to:' + conn.connection.host);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
module.exports = connectDB;
