const mongoose = require("mongoose");

const buttonClick = new mongoose.Schema(
    {
        buttonLabel: {
            type: String,
            required: true,
        },
        eventName: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("ButtonClick", buttonClick)