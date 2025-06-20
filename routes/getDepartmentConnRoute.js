const express = require("express")
const router = express.Router();
const { getDepartmentConn } = require("../controllers/getDepartmentConn")

router.get("/api/get-department-connection", getDepartmentConn)

module.exports = router;