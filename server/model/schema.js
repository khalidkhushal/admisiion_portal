const mongoose = require('mongoose');

const schema = new mongoose.Schema({

    profile_pic: {
        data: Buffer,
        contentType: String
    },
    First_name: String,
    Last_name: String,
    father_name: String,
    email: { type: String, unique: true },
    phone: String,
    address: String,
    city: String,
    state: String,
    zip_code: String,
    FSc_marks: String,
    FSc_Total_marks: String,
    FSc_college: String,
    Matric_marks: String,
    Matric_Total_marks: String,
    Matric_college: String,
    BS: { type: Array, default: [] },
    engg_pref: { type: Array, default: [] }


}, { collection: 'applicants' });

const applicant = mongoose.model('applicants', schema);
module.exports = applicant;