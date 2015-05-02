


console.log("login loaded");
var fakeProceed = function() {
    window.setTimeout(function() {
        wsUI.layout.deactivateComponent("login");
        wsUI.layout.activateComponent("nav");
        wsUI.layout.activateComponent("suggestions");
        wsUI.history.startHistory();
    }, 500);
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
        "lostPassword" : {
            release: function(el) {
                wsUI.layout.toggleVisibility(document.getElementById("logInForm"));
                wsUI.layout.toggleVisibility(document.getElementById("lostPasswordForm"));
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
                wsUI.layout.toggleVisibility(document.getElementById("logInForm"));
                wsUI.layout.toggleVisibility(document.getElementById(el.getAttribute("data-parent")));
            }
        }
    }
}

wsUI.ui.addGestures("{{componentName}}", gestures);