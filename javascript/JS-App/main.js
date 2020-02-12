
const fun=()=> {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    setTimeout(fun, 1000);
    if(minutes<10){
        var minutes = '0'+minutes;
    }
    if(seconds<10){
        var seconds = '0'+seconds;
    }
    document.getElementById('txt').innerHTML =
    hours + ":" + minutes + ":" + seconds;
  }
  

const showmessage=()=>
{
// Can be any modal
window.alert('Time Up');
console.log('Session Ended')
}
timer=document.getElementById("timer")
f=document.getElementById("form")
f.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log('Session Started')
setTimeout(showmessage,parseInt(timer.value)*60000)
})