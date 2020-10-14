global with sharing class FeaturedStories {
@auraEnabled
    public static List<Featured_Stories__c> getAllrecords()
    {
     List<Featured_Stories__c> reg=new LIST<Featured_Stories__c>();  
        reg=[select id,Name,Stories__c from Featured_Stories__c];
        return reg;
    } 
    public Featured_Stories__c getSelectedrecords(Id id)
    {    
      Featured_Stories__c reg=[select id,Name,Stories__c from Featured_Stories__c where id=:id];
        return reg;
    } 
}