// selecting div 
let dayDiv =  document.querySelector(".day h1");
let hourDiv = document.querySelector(".hr h1");
let minuteDiv = document.querySelector(".min h1");
let secondDiv = document.querySelector(".sec h1");
let h3Text=document.querySelector("h3");
setInterval(function(){
//current time
let now= new Date().getTime();
//target time
let targetDate=new Date("December 31, 2022 23:59:59 ");
let difference = targetDate-now;
//calculations
let day= Math.floor(difference/(1000*60*60*24));
let hour= Math.floor((difference%(1000*60*60*24))/(1000*60*60*24));
let minutes=Math.floor((difference%(1000*60*60))/(1000*60));
let seconds = Math.floor((difference%(1000*60))/1000);
secondDiv.innerText=seconds;
minuteDiv.innerText=minutes;
hourDiv.innerText=hour;
dayDiv.innerText=day;
},10)
// current time
// let currentDate= new Date();
// let currentSeconds=currentDate.getSeconds();
// let currentMins=currentDate.getMinutes();
// let currentHour=currentDate.getHours();
// let currentDay=currentDate.getDay();
// let currentMonth= currentDate.getMonth();
// let currentYear=currentDate.getFullYear();
// let countDownSeconds=Math.floor(((targetDate.getSeconds-currentSeconds)%1000*60)/1000);
// secondDiv.innerText=countDownSeconds;
// let countDownMinutes=Math.floor(targetDate.getMinutes-currentMins);
// minuteDiv.innerText=Math.floor(countDownMinutes);
// let countDownHours=Math.floor(targetDate.getHours-currentHour);
// hourDiv.innerText=countDownHours;
// let countDownDays=Math.floor(targetDate.getDay-currentDay);
// dayDiv.innerText=countDownDays;
// console.log(countDownSeconds)