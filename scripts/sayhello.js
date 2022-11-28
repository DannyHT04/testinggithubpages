let userName = document.getElementById('userName');
let submitBtn = document.getElementById('submitBtn');
let result = document.getElementById('result');

//submit button

submitBtn.addEventListener('click', function(e){
    getData();
    
});


function getData(){
    fetch(`https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh1/${userName.value}`)
    .then(response => response.text())
    .then(data => {
        result.textContent = data;
    });
}