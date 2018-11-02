const request = require('request')

class News {
    static allSource(req, res){
        let options = {
            url: `https://newsapi.org/v2/sources?`,
            headers: {
            'User-Agent': 'request',
            'Authorization' : `token fd8951d68d4142a5b510b751a79e25a0`
            },
            json : true
        }

        request(options ,function(err, response, body){
            res.status(200).json(body)
        })
    }

    
}

module.exports = News