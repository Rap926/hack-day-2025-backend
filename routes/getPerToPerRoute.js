const express = require("express")
const router = express.Router();
const { getPerToPer } = require("../controllers/getPerToPer");

router.get("/api/get-person-to-person/name1/:name1/name2/:name2", getPerToPer)

module.exports = router;