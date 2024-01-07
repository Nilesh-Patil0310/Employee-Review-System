const express = require("express"); 

const router = express.Router(); 

// access review controllers methods from here
const reviewController = require("../controllers/review_controller");

// setup new review
router.get("/newReview/:id", reviewController.newReview);

module.exports = router;
