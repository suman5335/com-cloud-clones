({
    //thi is for featured story
   doInit: function(component, event, helper) {
      // this function call on the component load first time     
      // get the page Number if it's not define, take 1 as default
      var page = component.get("v.page") || 1;
      // get the select option (drop-down) values.   
      var recordToDisply = component.find("recordSize").get("v.value");
      // call the helper function   
      helper.getFeaturedStory(component, page, recordToDisply);
 
   },
   navigate: function(component, event, helper) {
      // this function call on click on the previous page button  
      var page = component.get("v.page") || 1;
      // get the previous button label  
      var direction = event.getSource().get("v.label");
      // get the select option (drop-down) values.  
      var recordToDisply = component.find("recordSize").get("v.value");
      // set the current page,(using ternary operator.)  
      page = direction === "Previous " ? (page - 1) : (page + 1);
      // call the helper function
      helper.getFeaturedStory(component, page, recordToDisply);
   },
    //this is for top alerts 
   goInit: function(component, event, helper) {
      // this function call on the component load first time     
      // get the page Number if it's not define, take 1 as default
      var page1 = component.get("v.page1") || 1;
      // get the select option (drop-down) values.   
      var recordToDisply1 = component.find("recordSize1").get("v.value1");
      // call the helper function   
      helper.getAlerts(component, page1, recordToDisply1);
 
   },
   navigate1: function(component, event, helper) {
      // this function call on click on the previous page button  
      var page1 = component.get("v.page1") || 1;
      // get the previous button label  
      var direction = event.getSource().get("v.label1");
      // get the select option (drop-down) values.  
      var recordToDisply1 = component.find("recordSize1").get("v.value1");
      // set the current page,(using ternary operator.)  
      page1 = direction === "Previous1 " ? (page1 - 1) : (page1 + 1);
      // call the helper function
      helper.getAlerts(component, page1, recordToDisply1);
   },
    //this is for notification
   toInit: function(component, event, helper) {
      // this function call on the component load first time     
      // get the page Number if it's not define, take 1 as default
      var page2 = component.get("v.page2") || 1;
      // get the select option (drop-down) values.   
      var recordToDisply2 = component.find("recordSize2").get("v.value2");
      // call the helper function   
      helper.getNotify(component, page2, recordToDisply2);
 
   },
   navigate2: function(component, event, helper) {
      // this function call on click on the previous page button  
      var page2 = component.get("v.page2") || 1;
      // get the previous button label  
      var direction = event.getSource().get("v.label2");
      // get the select option (drop-down) values.  
      var recordToDisply2 = component.find("recordSize2").get("v.value2");
      // set the current page,(using ternary operator.)  
      page2 = direction === "Previous2" ? (page2 - 1) : (page2 + 1);
      // call the helper function
      helper.getNotify(component, page2, recordToDisply2);
   }
})