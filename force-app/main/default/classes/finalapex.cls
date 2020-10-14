global with sharing class finalapex {
   @AuraEnabled
   public static List<Featured_Stories__c> getAllrecords()
   {
       List<Featured_Stories__c> reg=new LIST<Featured_Stories__c>();  
       reg=[select Stories__c from Featured_Stories__c];
       return reg;
   }
   @AuraEnabled
   public static Featured_Stories__c getSelectedrecords(Id id)
   {    
       Featured_Stories__c reg=[select id,Name,Stories__c from Featured_Stories__c where id=:id];
       return reg;
   }
   @AuraEnabled
   public static List<Top_Alerts__c> getAllTopStories()
   {
       List<Top_Alerts__c> regs =new LIST<Top_Alerts__c>();  
       regs =[select Story__c from Top_Alerts__c];
       return regs;
   }
   @AuraEnabled
   public static Top_Alerts__c getAlertrecords(Id id)
   {    
       Top_Alerts__c regs=[select id,Story__c from Top_Alerts__c where id=:id];
       return regs;
   }
   @AuraEnabled
   public static List<Notification__c> getNotifications()
   {
       List<Notification__c> rega =new LIST<Notification__c>();  
       rega=[select Notify__c from Notification__c];
       return rega;
   }
   @AuraEnabled
   public static Notification__c getNotificationrecords(Id id)
   {    
       Notification__c rega=[select id,Notify__c from Notification__c where id=:id];
       return rega;
   }
   
}