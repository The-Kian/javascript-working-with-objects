(function(){ 
    console.info("Hello JS"); 
})();

var myNode = document.createElement('div'); //create divider
document.getElementById('digitalClock').appendChild(myNode); //create child in Digital clock div
myNode.innerHTML = "Welcome";



var checkForLeadingZeros = function (timeVal){ //variable to check for and add leading zeros
    if (timeVal<10){    //if value is less than 2 digits
        timeVal = "0"+timeVal; //add a 0 string
    }
    return timeVal;//return string
}

var updateTime = function(){//function to update time
    var myDate = new Date();//store date in mydate
    var myHours = checkForLeadingZeros(myDate.getHours());//take hours from myDate and check for zeros
    var myMins = checkForLeadingZeros(myDate.getMinutes());//take mins from myDate and check for zeros
    var mySeconds = checkForLeadingZeros(myDate.getSeconds());//take secs
    var myTimeDisplay = (myHours + ":"+ myMins +":"+ mySeconds);//display string hrs:mins:secs
    myNode.innerHTML = myTimeDisplay;//display myTimeDisplay in myNode div
    console.info('tick tock');
    var rotSeconds = (mySeconds*6)-90;//angle for second hand
    var rotMins = (myMins*6)-90;//angle for minute hand
    var rotHours = (myHours %12 + myMins/60)*30 -90; //angle for hours hand
    document.getElementById('minHand').style.transform = 'rotate('+rotMins+'deg)';//rotate by allocated angle
    document.getElementById('secondHand').style.transform = 'rotate('+rotSeconds+'deg)';
    document.getElementById('hrHand').style.transform = 'rotate('+rotHours+'deg)';
}


setInterval(updateTime,1000);//run updateTime every second

document.getElementById('hrHand').style.backgroundColor = '#0f0';
