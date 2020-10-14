public with sharing class ProdSearchController {
    @AuraEnabled
    public static list <Product__c> jobposting {get;set;}
    public string searchvalue {get;set;}
    public static List<Product__c> searchAccounts( String searchKey, String searchKey1, String searchKey2  ) {
        List<Product__c> accounts = new List<Product__c>();
       if( (String.isNotBlank( searchKey ))  || ( String.isNotBlank( searchKey1 ) ) || ( String.isNotBlank( searchKey2 )) ){
            string searchvalue='select Name,id,Description__c,Product_Categories__c,Product_Name__c,Rating__c from Product__c  where Product_Name__c like \'%'+searchKey+'%\' and Product_Categories__c like \'%'+searchKey1+'%\' AND ( Rating__c like \'%'+searchKey2+'%\') Limit 10';
          system.debug('pass1');
           jobposting= Database.query(searchvalue); 
        }
        else{
           string searchvalue='select Name,id,Description__c,Product_Categories__c,Product_Name__c,Rating__c from Product__c  Limit 10';
           
            jobposting= Database.query(searchvalue);   
            system.debug('pass11');
        }
        return jobposting;
    }
}