$(".list-news").click(function(){ 
    $("#news").empty()
    $.ajax({
        method: "GET",
        url: "http://localhost:4000/news/all-source",
    })
    .done(function(data){
        let count = 0
        for(let i = 0;i < data.sources.length;i++){
            if ( count < 5) {
                $("#news").append(`
                <tr>
                    <td><strong>${data.sources[i].name}</strong></td>
                    <td>${data.sources[i].country}</td>
                    <td>${data.sources[i].description}</td>
                </tr>`)
            }
            count++
        }
    })
    .fail(function(){
        console.log('error')
    })
})

$(".list-tv").click(function(){ 
    $("#news").empty()
    $.ajax({
        method: "GET",
        url: "http://localhost:4000/news/all-source",
    })
    .done(function(data){
        let count = 0
        for(let i = 0;i < data.sources.length;i++){
            if ( count < 5) {
                $("#news").append(`<tr>
                    <td><strong>${data.sources[i].name}</strong></td>
                    <td>${data.sources[i].country}</td>
                    <td>${data.sources[i].description}</td>
                    </tr>`)
            }
        }
    })
    .fail(function(){
        console.log('error')
    })
})


$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "http://localhost:4000/news/all-source",
    })
    .done(function(data){
        const countNews = data.sources.length
        $(".length-art").text(countNews)
    })
    .fail(function(err){
        console.log(err)
    })
})