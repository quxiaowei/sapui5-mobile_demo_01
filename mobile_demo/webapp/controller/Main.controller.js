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
                var deviceModel = this.getOwnerComponent().getModel("device");
    
                var os = deviceModel.getProperty("/os/name") //win mac linux iOS Android
                var supportTouch = deviceModel.getProperty("/support/touch") //true false
                var isDesktop = deviceModel.getProperty("/system/desktop") //true false
                var isPhone = deviceModel.getProperty("/system/phone") //true false
                var isTablet = deviceModel.getProperty("/system/tablet") //true false

                var oView = this.getView().byId("subArea");
                if(!isPhone){ //window.outerWidth > 500){
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
