public class RecoController {
@AuraEnabled
 public static List<Recommendation__c> RecoListView(){
     List<Recommendation__c> RecoList= [Select Name,Recommendation_Description__c from Recommendation__c];
  return RecoList;
 }
}