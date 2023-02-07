const mongoose = require("mongoose")

const Shema = mongoose.Shema

const PictureSchema = new Shema({
    name: {type: String, require: true},
    src: {type: String, require: true},
});

module.sports = mongoose.model("Picture", PictureSchema);