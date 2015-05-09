wsUI.history.startHistory();
var proceed = function() {
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
            url: "https://peakapi.whitespell.com/users/", // load from json later
            method: "post",
            payLoad: {
                "username" : username,
                "password" : password,
                "email" : email
            },
            payLoadType: "json"
        }
    }, function (data) {

        document.getElementById("createAccount").innerHTML = '<i class="fa fa-user-plus"></i><span style="margin-left:10px;">Create Account</span>';

        console.log(data);

        var jsonResponse = JSON.parse(data);

        if(jsonResponse.user_id !== undefined) {

            w$("$username", {
                value: username
            });

            w$("$email", {
                value: email
            });

            w$("$user_id", {
                value: jsonResponse.user_id
            });
            wsUI.layout.deactivateComponent("login");
            wsUI.layout.activateComponent("nav");
            wsUI.layout.activateComponent("suggestions");
        } else {
                    DOM.transform(document.getElementById("error"), "display", "block");
                    document.getElementById("error").innerHTML = jsonResponse.errorMessage;
        }




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