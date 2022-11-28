let num = document.getElementById('num');
let word = document.getElementById('word');
let submitbtn = document.getElementById('submitbtn');
let submitbtn2 = document.getElementById('submitbtn2');
let result = document.getElementById('result');
let result2 = document.getElementById('result2');

submitbtn.addEventListener('click',function(e){
    if(parseInt(num.value)){
        getData();
    }else{
        result.textContent="Enter in a whole number!";
    }
    
});


function getData(){
    fetch(`https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh7/int/${num.value}`)
    .then(response => response.text())
    .then(data => {
        result.textContent =data;
    });
}

submitbtn2.addEventListener('click',function(e){
            getData1();
});


function getData1(){
    fetch(`https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh7/string/${word.value}`)
    .then(response => response.text())
    .then(data => {
        result2.textContent =data;
    });
}