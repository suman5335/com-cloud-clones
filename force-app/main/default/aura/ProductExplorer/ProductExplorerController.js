({
	handleCompEvent : function(component, event, helper) {
        var searchParam = event.getParam('searchText');
        var action = component.get('c.searchProduct'); /* to call methods from apex class */
        action.setParams({
            searchParam : searchParam
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
                var responseValue = response.getReturnValue();
                console.log('responseValue',responseValue);
                component.set('v.ProductList',responseValue);
            }
            else{
                console.log(response.getError());
            }
            
        });
        $A.enqueueAction(action);	
	}
})