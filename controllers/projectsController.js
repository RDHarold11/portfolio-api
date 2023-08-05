const Projects = require("../models/Projects");

const createProject = async (req, res) => {
  if (
    !req.body.img ||
    !req.body.title ||
    !req.body.linkDemo ||
    !req.body.linkCode ||
    !req.body.category
  )
    return res.status(204).json({ message: "data cant be empty" });

  try {
    const result = await Projects.create({
      img: req.body.img,
      title: req.body.title,
      linkDemo: req.body.linkDemo,
      linkCode: req.body.linkCode,
      category: req.body.category,
      description: req.body.description,
      color: req.body.color,
    });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getProjects = async (req, res) => {
  const project = await Projects.find();
  if (!project) return res.json({ message: "No data" });
  res.json(project);
};

const getSingleProject = async (req, res) => {
  if (!req.params.id) return res.status(400).json({ message: "No id" });

  const project = await Projects.findOne({ _id: req.params.id });
  if (!project) return res.status(204).json({ message: "No project" });
  res.json(project);
};

const updateProject = async (req, res) => {
  if (
    !req.body.img ||
    !req.body.title ||
    !req.body.linkDemo ||
    !req.body.linkCode ||
    !req.body.category
  )
    return res.status(204).json({ message: "data cant be empty" });

  const project = await Projects.findOne({ _id: req.params.id });
  if (!project) return res.status(204).json({ message: "no project" });

  project.img = req.body.img;
  project.title = req.body.title;
  project.linkDemo = req.body.linkDemo;
  project.linkCode = req.body.linkCode;
  project.category = req.body.category;
  project.description = req.body.decription;
  project.color = req.body.color;

  const result = await project.save();
  res.json(result);
};

const deleteProject = async (req, res) => {
  if (!req.params.id) return res.status(204).json({ message: "No id" });

  const project = await Projects.findOne({ _id: req.params.id }).exec();
  if (!project)
    return res.status(204).json({ message: "No hay ningun proyecto" });

  const result = await project.deleteOne({ _id: req.params.id });
  res.json(result);
};

module.exports = {
  createProject,
  deleteProject,
  updateProject,
  getSingleProject,
  getProjects,
};
