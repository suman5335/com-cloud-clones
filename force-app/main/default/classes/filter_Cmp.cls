public class filter_Cmp {
    @AuraEnabled
    public static List<Product__c> prodlist() {
      return [
         select Name,id,Description__c,Product_Categories__c,Product_Name__c,Rating__c from Product__c
      ];
    }
}