sap.ui.define([
    "mobiledemo/controller/BaseController"
], function(Controller) {
    
    "use strict";
    return Controller.extend("mobiledemo.controller.Dispatch", {
        onInit: function(){
            var deviceModel = this.getModel("device");
            var isPhone = deviceModel.getProperty("/system/phone"); //true false

            this.rows = [{ }];
            this.model = new sap.ui.model.json.JSONModel();
            this.model.setData({modelData: this.rows});

            // alert("onInit");

            this.fragmentName = isPhone? "mobiledemo.fragment.SubDispatchTripView" : "mobiledemo.fragment.SubDispatchTableView";

            this.loadFragment({name: this.fragmentName}).then(function(myFragment){
                
                // alert("onLoadFragment");

                this.fragment = myFragment;
                var oView = this.byId("subArea");
                oView.addAggregation("items", this.fragment);
                // if(!isPhone){
                //     var oTable = this.byId("dispatchDetailTable");
                //     if(oTable){
                //         oTable.setModel(this.model).bindRows({path: "/modelData", templateShareable: false});
                //     }
                // }
            }.bind(this));
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