const router = require("express").Router();
const handleGet = require("./controller");

router.get("/list", handleGet);

module.exports = router;
