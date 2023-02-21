sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent"
    ],
    function(BaseController, UIComponent) {
      "use strict";
  
      return BaseController.extend("mobiledemo.controller.controller.App", {
        onInit() {
          
        },

        /**
         * @override
         */
        onBeforeRendering: function() {
          // BaseController.prototype.onBeforeRendering.apply(this, arguments);
          var deviceModel = this.getOwnerComponent().getModel("device");
          var isPhone = deviceModel.getProperty("/system/phone") //true false
          if(!isPhone){
            var oFixFlex = this.getView().byId("pageContaner");
            oFixFlex.setVertical(false);
            oFixFlex.setFixFirst(true);

            var oButtonBar = this.getView().byId("bButtonBar");
            oButtonBar.setGridTemplateColumns("1fr")
          }
        
        },

        onHome: function(){
			    UIComponent.getRouterFor(this).navTo("home");
        },

        onDetail: function(){
			    UIComponent.getRouterFor(this).navTo("detail");
        },

        onDetailOne: function(){
			    UIComponent.getRouterFor(this).navTo("detail1");
        },

        onDetailTwo: function(){
			    UIComponent.getRouterFor(this).navTo("detail2");
        },
      });
    }
  );
  