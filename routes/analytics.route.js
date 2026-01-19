const express = require("express");
const { handleEvent, handlePage } = require("../controller/analytics.controller");

const router = express.Router();

router.post("/event", handleEvent)
router.post("/page", handlePage)

module.exports = router;