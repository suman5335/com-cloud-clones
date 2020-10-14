global with sharing class topstories {
@auraEnabled
    public static List<Top_Alerts__c> getAllTopStories()
    {
     List<Top_Alerts__c> reg=new LIST<Top_Alerts__c>();  
        reg=[select id,Story__c from Top_Alerts__c];
        return reg;
    } 
    public Top_Alerts__c getSelectedrecords(Id id)
    {    
      Top_Alerts__c reg=[select id,Story__c from Top_Alerts__c where id=:id];
        return reg;
    } 
}