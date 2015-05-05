var currentButtonPressed = "homeButton";

DOM.transform(document.getElementById(currentButtonPressed), "background", "#212121");

var buttonEffect = function(toggle) {
    DOM.transform(document.getElementById(currentButtonPressed), "background", "none");
    currentButtonPressed = toggle;
    DOM.transform(document.getElementById(currentButtonPressed), "background", "#212121");
}
var gestures = {

    unique: { // ids

        "homeButton" : {
            touch: function(el) {
                DOM.transform(el,"opacity", "0.3");
            },
            release: function(el) {
                wsUI.layout.updatePage({
                    components: ["home"],
                    updates: ["home"]
                }, true);
                buttonEffect(el.getAttribute("id"));
                DOM.transform(el,"opacity", "1");
            },
            after: function(el) {
                DOM.transform(el,"opacity", "1");
            },
            cancel: function(el) {
                DOM.transform(el,"opacity", "1");
            }
        },
        "trendingButton" : {
            touch: function(el) {
                DOM.transform(el,"opacity", "0.3");
            },
            release: function(el) {

                wsUI.layout.updatePage({
                    components: ["home"],
                    updates: ["home->trending"]
                }, true);
                buttonEffect(el.getAttribute("id"));

                DOM.transform(el,"opacity", "1");
            },
            after: function(el) {
                DOM.transform(el,"opacity", "1");
            },
            cancel: function(el) {
                DOM.transform(el,"opacity", "1");
            }
        },
        "logoutButton" : {
            touch: function(el) {
                DOM.transform(el,"opacity", "0.3");
            },
            release: function(el) {

                window.location.reload();

                buttonEffect(el.getAttribute("id"));

                DOM.transform(el,"opacity", "1");
            },
            after: function(el) {
                DOM.transform(el,"opacity", "1");
            },
            cancel: function(el) {
                DOM.transform(el,"opacity", "1");
            }
        }/*,
        "uploadButton" : {
            touch: function(el) {
                DOM.transform(el,"opacity", "0.3");
            },
            release: function(el) {

                wsUI.layout.updatePage({
                    components: ["home"],
                    updates: ["home->upload"]
                }, true);

                DOM.transform(el,"opacity", "1");
            },
            after: function(el) {
                DOM.transform(el,"opacity", "1");
            },
            cancel: function(el) {
                DOM.transform(el,"opacity", "1");
            }
        }*/,
        "searchButton" : {
            touch: function(el) {
                DOM.transform(el,"opacity", "0.3");
            },
            release: function(el) {

                wsUI.layout.updatePage({
                    components: ["home"],
                    updates: ["home->search"]
                }, true);
                buttonEffect(el.getAttribute("id"));

                DOM.transform(el,"opacity", "1");
            },
            after: function(el) {
                DOM.transform(el,"opacity", "1");
            },
            cancel: function(el) {
                DOM.transform(el,"opacity", "1");
            }
        },
        "profileButton" : {
            touch: function(el) {
                DOM.transform(el,"opacity", "0.3");
            },
            release: function(el) {

                wsUI.layout.updatePage({
                    components: ["home"],
                    updates: ["home->profile"]
                }, true);
                buttonEffect(el.getAttribute("id"));

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