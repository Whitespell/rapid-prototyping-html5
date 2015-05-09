wsUI.history.startHistory();
var fakeProceed = function() {
    window.setTimeout(function() {
        wsUI.layout.deactivateComponent("login");
        wsUI.layout.activateComponent("nav");
        wsUI.layout.activateComponent("home");
    }, 500);
}

var attemptLogin = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    wsUI.workers.assign("Cors", {
        task: "request",
        params: {
            url: "https://peakapi.whitespell.com/authentication/", // load from json later
            method: "post",
            payLoad: {
                "username" : username,
                "password" : password
            },
            payLoadType: "json"
        }
    }, function (data) {

        document.getElementById("logIn").innerHTML = '<i class="fa fa-arrow-right"></i> Log In';

        var jsonResponse = JSON.parse(data);

        console.log(data);

        if(jsonResponse.key !== undefined) {

            w$("$username", {
                value: username
            });

            w$("$user_id", {
                value: jsonResponse.user_id
            });
            wsUI.layout.deactivateComponent("login");
            wsUI.layout.activateComponent("nav");
            wsUI.layout.activateComponent("home");
            wsUI.layout.activateComponent("bottombar");
        } else {
            DOM.transform(document.getElementById("loginError"), "display", "block");
            document.getElementById("loginError").innerHTML = jsonResponse.errorMessage;
        }

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
                attemptLogin();
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