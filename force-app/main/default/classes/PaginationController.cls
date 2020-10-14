public class PaginationController {
    @AuraEnabled
    public static List<Featured_Stories__c> showContacts(){
        List<Featured_Stories__c> contactList = new List<Featured_Stories__c>();
        contactList = [Select Id, Name,Stories__c  From Featured_Stories__c LIMIT 100 ];
        system.debug('pass1');
        return contactList;
    }
    @AuraEnabled
    public static List<Top_Alerts__c> showAlerts(){
        List<Top_Alerts__c> alertList = new List<Top_Alerts__c>();
        alertList = [Select Id, Name,Story__c  From Top_Alerts__c LIMIT 100 ];
        system.debug('pass11');
        return alertList;
    }
        @AuraEnabled
    public static List<Notification__c> showNotification(){
        List<Notification__c> notificationList = new List<Notification__c>();
        notificationList = [Select Id, Name,Notify__c  From Notification__c LIMIT 100 ];
        system.debug('pass111');
        return notificationList;
    }
}