var gestures = {

    unique: { // ids

    },

    collective: { //classes

        "loginButton": {
            release: function (el) {
                wsUI.layout.deactivateComponent("login");
                wsUI.layout.activateComponent("nav");
                wsUI.layout.activateComponent("userhome");
                //wsUI.layout.activateComponent("leftpane");
            }
        }

    }
}

wsUI.ui.addGestures("{{componentName}}", gestures);
wsUI.history.startHistory();