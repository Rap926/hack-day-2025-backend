const express = require("express")
const router = express.Router();
const { getProdRelations } = require("../controllers/getProdRelations")

router.get("/api/get-prod-relations", getProdRelations)

module.exports = router;