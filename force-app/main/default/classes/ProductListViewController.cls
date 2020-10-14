public class ProductListViewController {
@AuraEnabled
 public static List<Product__c> ProductListView(){
     List<Product__c> ProductList= [Select Product_Name__c,Description__c from Product__c];
  return ProductList;
 }
}