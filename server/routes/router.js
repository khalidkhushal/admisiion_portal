const express = require("express");
const router = express.Router();
const multer = require('multer');
const applicants = require(".. / model / schema ");
const fs = require('fs');
const path = require('path');

const controller = require("../controller/controller");
const services = require("../services/services");
router.use(express.static(path.resolve(__dirname, "assets")))
router.get("/", services.home);
router.get("/application_form", services.form);



router.post("/application_form", controller.addapplicant);
router.get("/preview_form", controller.previewform);
//router.get("/application_form", controller.showapplicant);

module.exports = router;