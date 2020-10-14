({
    doInit: function(component, event, helper) {
        helper.getAccountList(component);
         helper.init(component);
    },
    searchKeyChange: function(component, event) {
        var searchKey = component.find("searchKey").get("v.value");
        console.log('searchKey:::::'+searchKey);
        var action = component.get("c.findByName");
        action.setParams({
            "searchKey": searchKey
        });
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    doInit1: function(component, event) {
        var fromChild = event.getParam("message");
        component.set('v.childVariable',fromChild);
   
    }, handleSelect: function (cmp, event) {
        event.preventDefault();
        var mapping = { '1' : 'Categories', 
                       '2' : 'TRAVEL', 
                       '3' : 'WEATHER',
                       '4' : 'TELE COMMUNICATIONS', 
                       '5' : 'AUTOMOBILE', 
                       '6' : 'TECHNOLOGY',
                       '7' : 'Security',
                       '8' : 'Open', 
                       '9' : 'OAuth',
                       '10' :'Rating' ,
                       '11' :'1' ,
                       '12' :'2' ,
                       '13': '3',
                       '14':'4',
                       '15': '5'};
        cmp.set('v.selected', mapping[event.getParam('name')]);
    }
    
})