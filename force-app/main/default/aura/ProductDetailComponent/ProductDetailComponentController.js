({
    doSubscribe :  function(component, event, helper) {
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
            "url": 'skyline-productpage2' ,
            "isredirect":true ,
        });
        urlEvent.fire();
    },
      //  pageReference.navigate(pageReferenceNav); 
})