global with sharing class reviewapex {
    @AuraEnabled
   public static List<Review__c> getAllTopStories()
   {
       List<Review__c> regs =new LIST<Review__c>();  
       regs =[select Review_Description__c from Review__c  ORDER BY CreatedDate LIMIT 2000];
       return regs;
   }
}