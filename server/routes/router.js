const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");
const services = require("../services/services");

router.get("/", services.home);
router.get("/application_form", services.form);

router.post("/application_form", controller.addapplicant);


module.exports = router;