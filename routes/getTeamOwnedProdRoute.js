const express = require("express")
const router = express.Router();
const { getTeamOwnedProd } = require("../controllers/getTeamOwnedProd")

router.get("/api/get-team-owned-products", getTeamOwnedProd)

module.exports = router;