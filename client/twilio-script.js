$("#notify-me").click(function(){
    $.ajax({
      method : "POST",
      url : "http://localhost:4000/notify",
      data : {
        notification : $('#notification').val(),
        phone :$('#phone').val()
      }
    })
    .done(function(message){
      console.log(message)
      $('.notif').show()
    })
})