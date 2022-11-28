let Username = document.getElementById('Username');
let hours = document.getElementById('hours');
let min = document.getElementById('min');
let amPm = document.getElementById('amPm');
let submitbtn = document.getElementById('submitbtn');
let result = document.getElementById('result');


submitbtn.addEventListener('click', function(e){
   
    if(parseInt(hours.value) && 0 < hours.value && hours.value < 13){
        if(parseInt(min.value) && min.value > 0  && min.value < 60 || parseInt(min.value) == 0)
        {
            if(amPm.value.toLowerCase() == 'am' || amPm.value.toLowerCase()== 'pm'){
                getData();
            }
           else{
              result.textContent= "Enter 'am' or 'pm' only";
           }
        }else{
            result.textContent="Enter minutes 00 - 59";
        }
  
    
    }else{
        result.textContent="Enter the hour 1-12";
    }
   
});

function getData(){
    fetch(`https://dannyallinone.azurewebsites.net/MiniChallenges/miniCh3/${Username.value}/${hours.value}/${min.value}/${amPm.value}`)
    .then(response => response.text())
    .then(data => {
        result.textContent = Username.value + " woke up at " + hours.value + ":" + min.value + amPm.value;
    });
}