const accountSid = 'ACc8a79f314a6c47b798cb0717459c1a6e'
const authToken = '1a344bbdb50b5d0b0bb95124f771731e'
const client = require('twilio')(accountSid, authToken);

class TwilioController {
    static notifyMe(req, res){
        console.log(req.body.notification, '=====')
        client.messages
            .create({
                body: `${req.body.notification}`,
                from: 'whatsapp:+14155238886',
                to: `whatsapp:${req.body.phone}`
            })
            .then(message =>{
                res.status(200).json({
                    message : message.body
                })
            })
            .catch(err=>{
                console.log
            }) 
            .done();
    }
}

module.exports = TwilioController