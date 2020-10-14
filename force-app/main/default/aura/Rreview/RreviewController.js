({
    handleSuccess : function(component, event, helper) {
     var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Success',
            message: 'This is a success message',
            duration:' 5000',
            type: 'success',
            mode: 'pester'
        });
        toastEvent.fire();
    }
})