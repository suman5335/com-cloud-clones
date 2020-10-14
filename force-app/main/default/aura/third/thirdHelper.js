({
   getFeaturedStory: function(component, page, recordToDisply) {
      // create a server side action. 
      var action = component.get("c.fetchFeaturedStory");
      // set the parameters to method 
      action.setParams({
         "pageNumber": page,
         "recordToDisply": recordToDisply
      });
      // set a call back   
      action.setCallback(this, function(a) {
         // store the response return value (wrapper class insatance)  
         var result = a.getReturnValue();
         console.log('result ---->' + JSON.stringify(result));
         // set the component attributes value with wrapper class properties.   
 
         component.set("v.Fs", result.featuredStory);
         component.set("v.page", result.page);
         component.set("v.total", result.total);
         component.set("v.pages", Math.ceil(result.total / recordToDisply));
 
      });
      // enqueue the action 
      $A.enqueueAction(action);
   },
    //this is for top alerts 
   getAlerts: function(component, page1, recordToDisply1) {
 
      // create a server side action. 
      var action = component.get("c.fetchAlert");
      // set the parameters to method 
      action.setParams({
         "pageNumber1": page1,
         "recordToDisply1": recordToDisply1
      });
      // set a call back   
      action.setCallback(this, function(a) {
         // store the response return value (wrapper class insatance)  
         var result = a.getReturnValue();
         console.log('result ---->' + JSON.stringify(result));
         // set the component attributes value with wrapper class properties.   
 
         component.set("v.Ta", result.alert);
         component.set("v.page1", result.page1);
         component.set("v.total1", result.total1);
         component.set("v.pages1", Math.ceil(result.total1 / recordToDisply1));
 
      });
      // enqueue the action 
      $A.enqueueAction(action);
   },
    //for notification
   getNotify: function(component, page2, recordToDisply2) {
 
      // create a server side action. 
      var action = component.get("c.fetchNotification");
      // set the parameters to method 
      action.setParams({
         "pageNumber2": page2,
         "recordToDisply2": recordToDisply2
      });
      // set a call back   
      action.setCallback(this, function(a) {
         // store the response return value (wrapper class insatance)  
         var result = a.getReturnValue();
         console.log('result ---->' + JSON.stringify(result));
         // set the component attributes value with wrapper class properties.   
 
         component.set("v.Alerts2", result.alert);
         component.set("v.page2", result.page);
         component.set("v.total2", result.total);
         component.set("v.pages2", Math.ceil(result.total2 / recordToDisply2));
 
      });
      // enqueue the action 
      $A.enqueueAction(action);
   }
})