({      
    getAccountList: function(component) {
        var action = component.get('c.getAccounts');
        var self = this;
        action.setCallback(this, function(actionResult) {
            component.set('v.accounts', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    },init: function (cmp) {
        var items = [{
            "label": "Categories",
            "name": "1",
            "disabled": false,
            "expanded": true,
            "items": [{
                "label": "TRAVEL",
                "name": "2",
                "disabled": false,
                "expanded": true,
                "items": []
            }, {
                "label": "WEATHER",
                "name": "3",
                "disabled": false,
                "expanded": true,
                "items": []
            }, {
                "label": "TELE COMMUNICATIONS",
                "name": "4",
                "disabled": false,
                "expanded": true,
                "items": []
            },{
                "label": "AUTOMOBILE",
                "name": "5",
                "disabled": false,
                "expanded": true,
                "items": []
            },{
                "label": "TECHNOLOGY",
                "name": "6",
                "disabled": false,
                "expanded": true,
                "items": []
            }]
        }, {
            "label": "Security",
            "name": "7",
            "disabled": false,
            "expanded": true,
            "items": [{
                "label": "Open",
                "name": "8",
                "disabled": false,
                "expanded": true,
                "items": []
            }, {
                "label": "OAuth",
                "name": "9",
                "disabled": false,
                "expanded": true,
                "items": []
            }]
        }, {
            "label": "Rating",
            "name": "10",
            "disabled": false,
            "expanded": true,
            "items": [{
                "label": "1",
                "name": "11",
                "disabled": false,
                "expanded": true,
                "items": []
            }, 
                      {
                          "label": " 2",
                          "name": "12",
                          "disabled": false,
                          "expanded": true,
                          "items": []
                      },
                      {
                          "label": "3",
                          "name": "13",
                          "disabled": false,
                          "expanded": true,
                          "items": []
                      },
                      {
                          "label": " 4",
                          "name": "14",
                          "disabled": false,
                          "expanded": true,
                          "items": []
                      },{
                          "label": "5",
                          "name": "15",
                          "disabled": false,
                          "expanded": true,
                          "items": []
                      }]
        }];
        
        cmp.set('v.items', items);
    }
})