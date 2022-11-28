let num = document.getElementById('num');
let submitbtn = document.getElementById('submitbtn');
let result = document.getElementById('result');

submitbtn.addEventListener('click',function(e){
    if(parseInt(num.value)){
        getData();
    }else{
        result.textContent ="Enter in a whole number!";
    }
    
});


function getData(){
    fetch(`https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh6/${num.value}`)
    .then(response => response.text())
    .then(data => {
        result.textContent =data;
    });
}