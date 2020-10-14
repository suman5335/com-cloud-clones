public class ProductSearchServiceController {
    @AuraEnabled
    public static List<Sobject> searchProduct(String searchParam){
        String likeParam = '%'+searchParam+'%';
        String Query = '';
        if(searchParam !=null){
            Query = 'select Name,id,Description__c,Product_Categories__r.Name,Product_Name__c,Rating__c,Price__c FROM Product__c WHERE (Product_Name__c like: likeParam OR Product_Categories__r.Name  like: likeParam)  LIMIT 30';
        }
        else{
            Query =  'select Name,id,Description__c,Product_Categories__r.Name,Product_Name__c,Rating__c,Price__c FROM Product__c LIMIT 30';
        }        
        List<Sobject> SObjectList = Database.query(Query);
        return SObjectList;
    }
}