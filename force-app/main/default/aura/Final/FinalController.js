({
 getrecords: function(component, event, helper) {
   var action = component.get("c.getAllrecords");
   action.setCallback(this, function(response) {
     var name = response.getState();
     if (name === "SUCCESS") {
       component.set("v.reg",response.getReturnValue());
     }
   });
   $A.enqueueAction(action);
 },
 getAllStories: function(component, event, helper) {
   var action = component.get("c.getAllTopStories");
   action.setCallback(this, function(response) {
     var name = response.getState();
     if (name === "SUCCESS") {
       component.set("v.regs", response.getReturnValue());
     }
   });
   $A.enqueueAction(action);
 },
   getAllNotifications: function(component, event, helper) {
     var action = component.get("c.getNotifications");
     action.setCallback(this, function(response) {
       var name = response.getState();
       if (name === "SUCCESS") {
         component.set("v.rega", response.getReturnValue());
       }
     });
     $A.enqueueAction(action);
}
});