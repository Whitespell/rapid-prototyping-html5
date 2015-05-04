var gestures = {


    unique: { // ids
    },

    collective: { //classes

        "optbutton": {
            release: function(el) {
                window.location.reload();
            }
        }


    }
}

wsUI.ui.addGestures("{{componentName}}", gestures);