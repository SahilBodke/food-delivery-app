const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofoodies:goFoodiesDB@cluster1.djcsmnl.mongodb.net/gofoodiesmern?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");

        const fetch_data = mongoose.connection.db.collection("food_items").find({});
        const results = await fetch_data.toArray();

        if (results.length > 0) {
            const foodCategory = mongoose.connection.db.collection("food_category").find({});
            const result1 = await foodCategory.toArray();

            if (result1.length > 0) {
                result1.forEach((innerResult, j) => {
                    global.food_category = result1;
                });
            } else {
                console.log('No listing found');
            }
            global.food_items = results;
        } else {
            console.log('No listings found');
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};


module.exports = mongoDB;

