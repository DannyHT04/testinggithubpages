let miniCh5URL = "https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh5";
let adj1 = document.getElementById('adj1'); 
let adj2 = document.getElementById('adj2');
let adj3 = document.getElementById('adj3');
let adj4 = document.getElementById('adj4');
let noun1 = document.getElementById('noun1');
let noun2 = document.getElementById('noun2');
let animal = document.getElementById('animal');
let animalName = document.getElementById('animalName');
let noise = document.getElementById('noise');
let adverb = document.getElementById('adverb');
let submitbtn = document.getElementById('submitbtn');
let result = document.getElementById('result');

submitbtn.addEventListener('click',function(e){
    let miniCh5Model = {
        adj1: adj1.value,
        adj2: adj2.value,
        adj3: adj3.value,
        adj4: adj4.value,
        noun1: noun1.value,
        animal: animal.value,
        petName: animalName.value,
        noun2: noun2.value,
        noise: noise.value,
        adverb: adverb.value
    };
    modelMethod(miniCh5URL, miniCh5Model);
});

function modelMethod(url, model)
{


    fetch(url,{
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(model)
    }).then(response => response.text())
    .then(data => result.textContent = data);
}