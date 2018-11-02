
$(document).ready(function(){
    $.ajax({
    method: "GET",
    url: "http://localhost:4000/last-fm/top-tracks",
    })
    .done(function(lastFmData){
        // console.log(lastFmData.tracks.track);
        let count = 0
        lastFmData.tracks.track.forEach(lastFmIndex => {
            if (count < 10) {
                $("#lastFm").append(`
                    <tr>
                        <td>${lastFmIndex.artist.name}</td>
                        <td><a href="${lastFmIndex.url}" target="_blank">${lastFmIndex.name}</a></td>
                        <td>${lastFmIndex.listeners}</td>
                        <td>${lastFmIndex.playcount}</td>
                    </tr>
                `)
                count++
            }
        })
    })
    .fail(function(){
        console.log('error')
    })
})