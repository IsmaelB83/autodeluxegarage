const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarSchema = new Schema({
    id: { type: String },
    url: { type: String },
    name: { type: String },
    image: { type: String },
    year: { type: String },
    oil: { type: String },
    colour: { type: String },
    kilometers: { type: String },
    price: { type: String },
    brand: { type: String },
    power: { type: String },
    shift: { type: String },
    published: { type: String },
    images: { type: Array},
    sold: { type: Boolean },

});

module.exports = mongoose.model('Car', CarSchema);