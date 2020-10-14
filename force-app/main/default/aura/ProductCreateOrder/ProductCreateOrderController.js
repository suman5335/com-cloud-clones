({
    doInit : function(component, event, helper) {
        var pageReference = component.get('v.pageReference');
        if(pageReference){
            var state = pageReference.state;
            component.set('v.ProductId', state.ProductId);
            component.find("recordViewer").reloadRecord();
        }
        component.find("newRecordCreator").getNewRecord(
            "Product_Order__c", 
            null,      
            false,    
            $A.getCallback(function() {
                var rec = component.get("v.newRecordObject");
                var error = component.get("v.newRecordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else {
                    console.log("Record template initialized: " + rec.sobjectType);
                }
            })
        );
    },
    handleSubmit : function(component, event, helper) {
        var ProdRecord = component.get('v.simpleRecord');
        console.log('ProductRecord Price', ProductOrder.Price__c);
        var quantity = component.get('v.ProductOrder.Number_Of_Months__c');
        console.log('num of months ', quantity);
       var totalPrice = parseInt(ProductOrder.Price__c)*parseInt(quantity);
        console.log(' totalPrice ', totalPrice);
        
        var userId = $A.get("$SObjectType.CurrentUser.Id");
        //alert(userId);
        component.set("v.ProductOrder.Product__c", component.get("v.ProductId"));
        component.set("v.ProductOrder.Odered_By__c", AccountId); 
      //  component.set("v.ProductOrder.Order_Amount__c", parseInt(totalPrice));
        component.find("newRecordCreator").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Order Placed",
                    "message": "Your Order has been successfully placed."+saveResult.recordId,
                    "type" : "success"
                });
                resultsToast.fire();
                var pageReference = component.find("navigation");
                var pageReferenceNav = {
                    "type": "standard__component",
                    "attributes": {
                        "componentName": "ProductOrderDetails__c"
                    },
                    state: {
                        "orderId":saveResult.recordId
                    }
                };
                pageReference.navigate(pageReferenceNav); 
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving contact, error: ' + 
                            JSON.stringify(saveResult.error));
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Error While Placing Your Order.",
                    "message": JSON.stringify(saveResult.error),
                    "type" : "success"
                });
                resultsToast.fire();
            } else {
                console.log('Unknown problem, state: ' + saveResult.state +
                            ', error: ' + JSON.stringify(saveResult.error));
            }
        });
    },
})