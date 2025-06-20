const express = require("express")
const router = express.Router();
const testCtrler = require("../controllers/testCtrler")

router.get("/test", testCtrler.testDatabase)

module.exports = router;