sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";
        return Controller.extend("mobiledemo.controller.Main", {
            onInit: function () {
                var oView = this.getView().byId("subArea");
                if(window.outerWidth > 500){
                    Fragment.load({
                        name: "mobiledemo.fragment.SubGridLayout"
                    }).then(function(oFragment) {
                        oView.addAggregation("items", oFragment)
                    });
                }else{
                    Fragment.load({
                        name: "mobiledemo.fragment.SubVBoxLayout"
                    }).then(function(oFragment) {
                        oView.addAggregation("items", oFragment)
                    });
                }
            },

            onLoadFragment: function(){
            }
        });
    });
