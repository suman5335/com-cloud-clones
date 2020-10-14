public class Clp_Category2NameController {
@AuraEnabled
 public static List<Package__c> CategoryListView(){
     List<Package__c> CategoryList= [Select Name, Package_Description__c from Package__c  where Package_category__r.Name = :'TECHNOLOGY'];
  return CategoryList;
 }
}