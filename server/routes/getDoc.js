const express = require("express");
const router = express.Router();

const { getDocController, deleteDocController } = require("../controllers/doc.js");
const { getLabController, deleteLabController } = require("../controllers/lab.js");


router.route("/doc")
    .get(getDocController)
    .delete(deleteDocController);


router.route("/lab")
    .get(getLabController)
    .delete(deleteLabController);

module.exports = router;