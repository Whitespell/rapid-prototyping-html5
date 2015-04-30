
var deviceType = "macbook";
deviceType = getDeviceType();


function getDeviceType() {
    var uA = navigator.userAgent;
    var toReturn = "";

    if(uA.indexOf("tablet")) {

    }

   if(navigator.userAgent.match(/iPad/i)){

    }

    if(navigator.userAgent.match(/iPhone/i)){
        //code for iPhone here
        return "mobile";
    }

    if(navigator.userAgent.match(/Android/i)){
        //code for Android here
        return "mobile";
    }


    if(navigator.userAgent.match(/BlackBerry/i)){
        //code for BlackBerry here
    }


    if(navigator.userAgent.match(/webOS/i)){
        //code for webOS here
    }

    return "desktop";//navigator.userAgent;

}

