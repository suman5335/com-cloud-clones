({
    init: function (cmp) {
        var items = [{
                "label": "TAGS",
                "name": "2",
                "expanded": true,
                "items" :[{
                    "label": "CART",
                    "name": "3",
                    "expanded": true,
                    "items" :[]
                }, {
                    "label": "SHOPPING",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
            }]
        }, {
                "label": "SECURITY",
                "name": "2",
                "expanded": true,
                "items" :[{
                    "label": "OPEN",
                    "name": "3",
                    "expanded": true,
                    "items" :[]
                }, {
                    "label": "JWT",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
            }]
        },{
            
            "label": "TIER",
                "name": "2",
                "expanded": true,
                "items" :[{
                    "label": "FREE",
                    "name": "3",
                    "expanded": true,
                    "items" :[]
                }, {
                    "label": "PAID",
                    "name": "4",
                    "expanded": true,
                    "items" :[]
            }]
        }, {
                "label": "RATING",
                "name": "2",
                "expanded": true,
                "items" :[{
                    "label": "⭐",
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