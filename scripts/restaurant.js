let btn1 =document.getElementById('btn1');
let btn2 =document.getElementById('btn2');
let btn3 =document.getElementById('btn3');
let result = document.getElementById('result');

btn1.addEventListener('click',function(e){
    {
        mexicanFood();
    }
});

btn2.addEventListener('click',function(e){
    {
        asianFood();
    }
});

btn3.addEventListener('click',function(e){
    {
        americanFood();
    }
});


function asianFood(){
    fetch(`https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh9/asian`)
    .then(response => response.text())
    .then(data => {
        result.textContent =data;
    });
}
function americanFood(){
    fetch(`https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh9/american`)
    .then(response => response.text())
    .then(data => {
        result.textContent =data;
    });
}
function mexicanFood(){
    fetch(`https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh9/mexican`)
    .then(response => response.text())
    .then(data => {
        result.textContent =data;
    });
}