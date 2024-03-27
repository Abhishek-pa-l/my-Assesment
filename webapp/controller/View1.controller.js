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
                    "Status": "Pending",
                },
                {
                    "AssesmentTitle": "Title2",
                    "AssesmentType": "EDD",
                    "ExpireOn": "1/12/2024",
                    "Status": "Complete",
                },
                {
                    "AssesmentTitle": "Title3",
                    "AssesmentType": "Integrity Assessment",
                    "ExpireOn": "1/12/2024",
                    "Status": "Pending",
                }, 
            ];

            let jModel = new JSONModel(data);
            this.getView().setModel(jModel, "jModel");
        },

        onTakeAction: function(oEvent) {
            debugger
            var oSelectedItem = oEvent.getSource().getParent().getBindingContext("jModel").getObject();
            var sAssessmentType = oSelectedItem.AssesmentType;
            this.getOwnerComponent().getRouter().navTo("RouteView2", {
                value1: sAssessmentType
            });
        },
        getStatusState: function (sStatus) {
            return sStatus === "Pending" ? "Error" : "Success";
        },
       
    });
});
