const express = require("express")
const router = express.Router();
const { sendQuery } = require("../controllers/sendQuery")

router.get("/api/send-query/:query", sendQuery)

module.exports = router;