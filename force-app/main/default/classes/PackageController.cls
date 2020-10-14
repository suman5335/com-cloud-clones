public class PackageController {
@AuraEnabled
 public static List<Package__c> PackageListView(){
     List<Package__c> PackageList= [Select 	Name,Package_Description__c from Package__c];
  return PackageList;
 }
}