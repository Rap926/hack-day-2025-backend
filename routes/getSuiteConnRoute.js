const express = require("express")
const router = express.Router();
const { getSuiteConn } = require("../controllers/getSuiteConn")

router.get("/api/get-suite-connection", getSuiteConn)

module.exports = router;