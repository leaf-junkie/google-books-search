const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Route to all books
router.route("/books")
    .get(bookController.findAll)
    .post(bookController.create);

// Route to books matching specified id
router.route("/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);

module.exports = router;