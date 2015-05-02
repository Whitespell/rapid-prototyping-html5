wsUI.history.startHistory();
var fakeProceed = function() {
    window.setTimeout(function() {
        wsUI.layout.deactivateComponent("login");
        wsUI.layout.activateComponent("nav");
        wsUI.layout.activateComponent("suggestions");
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