const express = require("express")
const router = express.Router();
const { getHomeOptimized } = require("../controllers/getHomeOptimized");

router.get("/api/get-home-optimized", getHomeOptimized)

module.exports = router;