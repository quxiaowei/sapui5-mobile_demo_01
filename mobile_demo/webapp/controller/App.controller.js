sap.ui.define([
    "mobiledemo/controller/BaseController"
], function(Controller) {
    "use strict";
    return Controller.extend("mobiledemo.controller.controller.App", {
        onInit: function(){ },

        /**
         * @override
         */
        onBeforeRendering: function() {
            // BaseController.prototype.onBeforeRendering.apply(this, arguments);
            var deviceModel = this.getModel("device");
            var isPhone = deviceModel.getProperty("/system/phone"); //true false

            if(!isPhone){
                var oFixFlex = this.getView().byId("pageContaner");
                oFixFlex.setVertical(false);
                oFixFlex.setFixFirst(true);

                var oButtonBar = this.getView().byId("bButtonBar");
                oButtonBar.setGridTemplateColumns("1fr")
            }
        },

        onHome: function(){
            this.getRouter().navTo("home");
        },

        onDetail: function(){
            this.getRouter().navTo("detail");
        },

        onDetailOne: function(){
            this.getRouter().navTo("detail1");
        },

        onDetailTwo: function(){
            this.getRouter().navTo("detail2");
        }
    });
});
  