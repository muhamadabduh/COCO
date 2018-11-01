const request = require('request')
require('dotenv').config()

class Controller{
    static  getTracks(req,res){
        let joinedurl = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=" + process.env.TOKEN_LASTFM+"&format=json"
        // console.log(joinedurl)
        let options = {
            url: joinedurl
        }
        request(options, function(err, data){
            res.send(JSON.parse(data.body))
        })
    }
}

module.exports = Controller