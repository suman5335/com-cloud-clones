({
    init: function (cmp) {
        var items = [{
                "label": "TAGS",
                "name": "2",
                "expanded": true,
                "items" :[{
                    "label": "+SHOPPING",
                    "name": "3",
                    "expanded": true,
                    "items" :[]
                }, {
                    "label": "+CART",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
            }, {
                    "label": "+PAYMENT",
                    "name": "3",
                    "expanded": true,
                    "items" :[]
                }, {
                    "label": "+ADDRESS VERIFICATION",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
                }]
        }, {
                "label": "SECURITY",
                "name": "2",
                "expanded": true,
                "items" :[{
                    "label": "+OPEN",
                    "name": "3",
                    "expanded": true,
                    "items" :[]
                }, {
                    "label": "+OAuth2",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
                }, {
                    "label": "+JWT",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
            }]
        }, {
           
            "label": "TIER",
                "name": "2",
                "expanded": true,
                "items" :[{
                    "label": "+FREE",
                    "name": "3",
                    "expanded": true,
                    "items" :[]
                }, {
                    "label": "+PAID",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
                }, {
                    "label": "+Bronze",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
                },{
                    "label": "+Silver",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
                },{
                    "label": "+Gold",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
                
            }]
        }, {
                "label": "RATING",
                "name": "2",
                "expanded": true,
                "items" :[{
                    "label": "⭐+1",
                    "name": "3",
                    "expanded": true,
                    "items" :[]
                }, {
                    "label": "⭐⭐",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
            }]
        }];
        cmp.set('v.items', items);
    }
});