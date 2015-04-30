var gestures = {


    unique: { // ids

        "searchBar" : {
            touch: function(el) {
                el.focus();
                el.value = "";
            }
        }



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