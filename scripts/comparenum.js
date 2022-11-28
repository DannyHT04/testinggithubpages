let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let submitbtn = document.getElementById('submitbtn');
let result = document.getElementById('result');


submitbtn.addEventListener('click',function(e){
    if(parseInt(num1.value) && (parseInt(num2.value))){
        getData();
    }else{
        result.textContent="Enter in a whole number!";
    }
    
});


function getData(){
    fetch(`https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh4/${num1.value}/${num2.value}`)
    .then(response => response.text())
    .then(data => {
        result.innerHTML = data;
    });
}