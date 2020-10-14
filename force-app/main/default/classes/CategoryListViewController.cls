public class CategoryListViewController {
@AuraEnabled
 public static List<Categories__c> CategoryListView(){
     List<Categories__c> categoryList= [Select Name,CategoryDescription__c from Categories__c];
  return categoryList;
 }
}