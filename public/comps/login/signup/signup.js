wsUI.history.startHistory();
var fakeProceed = function() {
    window.setTimeout(function() {
        wsUI.layout.deactivateComponent("login");
        wsUI.layout.activateComponent("nav");
        wsUI.layout.activateComponent("suggestions");
    }, 500);
}

var attemptRegistration = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    wsUI.workers.assign("Cors", {
        task: "request",
        params: {
            url: "http://localhost:9001/users/", // load from json later
            method: "post",
            payLoad: {
                "username" : username,
                "password" : password,
                "email" : email
            }
        }
    }, function (data) {
        console.log(data)

    });
}

var gestures = {

    unique : {
        "createAccount": {
            release: function (el) {
                el.innerHTML = '<i class="fa fa-cog fa-spin"></i> Creating account...';
                attemptRegistration();
            }
        }
    },

    "collective" : {
        "returnToLogin" : {
            release: function(el) {
                wsUI.layout.updatePage({
                    components: ["login"],
                    updates: ["login"]
                }, true);
            }
        }
        }
};

wsUI.ui.addGestures("{{componentName}}", gestures);