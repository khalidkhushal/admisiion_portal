const applicants = require("../model/schema");
const multer = require('multer');
const fs = require('fs');
const path = require('path');


//
const storage = multer.diskStorage({
    destination: 'uploads',
    fiename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});
const upload = multer({ storage: storage }).single('profile_pic');

exports.addapplicant = async(req, res) => {

    await upload(req, res, (err) => {
        if (err) {
            console.log(err);
        } else {
            const user = new applicants({
                profile_pic: {
                    data: req.file.filename,
                    contentType: "image/png"
                },
                First_name: req.body.First_name,
                Last_name: req.body.Last_name,
                father_name: req.body.father_name,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip_code: req.body.zip_code,
                FSc_marks: req.body.FSc_marks,
                FSc_Total_marks: req.body.FSc_Total_marks,
                FSc_college: req.body.FSc_college,
                Matric_marks: req.body.Matric_marks,
                Matric_Total_marks: req.body.Matric_Total_marks,
                Matric_college: req.body.Matric_college,
                BS: req.body.BS,
                engg_pref: req.body.engg_pref

            });
            applicants.create(user)
                .then(data => {
                    console.log("applicant added")
                    res.send("form submitted");
                }).catch(error => {
                    res.status(500).send({ message: error.message || "something bad happened" });

                });

        }

    })


};
//<img class="img-responsive" ng-alt="" src="{{'data:image/jpg;base64,'+item.Image}}"/>
exports.previewform = async(req, res) => {

    const user = new applicants({
        profile_pic: {
            data: req.file.filename,
            contentType: "image/png"
        },
        First_name: req.body.First_name,
        Last_name: req.body.Last_name,
        father_name: req.body.father_name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        FSc_marks: req.body.FSc_marks,
        FSc_Total_marks: req.body.FSc_Total_marks,
        FSc_college: req.body.FSc_college,
        Matric_marks: req.body.Matric_marks,
        Matric_Total_marks: req.body.Matric_Total_marks,
        Matric_college: req.body.Matric_college,
        BS: req.body.BS,
        engg_pref: req.body.engg_pref

    });

    res.send(user);


}