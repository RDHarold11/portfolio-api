const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  linkDemo: {
    type: String,
    required: true,
  },
  linkCode: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectsSchema);
