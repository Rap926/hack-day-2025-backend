const express = require("express")
const router = express.Router();
const { getAreaConn } = require("../controllers/getAreaConn")

router.get("/api/get-area-connection", getAreaConn)

module.exports = router;