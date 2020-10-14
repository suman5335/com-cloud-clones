public with sharing class samplePagerCtrl {
    // create a wrapper class with @AuraEnabled Properties    
    public class AccountPagerWrapper {
        @AuraEnabled public Integer pageSize {get;set;}
        @AuraEnabled public Integer total {get;set;}
        @AuraEnabled public List<Featured_Stories__c > fs {get;set;}
    }
    @AuraEnabled
    public static AccountPagerWrapper fetchAccount() {
        Integer pageSize = 1;
        Integer offset = 1;
        // create a instance of wrapper class.
        AccountPagerWrapper obj =  new AccountPagerWrapper();
        // set the pageSize,Page(Number), total records and accounts List(using OFFSET)   
        obj.pageSize = pageSize;
        obj.total = [SELECT count() FROM Featured_Stories__c];
        obj.fs = [SELECT Id, Name,Stories__c FROM Featured_Stories__c LIMIT :1 OFFSET :offset];
        system.debug('pass');
        // return the wrapper class instance .
        return obj;
    }
    
}