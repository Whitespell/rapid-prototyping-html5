var renewApps = function() {myOwnWs.workerHandler.assign("Cors", {
    task: "request",
    params: {
        url: "http://172.16.1.2:8040/blox",
        method: "post",
        parseData: {
            "task"   : "GetApps"

        }
    }
}, function(data) {
    if(typeof myOwnWs.workerHandler["WebSockets"] === 'string') { // only if websockets are not used
        var appsJson = JSON.parse(data); // now done through socket.io :)
        console.log(appsJson);
        for (var update in appsJson.results) {
            var thisUpdate = appsJson.results[update];
            w$("$app", thisUpdate, update, {"ref": "id"});
        }
    }
})};
//window.setInterval(renewApps(), 1000);

var gestures = {

    unique: { // ids

    },

    collective: { //classes

        "item-box": {
            release: function (el) {

                myOwnWs.workerHandler.assign("Cors", {
                    task: "request",
                    params: {
                        url: "http://172.16.1.2:8040/blox",
                        method: "post",
                        parseData: {
                            "task"   : "GetAppDetails",
                            "appId" : el.getAttribute("data-attribute")
                        }
                    }
                }, function(data) {
                        console.log(data);
                        var appsJson = JSON.parse(data);
                        console.log(appsJson);
                        for (var update in appsJson.results) {
                            var thisUpdate = appsJson.results[update];
                            w$("$currentApp", thisUpdate, update, {"ref": "id"});// also could have done on the server side <save>resultJson, 600, $currentApp, id</save>

                    }
                });

                wsUI.layout.deactivateComponent("userhome");
                wsUI.layout.activateComponent("apphome");
                wsUI.layout.activateComponent("leftpane");
                wsUI.layout.updatePage({
                    components: ["apphome"],
                    updates: ["apphome->ide"]
                }, true);
            }
        }

    }
}


wsUI.ui.addGestures("{{componentName}}", gestures);