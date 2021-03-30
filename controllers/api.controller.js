//Models
const IndexModel = require('../models/index.model');

const allAccounts = (req, res, next) => {
    const accounts = IndexModel.getAllAccounts();
    res.send(accounts)
};


module.exports.allAccounts = allAccounts