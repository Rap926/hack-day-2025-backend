const express = require("express")
const router = express.Router();
const { getNode } = require("../controllers/getNode")

// Route with only id
router.get("/api/get-node/id/:id", getNode);

// Route with only name
router.get("/api/get-node/name/:name", getNode);

// Route with only description
router.get("/api/get-node/description/:description", getNode);

// Route with id, name, and description
// router.get("/api/get-node/:id?/:name?/:description?", getNodeById)

module.exports = router;