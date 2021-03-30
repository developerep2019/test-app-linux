const accounts = [];


class IndexModel {
    constructor(userename, email) {
        this.userename = userename;
        this.email = email;
    };

    save() {
        accounts.push(this)
    }

    static getAllAccounts() {
        return accounts;
    }

};

module.exports = IndexModel;