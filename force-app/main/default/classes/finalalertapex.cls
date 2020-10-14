global with sharing class finalalertapex {
    @AuraEnabled
   public static List<Top_Alerts__c> getAllTopStories()
   {
       List<Top_Alerts__c> regs =new LIST<Top_Alerts__c>();  
       regs =[select Story__c from Top_Alerts__c  ORDER BY CreatedDate LIMIT 2000];
       return regs;
   }
}