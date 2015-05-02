var followToggles;

var toggleFollow = function (id) {
    console.log(id);
    var toggled = followToggles[id];
    if (toggled !== true) {
        followToggles[id] = true;
        DOM.transform(document.getElementById("followButton-"+id), "background", "#2e88bf");
        DOM.transform(document.getElementById("followButton-"+id), "color", "#FFFFFF");
        document.getElementById("followButton-"+id).innerHTML = '<i class="fa fa-user-times"></i> Unfollow';
    } else {
        followToggles[id] = false;
        document.getElementById("followButton-"+id).innerHTML = '<i class="fa fa-flash"></i> Follow';
        DOM.transform(document.getElementById("followButton-"+id), "color", "#212121");
        DOM.transform(document.getElementById("followButton-"+id), "background", "none");
    }
}

var gestures = {

    unique: { // ids

    },

    collective: { //classes

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
