({
    doInit: function (component, event, helper) {
        // Set the columns of the Table 
        component.set('v.isSending',true);
        component.set('v.columns', [
            {label: 'FEATURED STORIES', fieldName:'Stories__c', type: 'text', sortable : false},
        ]);
            helper.doFetchData(component);
    },
 next: function (component, event, helper) {
    helper.next(component, event);
},
    previous: function (component, event, helper) {
    helper.previous(component, event);
},
})