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

        onHome: function(){
			    UIComponent.getRouterFor(this).navTo("home");
        },

        onDetail: function(){
			    UIComponent.getRouterFor(this).navTo("detail");
        },
      });
    }
  );
  