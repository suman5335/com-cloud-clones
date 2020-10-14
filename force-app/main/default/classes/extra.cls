global with sharing  class extra {
@AuraEnabled
    public static topAlertWrapper fetchAlert(Decimal pageNumber1 ) {
        Integer recordToDisply1=1; 
        Integer recordSize1 = 1 ;
        Integer pageSize1 = recordToDisply1;
        Integer offset1 = ((Integer)pageNumber1 - 1) * pageSize1;
        // create a instance of wrapper class.
        topAlertWrapper taw =  new topAlertWrapper();
        // set the pageSize,Page(Number), total records and notification List(using OFFSET)   
        taw.pageSize1 = pageSize1;
        taw.page1 = (Integer) pageNumber1;
        taw.total1 = [SELECT count() FROM Top_Alerts__c];
        taw.alert = [select Story__c from Top_Alerts__c ORDER BY Name LIMIT :recordToDisply1 OFFSET :offset1 ];
        // return the wrapper class instance .
        system.debug('pass1');
        return taw;
    }
    // create a wrapper class with @AuraEnabled Properties    
    public class topAlertWrapper {
        @AuraEnabled public Integer pageSize1 {get;set;} 
        @AuraEnabled public Integer page1 {get;set;}
        @AuraEnabled public Integer total1 {get;set;}
        @AuraEnabled public List<Top_Alerts__c> alert {get;set;}
    } 
}