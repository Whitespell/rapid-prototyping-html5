var gestures = {

    unique: { // ids

        "home" : {
            touch: function(el) {
                DOM.transform(el,"opacity", "0.3");
            },
            release: function(el) {
                el.innerHTML = '<i class="fa fa-cog fa-spin"></i>';

                wsUI.layout.updatePage({
                    components: ["home"],
                    updates: ["home->main"]
                }, true);

                DOM.transform(el,"opacity", "1");
            },
            after: function(el) {
                DOM.transform(el,"opacity", "1");
            },
            cancel: function(el) {
                DOM.transform(el,"opacity", "1");
            }
        },
        "trending" : {
            touch: function(el) {
                DOM.transform(el,"opacity", "0.3");
            },
            release: function(el) {
                el.innerHTML = '<i class="fa fa-cog fa-spin"></i>';

                wsUI.layout.updatePage({
                    components: ["home"],
                    updates: ["home->trending"]
                }, true);

                DOM.transform(el,"opacity", "1");
            },
            after: function(el) {
                DOM.transform(el,"opacity", "1");
            },
            cancel: function(el) {
                DOM.transform(el,"opacity", "1");
            }
        }

    },

    collective: { //classes
    }
}

wsUI.ui.addGestures("{{componentName}}", gestures);