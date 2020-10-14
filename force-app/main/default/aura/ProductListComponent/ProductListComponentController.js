({
    showInfo : function(component, event, helper) {
        var eventSource = event.getSource();
        // alert(eventSource.get('v.value'));
        // alert(eventSource.get('v.name'));
        var ProdObj = eventSource.get('v.name');
        console.log(ProdObj);
        component.set('v.ProductId', ProdObj);
        $A.createComponent(
            "c:ProductDetailComponent",
            {
                ProductId:ProdObj
            }, function(ProductDetailComponent, status, errorMessage){            
                if(status ==="SUCCESS"){
                    component.find('overlayLib').showCustomModal
                    ({
                        header: "Product Details",
                        body: ProductDetailComponent,
                    });
                }else if(status ==="INCOMPLETE"){
                    console.log("No response from server or client is offline");
                }else if(status ==="ERROR"){
                    console.log("Error:"+errorMessage);
                }
            });
        
    }
})