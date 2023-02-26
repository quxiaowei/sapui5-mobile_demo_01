sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"
], function(Controller, History, UIComponent) {

    "use strict";
    return Controller.extend("mobiledemo.controller.BaseController", {
        getRouter: function(){
            return UIComponent.getRouterFor(this)
        },

        getModel: function(modelName){
            return this.getOwnerComponent().getModel(modelName);
        },

        onNavBack: function(){
            var oHistory, sPreviousHash;

            oHistory = History.getInstance();
            sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getRouter().navTo("home", {}, true /*no history*/);
            }
        }
    });
});