sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sap/ui/model/json/JSONModel",
        "mobiledemo/model/models"
    ],
    function (UIComponent, Device, JSONModel, models) {
        "use strict";

        return UIComponent.extend("mobiledemo.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
	            var oDeviceModel = new JSONModel(Device);
                
                this.setModel(oDeviceModel, "device");
            }
        });
    }
);