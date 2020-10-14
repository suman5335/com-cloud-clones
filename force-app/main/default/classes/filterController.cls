public class filterController {
    @AuraEnabled
    public static List <Product__c> getAccounts() {
        return [select Name,id,Description__c,Product_Categories__r.Name,Product_Name__c,Product_Rating__c,Price__c FROM Product__c order by Product_Name__c  ];
    }    
    @AuraEnabled
    public static List<Product__c> findByName(String searchKey) {
        String likeParam =  '%'+searchKey+'%';
        return [select Name,id,Description__c,Product_Categories__r.Name,Product_Name__c,Product_Rating__c,Price__c FROM Product__c WHERE (Product_Name__c like: likeParam OR Product_Categories__r.Name  like: likeParam OR Product_Rating__c  like: likeParam)  LIMIT 10];
    }
}