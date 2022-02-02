exports.home = async(req, res) => {
    res.status(200).render("home");

}

exports.form = async(req, res) => {
    res.status(200).render("form");

}