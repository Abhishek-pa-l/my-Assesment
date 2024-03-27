sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState"
],
function (Controller, JSONModel, ValueState) {
    "use strict";

    return Controller.extend("com.sap.myassesments.controller.View1", {
        onInit: function () {
            let data = [
                {
                    "AssesmentTitle": "Title1",
                    "AssesmentType": "Simple pre-qualification",
                    "ExpireOn": "1/12/2024",
                    "Status": "pending",
                },
                {
                    "AssesmentTitle": "Title2",
                    "AssesmentType": "EDD",
                    "ExpireOn": "1/12/2024",
                    "Status": "complete",
                },
                {
                    "AssesmentTitle": "Title3",
                    "AssesmentType": "Integrity Assessment",
                    "ExpireOn": "1/12/2024",
                    "Status": "pending",
                }, 
            ];

            let jModel = new JSONModel(data);
            this.getView().setModel(jModel, "jModel");
        },

        onTakeAction: function() {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },
        getStatusState: function (sStatus) {
            return sStatus === "pending" ? "Error" : "Success";
        },
       
    });
});
