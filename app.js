var showHrs = document.getElementById('showHrs')
var showMin = document.getElementById('showMin')
var showSec = document.getElementById('showSec')
var timer;
function startTimer(){
    timer = setInterval(function timer(){
        showSec.value--;
        if(showSec.value == 1 && showMin.value > 0 && showHrs.value > 0){
            showMin.value--;
            showSec.value = 60;
            if(showMin.value == 1 && showHrs.value > 0){
                showHrs.value--;
                showMin.value = 60
            }
        }
    },1000)


}
function stopTimer(){
    clearInterval(timer)
}
function resetTimer(){
    clearInterval(timer)
    showHrs.value = 00;
    showMin.value = 00;
    showSec.value = 00;
}