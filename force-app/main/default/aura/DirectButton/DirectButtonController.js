({
    completeOrder : function (component, event, helper) {
        // gets the <lightning:navigation> tag on the component
        let navService = component.find("navService");

        // Sets the route to [Org url]/[Community uri]/[pageName]
        let pageReference = {
    type: "comm__namedPage",
    attributes: {
        name: "SkylineproductPage2__c"
    }
}

        navService.navigate(pageReference);
    }
})