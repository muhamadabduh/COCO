const request =require('request')
class Controller {
    static getHome(req,res){
        // var options = {
        //     url: 'https://api.twitch.tv/helix/streams?game_id=33214',
        //     headers: {
        //         'User-Agent': 'request',
        //         'Client-ID' : 'ie8a19qcy21809mro01va3ccx3ni4u'
        //       }
        // }
        // request(options, function(err,data){
        //     res.send(JSON.parse(data.body))
        // })

        var options = {
            url:'https://api.twitch.tv/kraken/streams/?game=Overwatch',
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
}

module.exports = Controller