global with sharing class AnnApex {
    @AuraEnabled
   public static List<Announcement__c> getAllTopStories()
   {
       List<Announcement__c> regs =new LIST<Announcement__c>();  
       regs =[select Description__c from Announcement__c  ORDER BY CreatedDate LIMIT 2000];
       return regs;
   }
}