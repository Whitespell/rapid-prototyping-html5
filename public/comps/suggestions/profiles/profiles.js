var gestures = {

    unique: { // ids

        "nextButton" : {
            touch: function(el) {
                DOM.transform(el,"opacity", "0.3");
            },
            release: function(el) {
                el.innerHTML = '<i class="fa fa-cog fa-spin"></i>';

                wsUI.layout.deactivateComponent("suggestions");
                wsUI.layout.activateComponent("home");
                wsUI.layout.activateComponent("bottombar");

                DOM.transform(el,"opacity", "1");
            },
            after: function(el) {
                DOM.transform(el,"opacity", "1");
            },
            cancel: function(el) {
                DOM.transform(el,"opacity", "1");
            }
        },
        "skipButton" : {
            touch: function(el) {
                DOM.transform(el,"opacity", "0.3");
            },
            release: function(el) {
                el.innerHTML = '<i class="fa fa-cog fa-spin"></i>';

                wsUI.layout.deactivateComponent("suggestions");
                wsUI.layout.activateComponent("home");
                wsUI.layout.activateComponent("bottombar");

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
       //todo(pim) add follow and more button functionality
    }
}

wsUI.ui.addGestures("{{componentName}}", gestures);


    wsUI.workers.assign("Cors", {
        task: "request",
        params: {
            url: "{@this}/json/profiles.json", // load from json later
            parseData: {}
        }
    }, function (data) {
        data = wsUI.parseUrl(data);
        var profiles = JSON.parse(data);
        for (var profile in profiles) {
            w$("$profiles", profiles[profile], profiles[profile].id, {
                "ref": "id"
            });
        }

    });
