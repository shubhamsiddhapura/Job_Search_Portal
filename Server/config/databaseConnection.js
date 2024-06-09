const { default: mongoose } = require("mongoose")

exports.connect = () => {
    mongoose.connect(process.env.MONGO_DB_URL)
        .then(() => (console.log("DB connected succesfully")))
        .catch((error) => {
            console.log("Error in connecting dara base"),
            console.log(error),
            process.exit(1)
        })
};