function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    console.log(id_token)
    $.ajax({
        method: 'POST',
        url: "http://localhost:4000/gsignin",
        data: {
            gToken: id_token
        }
    })
    .done(jwt => {
        console.log(jwt.token, 'ini jwt token');
        localStorage.setItem('token',jwt.token)
    })
    .fail(err => {
        console.log(err);
    })
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');
    });
}