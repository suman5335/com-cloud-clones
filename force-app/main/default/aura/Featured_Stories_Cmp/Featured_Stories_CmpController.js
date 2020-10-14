({
                doInit : function(component, event, helper) {
                var action = component.get("c.getAllrecords");
                action.setCallback(this, function(response){
                    var name = response.getState();
                    if (name === "SUCCESS") {
                        component.set("v.reg", response.getReturnValue());
                    }
                });
                $A.enqueueAction(action);
            }
        })