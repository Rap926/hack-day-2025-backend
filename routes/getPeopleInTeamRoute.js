const express = require("express")
const router = express.Router();
const { getPeopleInTeam } = require("../controllers/getPeopleInTeam")

router.get("/api/get-people-in-team", getPeopleInTeam)

module.exports = router;