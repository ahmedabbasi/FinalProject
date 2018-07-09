const router = require("express").Router();
const articleController = require("../../../controllers/articleController");

// Matches with "/api/articles"
router
  .route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

router.route("/sports").get(articleController.findAll)
.post(articleController.create);

router.route("/business").get(articleController.findAll)
.post(articleController.create);

module.exports = router;
