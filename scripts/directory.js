let namebtn =  document.getElementById('namebtn');
let lastbtn = document.getElementById('lastbtn');
let slackbtn = document.getElementById('slackbtn');
let emailbtn = document.getElementById('emailbtn');
let hobbiesbtn = document.getElementById('hobbiesbtn');
let result = document.getElementById('result');
let userInput = document.getElementById('userInput');
let miniCh8firstNameURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh8/firstName";
let miniCh8lastNameURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh8/lastName";
let miniCh8EmailURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh8/email";
let miniCh8slackNameURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh8/slackName";
let miniCh8HobbiesURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh8/hobbies";


function modelMethod(url, model)
{
    fetch(url,{
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(model)
    }).then(response => response.json())
    .then(data => result.innerHTML = `First Name: ${data.firstName} </br> Last Name: ${data.lastName} </br> Slack Name: ${data.slackName} </br> Email: ${data.email} </br> Hobbies: ${data.hobbies}`);
}



namebtn.addEventListener('click',function(e){
    let miniCh8firstNameModel = {
        firstName: userInput.value.toLowerCase()
    };
    modelMethod(miniCh8firstNameURL, miniCh8firstNameModel);
});
lastbtn.addEventListener('click',function(e){
    let miniCh8lastNameModel = {
        lastName: userInput.value.toLowerCase()
    }
    modelMethod(miniCh8lastNameURL, miniCh8lastNameModel);
});
emailbtn.addEventListener('click',function(e){
    let miniCh8EmailModel ={
        email: userInput.value.toLowerCase()
    };
    modelMethod(miniCh8EmailURL, miniCh8EmailModel);
});
slackbtn.addEventListener('click',function(e){
    let miniCh8slackNameModel ={
        slackName: userInput.value.toLowerCase()
    }
    modelMethod(miniCh8slackNameURL, miniCh8slackNameModel);
});
hobbiesbtn.addEventListener('click',function(e){
    let miniCh8HobbiesModel = {
        hobbies: userInput.value.toLowerCase()
    };
    modelMethod(miniCh8HobbiesURL, miniCh8HobbiesModel);
});


  