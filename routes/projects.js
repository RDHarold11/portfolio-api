const { Router } = require("express");
const router = Router();
const {
  createProject,
  deleteProject,
  updateProject,
  getProjects,
  getSingleProject,
} = require("../controllers/projectsController");

router.route("/projects").get(getProjects).post(createProject);
router
  .route("/projects/:id")
  .delete(deleteProject)
  .get(getSingleProject)
  .patch(updateProject);

module.exports = router;
