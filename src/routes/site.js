const express = require("express");
const router = express.Router();

const homeController = require("../app/controllers/SiteController");

router.use("/search", homeController.search);

router.use("/", homeController.index);

module.exports = router;
