({
    handleSuccess : function(component, event, helper) {
        component.find('s').showToast({
            "variant": "success",
            "title": "Account Created",
            "message": "Record ID: " + event.getParam("id")
        });
    }
})