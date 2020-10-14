public class SDKController {
@AuraEnabled
   public static list <SDK__c> fetchContact(){
      
      List <SDK__c> returnConList = new List < SDK__c > ();
        
      for(SDK__c con: [SELECT 	Name,SDK_Description__c From SDK__c LIMIT 1000]) {
             returnConList.add(con);
          }
         return returnConList;
   }
}