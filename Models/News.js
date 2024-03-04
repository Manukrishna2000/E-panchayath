import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    news: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now // Set the default value to the current date
    }
});

const News = mongoose.model('News', newsSchema);
export default News;
