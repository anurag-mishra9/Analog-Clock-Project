const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const Timezone = document.querySelector(".timezone");
const Time = document.querySelector(".time");


let date = new Date();

Timezone.innerHTML = "Current TimeZone : Asia/Kuala_Lumpur";
Timezone.classList.add("main");
Time.innerHTML = "Current Time is "+ date.toLocaleString() +"";
Time.classList.add("main");

fetch ('https://worldtimeapi.org/api/timezone')
.then((response)=>{
console.log(response);
return response.json();
})
.then((data)=>{
    var opt = null;
    var sel = document.getElementById("country");
    for(i = 0; i<data.length; i++) {
        opt = document.createElement('option');
        opt.value = data[i];
        opt.innerHTML = data[i];
        sel.appendChild(opt);
    }

})

function changeTimezone() {
  var timezone = document.querySelector('#country');
  var output = timezone.value;
  var newdate = new Date().toLocaleString("en-US", {timeZone: output});
  date = new Date(newdate);
  console.log('AEST time: '+ (new Date(date)).toLocaleString())
  Timezone.innerHTML = "Current TimeZone : "+output+"";
  Timezone.classList.add("main");
  Time.innerHTML = "Current Time is "+ date.toLocaleString() +"";
  Time.classList.add("main");

}

function runTheClock(){


let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log(" Hour "+hr+" Minute "+min+" Second "+sec)

let hrposition = (hr*360/12)+(min*(360/60)/12) ;
let minposition = (min*360/60)+(sec*(360/60)/60) ;
let secposition = sec*360/60 ;


HOURHAND.style.transform = "rotate(" + hrposition +"deg)";
MINUTEHAND.style.transform = "rotate(" + minposition +"deg)";
SECONDHAND.style.transform = "rotate(" + secposition +"deg)";
}

var interval = setInterval(runTheClock,1000);
