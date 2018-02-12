
function userProgress(time){
    var start = 0;
    var styleProgress = document.getElementById('user-progress');
    styleProgress.style.cssText = "background-color:red;\
    width: 30%;\
    height: 30px;\
    margin-left:30%;\
    margin-top:20%;\
    ";
    var progressElement = document.getElementById('user-progress');
    var progressNum = document.getElementById('progress-num');
    var styleProgressNum = document.getElementById('progress-num');
    styleProgressNum.style.cssText = "font-size:2rem;\
        color:blue;\
    ";
    var intervalId = setInterval(function(){
        if(start >70){
            clearInterval(intervalId)
           // userProgressCallBack();
        }else{
        progressElement.value = start;
        progressNum.innerHTML = start + '%';
       
        }
        start++;
    }, time);
}

userProgress(30);

