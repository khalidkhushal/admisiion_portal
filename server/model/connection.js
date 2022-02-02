const mongoose = require("mongoose");
mongo_uri = 'mongodb+srv://admin:12345@cluster0.sirrw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const connectDB = async() => {
    try {
        const conn = await mongoose.connect(mongo_uri, {
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