var gestures = {

    unique : {
        "createAccount": {
            release: function (el) {
                el.innerHTML = '<i class="fa fa-cog fa-spin"></i> Creating account...';
                fakeProceed();
            }
        }
    },

    "collective" : {
        "returnToLogin" : {
            release: function(el) {
                wsUI.layout.updatePage({
                    components: ["login"],
                    updates: ["login"]
                }, true);
            }
        }
        }
};

wsUI.ui.addGestures("{{componentName}}", gestures);