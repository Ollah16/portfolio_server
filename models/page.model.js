const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema(
    {
        pageName: {
            type: String,
            required: true
        },
        eventName: {
            type: String,
            required: true,
        },
        hostName: {
            type: String,
            required: true,
        }
    },

    {
        timestamps: true,
    }
)

module.exports = mongoose.model("PageVisit", pageSchema)