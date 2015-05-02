var gesture = {

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
                    wsUI.layout.toggleVisibility(document.getElementById("logInForm"));
                    wsUI.layout.toggleVisibility(document.getElementById(el.getAttribute("data-parent")));
                }
            }
        }
};

