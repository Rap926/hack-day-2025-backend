const express = require("express")
const router = express.Router();
const { getHomeScreen } = require("../controllers/getHomeScreen")

router.get("/api/get-home-screen", getHomeScreen)

module.exports = router;