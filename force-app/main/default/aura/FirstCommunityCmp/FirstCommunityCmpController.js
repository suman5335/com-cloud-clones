({
    doInit : function(component, event, helper) {
        var action = component.get("c.getCurrentUser");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.userDetails", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})