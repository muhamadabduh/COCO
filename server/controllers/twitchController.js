const request =require('request')
class Controller {
    static getHome(req,res){

        var options = {
            url:'https://api.twitch.tv/kraken/streams/featured',
            headers: {
                'User-Agent': 'request',
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID' : 'ie8a19qcy21809mro01va3ccx3ni4u'
              }
        }
        request(options, function(err,data){
            res.send(JSON.parse(data.body))
        })
    }

    static search (req, res){
        console.log(req.params.game)
        var joinedUrl = 'https://api.twitch.tv/kraken/streams/?game='+ req.params.game
        let options= {
            url: joinedUrl,
            headers: {
                'User-Agent': 'request',
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID' : 'ie8a19qcy21809mro01va3ccx3ni4u'
              }
        }

        request(options, function(err, data){
            res.send(JSON.parse(data.body))
        })
    }

    static topGame(req,res){
        let options= {
            url: 'https://api.twitch.tv/kraken/games/top',
            headers: {
                'User-Agent': 'request',
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Client-ID' : 'ie8a19qcy21809mro01va3ccx3ni4u'
         
            }
        }
        request(options,function(err,data){
         
            res.send(JSON.parse(data.body))
        })
    }
}

module.exports = Controller