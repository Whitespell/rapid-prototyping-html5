wsUI.history.startHistory();
var fakeProceed = function() {
    window.setTimeout(function() {
        wsUI.layout.deactivateComponent("login");
        wsUI.layout.activateComponent("nav");
        wsUI.layout.activateComponent("suggestions");
    }, 500);
}

var attemptLogin = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    wsUI.workers.assign("Cors", {
        task: "request",
        params: {
            url: "http://localhost:9001/authentication/", // load from json later
            method: "post",
            payLoad: {
                "username" : username,
                "password" : password
            },
            payLoadType: "json"
        }
    }, function (data) {

        console.log(data)

    });
}

var gestures = {

    unique: { // ids

        "signUp" : {
           release: function(el) {
               wsUI.layout.updatePage({
                   components: ["login"],
                   updates: ["login->signup"]
               }, true);
           }
        },
        "logIn" :   {
            release: function(el) {
                el.innerHTML = '<i class="fa fa-cog fa-spin"></i> Logging in....';
                fakeProceed();
            }
        }


    },

    collective: { //classes
        "returnToLogin" : {
            release: function(el) {
                wsUI.layout.updatePage({
                    components: ["login"],
                    updates: ["login"]
                }, true);
            }
        }
    }
}

wsUI.ui.addGestures("{{componentName}}", gestures);