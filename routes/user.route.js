const express = require("express");
const { handleUserData } = require("../controller/user.controller");

const router = express.Router();

router.post("/data", handleUserData)

module.exports = router;