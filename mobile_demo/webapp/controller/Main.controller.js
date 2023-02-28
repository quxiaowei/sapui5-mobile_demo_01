sap.ui.define([
    "mobiledemo/controller/BaseController",
    "sap/ui/core/Fragment",
], function (Controller, Fragment){

    "use strict";
    return Controller.extend("mobiledemo.controller.Main", {
        onInit: function(){ 
            var deviceModel = this.getModel("device");
            var isPhone = deviceModel.getProperty("/system/phone"); //true false
            this.fragmentName = isPhone ? "mobiledemo.fragment.SubMainVBoxLayout" : "mobiledemo.fragment.SubMainGridLayout";
            this.loadFragment({name:this.fragmentName}).then(function(myFragment){
                this.fragment = myFragment;
                var oView = this.byId("subArea");
                // oView.bindAggregation( "items", { path: "/", factory: fragmentFactory } );
                oView.addAggregation("items", this.fragment)
            }.bind(this));
        },

        onBeforeRendering: function(){
            // var oView = this.getView().byId("subArea");

            // alert(1);

            // // if(!isPhone) { //window.outerWidth > 500){
            // Fragment.load({
            //     name: this.fragmentName,
            //     controller: this
            // }).then(function(oFragment) {
            //     oView.bindAggregation( "items", { path: "/", factory: function(){return oFragment;} } );
            // });
        },

        onExit: function(){},

        onPressDispatch: function(oEvent){
            // alert(1);
            this.getRouter().navTo("dispatch");
        }
    });
});
