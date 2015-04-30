var gestures = {


    unique: { // ids

    },

    collective: { //classes

        "optbutton": {
            release: function(el) {
                wsUI.layout.updatePage({
                    components: ["home"],
                    updates: ["home"]
                }, true);
            }
        }


    }
}

wsUI.ui.addGestures("{{componentName}}", gestures);