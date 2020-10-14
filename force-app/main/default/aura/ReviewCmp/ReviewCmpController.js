({
	doInit : function(component, event, helper) {
        var lWidth = window.innerWidth ;//Get the window's width
        //The setInterval() method calls a function or 
        //evaluates an expression at specified intervals (in milliseconds).
        window.setInterval($A.getCallback(function() { 
            helper.shiftDiv(component, event,lWidth);
        } ), 10);
        	
    },
    getStory: function(component, event, helper) {
         var lWidth = window.innerWidth ;//Get the window's width
        //The setInterval() method calls a function or 
        //evaluates an expression at specified intervals (in milliseconds).
        window.setInterval($A.getCallback(function() { 
            helper.shiftDiv(component, event,lWidth);
        } ), 100);
		var action = component.get("c.getAllTopStories");//getAllTopStories
   action.setCallback(this, function(response) {
     var name = response.getState();
     if (name === "SUCCESS") {
       console.log("Output");  
       console.log(response.getReturnValue());  
       component.set("v.story", response.getReturnValue());
     }  
   });
   $A.enqueueAction(action);
	}
})