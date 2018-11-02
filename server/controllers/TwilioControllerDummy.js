var client = require('twilio')('ACc8a79f314a6c47b798cb0717459c1a6e', '1a344bbdb50b5d0b0bb95124f771731e')
// console.log(process.env.twilio_sid, process.env.twilio_auth_token)
// console.log(typeof process.env.twilio_sid)
const request = require('request')

class TwilioController{
    static notifyMe(req, res){

        var auth = new Buffer('ACc8a79f314a6c47b798cb0717459c1a6e' + ':' + '1a344bbdb50b5d0b0bb95124f771731e').toString('base64');
        let options = {
            url: `https://api.twilio.com/2010-04-01/Accounts/ACc8a79f314a6c47b798cb0717459c1a6e/Messages.json`,
            headers: {
                'User-Agent': 'request',
                'Authorization': 'Basic ' + auth,
                'Content-Type': 'application/json'
            },
            data : {
                'To': 'whatsapp:+6285722507840',
                'From': 'whatsapp:+14155238886',
                'Body': 'Your appointment is coming up on July 21 at 3PM'
            }
        }

        request.post(options, function(err, response, body){
            if(err){
                res.status(500).json({
                    error : err,
                    message : "can not send whatsapp notification"
                })
            } else {
                res.status(200).json({
                    body : body,
                    response : response
                })
            }
        })

    }
}

// TwilioController.notifyMe

module.exports = TwilioController