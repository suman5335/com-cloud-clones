global with sharing class third_trail {
    //its for featured story//
   @AuraEnabled
    public static FeaturestoryWrapper fetchFeaturedStory(Decimal pageNumber) {
        Integer recordToDisply=1; 
        Integer recordSize = 1 ;
        Integer pageSize = recordToDisply;
        Integer offset = ((Integer)pageNumber - 1) * pageSize;
        // create a instance of wrapper class.
        FeaturestoryWrapper obj =  new FeaturestoryWrapper();
        // set the pageSize,Page(Number), total records and accounts List(using OFFSET)   
        obj.pageSize = pageSize;
        obj.page = (Integer) pageNumber;
        obj.total = [SELECT count() FROM Featured_Stories__c];
        obj.featuredStory = [select Stories__c from Featured_Stories__c ORDER BY Name LIMIT :recordToDisply OFFSET :offset];
        System.debug('pass');
        // return the wrapper class instance .
        return obj;       
    }
    // create a wrapper class with @AuraEnabled Properties    
   public class FeaturestoryWrapper {
        @AuraEnabled public Integer pageSize {get;set;} 
        @AuraEnabled public Integer page {get;set;}
        @AuraEnabled public Integer total {get;set;}
        @AuraEnabled public List<Featured_Stories__c> featuredStory {get;set;}
    }
    // from here its for top alert //
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
    //from here its for notification //
    @AuraEnabled
    public static notificationWrapper fetchNotification(Decimal pageNumber2) {
        Integer recordToDisply2 = 1; 
        Integer recordSize2 = 1 ;
        Integer pageSize2 = recordToDisply2;
        Integer offset2 = ((Integer)pageNumber2 - 1) * pageSize2;
        // create a instance of wrapper class.
        notificationWrapper noty =  new notificationWrapper();
        // set the pageSize,Page(Number), total records and accounts List(using OFFSET)   
        noty.pageSize2 = pageSize2;
        noty.page2 = (Integer) pageNumber2;
        noty.total2 = [SELECT count() FROM Notification__c];
        noty.notification = [select Notify__c from Notification__c ORDER BY Name LIMIT :recordToDisply2 OFFSET :offset2];
        System.debug('pass2');
        // return the wrapper class instance .
        return noty ;  
    }
    // create a wrapper class with @AuraEnabled Properties    
    public class notificationWrapper {
        @AuraEnabled public Integer pageSize2{get;set;} 
        @AuraEnabled public Integer page2 {get;set;}
        @AuraEnabled public Integer total2 {get;set;}
        @AuraEnabled public List<Notification__c >notification {get;set;}
    }
    
}