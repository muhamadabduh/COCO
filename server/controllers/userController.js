const gSignIn = require('../helper/gSignIn')
const Account = require('../models/accounts')


module.exports = {
    gSignIn,
    createAcc(req,res) {
        const newAcc = new Account ({
            email: req.body.email,
            password: req.body.password
        })
        newAcc.save()
        .then((accs) => {
            res.status(200).json({
                accs: accs,
                message: `an Account has been created`
            })
        })
        .catch((err) => {
            res.status(500).json({
                message: `an Account creation failed`
            })
        })
    }
}