const clock = document.querySelector('#time')
//const clock = document.getElementById('time')
setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000)