ide = new Ide("blox");

myOwnWs.workerHandler.assign("Cors", {
    task: "request",
    params: {
        url: "http://172.16.1.2:8040/blox",
        method: "post",
        parseData: {
            "task"   : "GetAllBlox"
        }
    }
}, function(data) {
    var appsJson = JSON.parse(data);
    ide.listFiles.apply(ide, [appsJson]);
});


