({
    init: function (cmp, event, helper) {
        cmp.set('v.mycolumns', [
            
            { label: 'Product ID', fieldName: 'Name', sortable: true,type: 'text'},
            { label: 'Product Name', fieldName: 'Product_Name__c', sortable: true,type: 'text'},
            { label: 'Rating', fieldName: 'Rating__c',sortable: true,type: 'integer'},
            { label: 'Price ', fieldName: 'Price__c',sortable: true,type: 'currency'}
        ]);
        
    },
    
    updateSelectedText: function (cmp, event) {
        var selectedRows = event.getParam('selectedRows');
        cmp.set('v.selectedRowsCount', selectedRows.length);
    },
    
    Search: function(component, event, helper) {
        var searchField = component.find('searchField');
        var isValueMissing = searchField.get('v.validity').valueMissing;
        // if value is missing show error message and focus on field
        if(isValueMissing) {
            searchField.showHelpMessageIfInvalid();
            
        }else{
            // else call helper function 
            helper.SearchHelper(component, event);
            
        }
    },
    
    onChange: function (cmp, evt, helper) {
        
        cmp.set('v.searchKeyword',null);
    },
    
    updateColumnSorting: function (cmp, event, helper) {
        cmp.set('v.isLoading', true);
        // We use the setTimeout method here to simulate the async
        // process of the sorting data, so that user will see the
        // spinner loading when the data is being sorted.
        setTimeout(function() {
            var fieldName = event.getParam('fieldName');
            var sortDirection = event.getParam('sortDirection');
            cmp.set("v.sortedBy", fieldName);
            cmp.set("v.sortedDirection", sortDirection);
            helper.sortData(cmp, fieldName, sortDirection);
            cmp.set('v.isLoading', false);
        }, 0);
    }
    
})