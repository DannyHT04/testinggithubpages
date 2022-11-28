
let miniCh1URL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh1/danny";
let miniCh2URL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh2/2/1";
let miniCh3URL ="https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh3/Danny/8/20//am";
let miniCh4URL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh4/3/8";
let miniCh5URL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh5";
let miniCh6URL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh6/100";
let miniCh7intURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh7/int/123";
let miniCh7stringURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh7/string/mississippi";
let miniCh8URL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh8";
let miniCh8firstNameURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh8/firstName";
let miniCh8lastNameURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh8/lastName";
let miniCh8EmailURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh8/email";
let miniCh8slackNameURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh8/slackName";
let miniCh8HobbiesURL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh8/hobbies";
let miniCh9URL ="https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh9";
let miniCh9AsianURL ="https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh9/asian";
let miniCh9AmericanURL ="https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh9/american";
let miniCh9MexicanURL ="https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh9/mexican";
function urlMethod(url){
    fetch(url).then(
        response => response.text()
    ).then(
        data => console.log(data)
    )
}

urlMethod(miniCh1URL);
urlMethod(miniCh2URL);
urlMethod(miniCh3URL);
urlMethod(miniCh4URL);
urlMethod(miniCh6URL);
urlMethod(miniCh7intURL);
urlMethod(miniCh7stringURL);
urlMethod(miniCh8URL);
urlMethod(miniCh9URL);
urlMethod(miniCh9AsianURL);
urlMethod(miniCh9AmericanURL);
urlMethod(miniCh9MexicanURL);

let miniCh5Model = {
    adj1: "ugly",
    adj2: "fatty",
    adj3: "stupid",
    adj4: "slow",
    noun1: "Table",
    animal: "Tiger",
    petName: "Kuma",
    noun2: "umbrella",
    noise: "fart",
    adverb: "gently"
};
let miniCh8firstNameModel = {
    firstName: "Danny"
};
let miniCh8lastNameModel = {
    lastName: "Barboza"
}
let miniCh8HobbiesModel = {
    hobbies: "Singing and Playing Video Games"
};
let miniCh8EmailModel ={
    email:  "smorenzone@codestack.co"
};
let miniCh8slackNameModel ={
    slackName:  "Walaa AlSalmi"
}
function modelMethod(url, model)
{


    fetch(url,{
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(model)
    }).then(response => response.text())
    .then(data => console.log(data));
}

modelMethod(miniCh5URL, miniCh5Model);
modelMethod(miniCh8firstNameURL, miniCh8firstNameModel);
modelMethod(miniCh8lastNameURL, miniCh8lastNameModel);
modelMethod(miniCh8EmailURL, miniCh8EmailModel);
modelMethod(miniCh8slackNameURL, miniCh8slackNameModel);
modelMethod(miniCh8HobbiesURL, miniCh8HobbiesModel);