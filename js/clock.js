(function(){ 
    console.info("Hello JS"); 
})();

var myNode = document.createElement('div');
document.getElementById('digitalClock').appendChild(myNode);
myNode.innerHTML = "Welcome";



var checkForLeadingZeros = function (timeVal){
    if (timeVal<10){
        timeVal = "0"+timeVal;
    }
    return timeVal;
}

var updateTime = function(){
    var myDate = new Date();
    var myHours = checkForLeadingZeros(myDate.getHours());
    var myMins = checkForLeadingZeros(myDate.getMinutes());
    var mySeconds = checkForLeadingZeros(myDate.getSeconds());
    var myTimeDisplay = (myHours + ":"+ myMins +":"+ mySeconds);
    myNode.innerHTML = myTimeDisplay;
    console.info('tick tock');
    var rotSeconds = (mySeconds*6)-90;
    var rotMins = (myMins*6)-90;
    var rotHours = (myHours %12 + myMins/60)*30 -90;
    document.getElementById('minHand').style.transform = 'rotate('+rotMins+'deg)';
    document.getElementById('secondHand').style.transform = 'rotate('+rotSeconds+'deg)';
    document.getElementById('hrHand').style.transform = 'rotate('+rotHours+'deg)';
}


setInterval(updateTime,1000);

document.getElementById('hrHand').style.backgroundColor = '#0f0';
