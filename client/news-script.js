$(".list-news").click(function(){ 
    $.ajax({
        method: "GET",
        url: "http://localhost:4000/news/all-source",
    })
    .done(function(data){
        for(let i = 0;i < data.sources.length;i++){
            $("#news").append(`<tr>
                <td><strong>${data.sources[i].name}</strong></td>
                <td>${data.sources[i].country}</td>
                <td>${data.sources[i].description}</td>
                </tr>`)
            
        }
        
    })
    .fail(function(){
        console.log('error')
    })
})

$(".list-tv").click(function(){ 
    $.ajax({
        method: "GET",
        url: "http://localhost:4000/news/all-source",
    })
    .done(function(data){
        for(let i = 0;i < data.sources.length;i++){
            $("#news").append(`<tr>
                <td><strong>${data.sources[i].name}</strong></td>
                <td>${data.sources[i].country}</td>
                <td>${data.sources[i].description}</td>
                </tr>`)
            
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