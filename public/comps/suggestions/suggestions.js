var categoryToggles;

var toggleCard = function (id) {
    var toggled = categoryToggles[id];
    var success = document.getElementById("categoryDetails-" + id);
    if (toggled !== true) {
        categoryToggles[id] = true;
        success.className = "animated fadeIn"; // fade it in
        DOM.transform(success, "display", "block");
        DOM.transform(document.getElementById("profilePicture-"+id), "border", "#2e88bf");
        DOM.transform(document.getElementById("followButton-"+id), "color", "#FFFFFF");
        document.getElementById("followButton-"+id).innerHTML = '<i class="fa fa-user-times"></i> Unfollow';
    } else {
        categoryToggles[id] = false;
        document.getElementById("followButton-"+id).innerHTML = '<i class="fa fa-user-plus"></i> Follow';
        DOM.transform(document.getElementById("profilePicture-"+id), "border", "none");
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

                wsUI.layout.updatePage({
                    components: ["suggestions"],
                    updates: ["suggestions->profiles"]
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
        "categoryImage": {

            touch: function (el) {
            },

            release: function (el) {
                toggleCard(el.getAttribute("data-id"));

            },
            cancel: function (el) {
            },
            after: function (el) {
                // prevent it from setting off the default after, which sets opacity to 1.
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
    }
}

wsUI.ui.addGestures("{{componentName}}", gestures);


if (!wsUI.d.isset("$categories")) {

    wsUI.workers.assign("Cors", {
        task: "request",
        params: {
            url: "{@this}/json/categories.json", // load from json later
            parseData: {}
        }
    }, function (data) {
        data = wsUI.parseUrl(data);
        var categories = JSON.parse(data);
        categoryToggles = new Array(categories.length);
        for (var category in categories) {
            w$("$categories", categories[category], categories[category].id, {
                "ref": "id"
            });
        }

    });
} else {

}