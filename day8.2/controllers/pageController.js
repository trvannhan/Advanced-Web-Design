exports.home = (req, res) => {
    res.render('home'); // render views/home.ejs
};
exports.about = (req, res) => {
    res.render('news'); // render views/news.ejs
};
exports.contact = (req, res) => {
    res.render('contact'); // render views/contact.ejs
};