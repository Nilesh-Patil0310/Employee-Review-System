const express = require("express"); 
const router = express.Router(); 
const homeController = require("../controllers/home_controller");

// all the "/" redirect to home page
router.get("/", homeController.home);

// all the request related to users redirect to users route
router.use("/users", require("./users"));
// all the request related to admin redirect to admin route
router.use("/admin", require("./admin"));

// all the request related to reviews redirect to reviews route
router.use("/reviews", require("./reviews"));

module.exports = router;
