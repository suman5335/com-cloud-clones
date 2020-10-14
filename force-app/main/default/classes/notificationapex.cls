global with sharing class notificationapex {
@auraEnabled
    public static List<Notification__c> getNotifications()
    {
     List<Notification__c> reg=new LIST<Notification__c>();  
        reg=[select id,Notify__c from Notification__c];
        return reg;
    } 
    public Notification__c getSelectedrecords(Id id)
    {    
      Notification__c reg=[select id,Notify__c from Notification__c where id=:id];
        return reg;
    } 
}