const express = require("express")
const router = express.Router();
const { getEverything } = require("../controllers/getEverything")

router.get("/api/get-everything", getEverything)

module.exports = router;