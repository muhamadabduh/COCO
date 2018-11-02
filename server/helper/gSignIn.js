
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("40553841185-7cc86d15vul99o3algl9viieshnk7d2f.apps.googleusercontent.com");
const accountUser = require('../models/accounts')
const jwt = require('jsonwebtoken')

const gSignin = function (req,res) {
    console.log(req.body);
    console.log("masuk");
    let token = req.body.gToken // ini dari req.body {token: valueToken}
    let clientId = "40553841185-7cc86d15vul99o3algl9viieshnk7d2f.apps.googleusercontent.com"
    client.verifyIdToken({
        idToken : token,
        audience: clientId
    }, function(err, response) {
        if(!err){
            console.log('gak error')
            console.log(response)
            console.log(response.payload);
            let emailUser = response.payload.email // ini dari payload email
            accountUser.findOne({
                email: emailUser
            },function(error,response) {
                if (response) {
                    console.log(process.env.JWT_SECRET);
                    const token = jwt.sign({response}, process.env.JWT_SECRET)
                    
                    res.status(200).json({
                        response: response,
                        token: token
                    })
                }else {
                    accountUser.create({
                        email: emailUser,
                        password: 12345
                    }, function(error, response) {
                        if (!err) {
                            console.log(process.env.JWT_SECRET);
                            
                            const token = jwt.sign({response}, process.env.JWT_SECRET)
                            res.status(201).json({
                                response: response,
                                token: token
                            })
                        }else {
                            console.log(err);
                        }
                    })
                }
            })
            
        }else{
            console.log(err)
        }
    })
}



module.exports = gSignin