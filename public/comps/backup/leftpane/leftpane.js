console.log("adding gestuers to leftpane");

var gestures = {

    unique: { // ids

    },

    collective: { //classes

        "open": {
            release: function (el) {
                wsUI.layout.updatePage({
                    components: ["apphome"],
                    updates: ["apphome->"+el.getAttribute("data-attribute")]
                }, true);
            }
        }

    }
}

wsUI.ui.addGestures("{{componentName}}", gestures);