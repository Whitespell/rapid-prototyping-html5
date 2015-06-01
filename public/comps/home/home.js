//wsUI.layout.smartScrollNavigation(document.getElementById("nav"));

wsUI.workers.assign("Cors", {
    task: "request",
    params: {
        url: "http://localhost:8011/heygalo/abcdef", // load from json later
        method: "get",
        payLoadType: "json",
        headerObject : {
            "X-Authentication" : "abcdefgaergar"
        }
    }
}, function (data) {

console.log(data.responsetext);
});
