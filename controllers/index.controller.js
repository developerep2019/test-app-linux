//Models 
const IndexModel = require('../models/index.model');

const getIndex = (req, res, next) => {
    res.render('index')
}

const postSubscribe = (req, res, next) => {
    const { username, email } = req.body;
    const newAccount = new IndexModel(username, email);
    newAccount.save();
    res.send('done :)')
}

module.exports.getIndex = getIndex;
module.exports.postSubscribe = postSubscribe;