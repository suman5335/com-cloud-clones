({
	 shiftDiv: function(component, event,lheight) {
        var changeposition = component.get("v.intervalId");
        console.log(changeposition);
        var floatElement = document.getElementById('tofloat');	  
        if(changeposition < lheight){
            floatElement.style.top = changeposition+'px';
            changeposition = changeposition + 5;
           // changeposition = changeposition + 2;
            component.set("v.intervalId",changeposition);
        }
        //reset the top to 0
        else{
            component.set("v.intervalId",0);
           floatElement.style.top = "100px";
           floatElement.style.bottom = "100px";
            changeposition = component.get("v.intervalId");//resetting so as to hit the if block again
        }
    }
})