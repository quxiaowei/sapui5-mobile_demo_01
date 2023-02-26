sap.ui.define([
    "mobiledemo/controller/BaseController"
], function(Controller) {
    
    "use strict";
    return Controller.extend("mobiledemo.controller.Dispatch", {
        onInit: function(){
            var model = new sap.ui.model.json.JSONModel();
            this.rows = [{ }];
            model.setData({modelData: this.rows});
            var oTable = this.byId("dispatchDetailTable")
            oTable.setModel(model).bindRows("/modelData");
        },

        onAddTripTable: function(){
            let oTable = this.byId("dispatchDetailTable");
            this.rows.push({});
            oTable.getModel().refresh();
        },

        onDeleteTripTable: function(oEvent){
            let oTable = this.byId("dispatchDetailTable");
            let row = oEvent.getParameters().row;
            let index = row.getIndex();

            this.rows.splice(index, 1);
            oTable.getModel().refresh();
        }
    });
});