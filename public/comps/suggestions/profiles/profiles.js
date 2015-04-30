var categoryToggles;

var toggleCard = function (id) {
    var toggled = categoryToggles[id];
    var success = document.getElementById("categoryDetails-" + id);
    if (toggled !== true) {
        categoryToggles[id] = true;
        success.className = "animated fadeIn"; // fade it in
        DOM.transform(success, "display", "block");
        DOM.transform(document.getElementById("followButton-"+id), "background", "#2e88bf");
        DOM.transform(document.getElementById("followButton-"+id), "color", "#FFFFFF");
        document.getElementById("followButton-"+id).innerHTML = '<i class="fa fa-user-times"></i> Unfollow';
    } else {
        categoryToggles[id] = false;
        document.getElementById("followButton-"+id).innerHTML = '<i class="fa fa-user-plus"></i> Follow';
        DOM.transform(document.getElementById("followButton-"+id), "color", "#212121");
        DOM.transform(document.getElementById("followButton-"+id), "background", "none");
        success.className = "animated fadeOut"; // fade it out
    }
}

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
        },

        "followButton": {
            touch: function (el) {
                DOM.transform(el, "opacity", "0.3");
            },
            release: function (el) {
                toggleCard(el.getAttribute("data-id"));
            },
            after: function(el) {
                DOM.transform(el, "opacity", "1");
            },
            cancel: function(el) {
                DOM.transform(el, "opacity", "1");
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
