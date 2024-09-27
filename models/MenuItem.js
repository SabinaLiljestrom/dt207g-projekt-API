const mongoose = require('mongoose');

// MenuItem schema
const MenuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Du måste ange ett namn på maträtten"],
    },
    description: {
        type: String,
        required: [true, "Du måste ange en beskrivning av maträtten"],
    },
    price: {
        type: Number,
        required: [true, "Du måste ange ett pris på maträtten"],
    },
});

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);
module.exports = MenuItem;