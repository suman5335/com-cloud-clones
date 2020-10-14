({
	doInit : function(component, event, helper) {
        /* step 1*/
		var action = component.get('c.RecoListView');
        console.log('iest'+action);
     
        /* step 2*/
        action.setParam({
            
        });
        /* step 3*/
        action.setCallback(this, function(response){
            var responsevalue = response.getReturnValue();
            console.log('responsevalue',responsevalue);
            component.set('v.Recommendation',responsevalue);
        },'SUCCESS');
         /* step 4*/
        $A.enqueueAction(action, false);
        
    }
})