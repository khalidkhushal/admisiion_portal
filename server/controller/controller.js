const applicants = require("../model/schema");

exports.addapplicant = async(req, res) => {

    const {
        First_name,
        Last_name,
        father_name,
        email,
        phone,
        address,
        city,
        state,
        zip_code,
        FSc_marks,
        FSc_Total_marks,
        FSc_college,
        Matric_marks,
        Matric_Total_marks,
        Matric_college,
        BS,
        engg_pref

    } = req.body;

    await applicants.create({
            First_name,
            Last_name,
            father_name,
            email,
            phone,
            address,
            city,
            state,
            zip_code,
            FSc_marks,
            FSc_Total_marks,
            FSc_college,
            Matric_marks,
            Matric_Total_marks,
            Matric_college,
            BS,
            engg_pref
        })
        .then(data => {
            console.log("applicant added")
            res.render("home");
        }).catch(error => {
            res.status(500).send({ message: error.message || "something bad happened" });

        });


};