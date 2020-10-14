({
    doSearch : function(component, event, helper) {
        var componentEvent = component.getEvent('ProductEvent');
        /*   var searchParma = component.find(component).get('v.searchInput'); */
        var searchParma = component.find('searchInput').get('v.value');
        componentEvent.setParams({
            searchText : searchParma
        });
        componentEvent.fire();
        
    },
    doSearch1 : function(cmp, event) { 
        //Get the event message attribute
        var msg = event.getParam("message"); 
        //Set the handler attributes based on event data 
        cmp.set("v.eventMessage", msg);         
    }
})