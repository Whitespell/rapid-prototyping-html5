var goToHome = function(el) {
    wsUI.layout.deactivateComponent("suggestions");
    wsUI.layout.activateComponent("home");
    wsUI.layout.activateComponent("bottombar");
    wsUI.layout.toggleVisibility(document.getElementById("notificationButton"));
    wsUI.layout.toggleVisibility(document.getElementById("downloadButton"));
}

var followToggles;

var toggleFollow = function (id) {
    console.log(id);
    var toggled = followToggles[id];
    if (toggled !== true) {
        followToggles[id] = true;
        DOM.transform(document.getElementById("followButton-"+id), "background", "#2e88bf");
        DOM.transform(document.getElementById("followButton-"+id), "color", "#FFFFFF");
        DOM.transform(document.getElementById("profilePicture-"+id), "border", "3px solid #2e88bf");
        document.getElementById("followButton-"+id).innerHTML = '<i class="fa fa-user-times"></i> Unfollow';
    } else {
        followToggles[id] = false;
        DOM.transform(document.getElementById("profilePicture-"+id), "border", "none");
        document.getElementById("followButton-"+id).innerHTML = '<i class="fa fa-flash"></i> Follow';
        DOM.transform(document.getElementById("followButton-"+id), "color", "#212121");
        DOM.transform(document.getElementById("followButton-"+id), "background", "none");
    }
}

var gestures = {

    unique: { // ids

        "nextButton" : {
            touch: function(el) {
                DOM.transform(el,"opacity", "0.3");
            },
            release: function(el) {
                goToHome();
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

        "profile": {
            touch: function (el) {
                DOM.transform(el, "opacity", "0.3");
            },
            release: function (el) {
                toggleFollow(el.getAttribute("data-id"));
            },
            after: function(el) {
                DOM.transform(el, "opacity", "1");
            },
            cancel: function(el) {
                DOM.transform(el, "opacity", "1");
            }
        },
        "followButton": {
        touch: function (el) {
            DOM.transform(el, "opacity", "0.3");
        },
        release: function (el) {
            toggleFollow(el.getAttribute("data-id"));
        },
        after: function(el) {
            DOM.transform(el, "opacity", "1");
        },
        cancel: function(el) {
            DOM.transform(el, "opacity", "1");
        }
    },
    "moreButton": {
        touch: function (el) {
            DOM.transform(el, "opacity", "0.3");
        },
        release: function (el) {
           alert("More info");
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


    wsUI.workers.assign("Cors", {
        task: "request",
        params: {
            url: "{@this}/json/profiles.json", // load from json later
            parseData: {}
        }
    }, function (data) {
        console.log(data);
        data = wsUI.parseUrl(data);
        var profiles = JSON.parse(data);
        followToggles = new Array(profiles.length);
        for (var profile in profiles) {
            w$("$profiles", profiles[profile], profiles[profile].id, {
                "ref": "id"
            });
        }

    });
