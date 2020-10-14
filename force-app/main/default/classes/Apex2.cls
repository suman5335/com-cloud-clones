global with sharing class Apex2 {
   @AuraEnabled
 public static AccountPagerWrapper fetchAccount(Decimal pageNumber ) {
     Integer recordToDisply=1; 
     Integer recordSize = 1 ;
     Integer pageSize = recordToDisply;
      Integer offset = ((Integer)pageNumber - 1) * pageSize;
        // create a instance of wrapper class.
    AccountPagerWrapper obj =  new AccountPagerWrapper();
    // set the pageSize,Page(Number), total records and accounts List(using OFFSET)   
        obj.pageSize = pageSize;
        obj.page = (Integer) pageNumber;
        obj.total = [SELECT count() FROM Top_Alerts__c];
        obj.accounts = [select Story__c from Top_Alerts__c ORDER BY Name LIMIT :recordToDisply OFFSET :offset];
    // return the wrapper class instance .
        return obj;
     }
    // create a wrapper class with @AuraEnabled Properties    
 public class AccountPagerWrapper {
    @AuraEnabled public Integer pageSize {get;set;}
    @AuraEnabled public Integer page {get;set;}
    @AuraEnabled public Integer total {get;set;}
    @AuraEnabled public List<Top_Alerts__c> accounts {get;set;}
   }
}