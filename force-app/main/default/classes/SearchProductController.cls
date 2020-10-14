public with sharing class SearchProductController {
    
    @AuraEnabled public List<String> result{get;set;}
    @AuraEnabled public List < Product__c > returnList{get;set;}
    
    @AuraEnabled
    public static SearchProductController fetchProductbyName(String searchKeyWord) {
        
        SearchProductController obj = new SearchProductController();
        String searchKey;
        Set < String > returnSetVIds = new Set < String > ();
        List < String > returnListVIds = new List < String > ();
        try
        {
            if(searchKeyWord.contains(','))
            {
                List<String> searchKeyCode = searchKeyWord.split(',') ;
                obj.returnList = [select Name,Price__c,Product_Categories__c, Product_Name__c from Product__c
                                  where Product_Name__c in: searchKeyCode   LIMIT 500];
            }
            else
            {
                
                searchKey = searchKeyWord + '%';
                obj.returnList  = [select Name,Price__c,Product_Categories__c, Product_Name__c  from Product__c
                                   where Product_Name__c  LIKE: searchKey  LIMIT 500];
            }
            for (Product__c prd: obj.returnList) {
                //obj.returnList.add(prd);
                returnListVIds.add(prd.Product_Categories__c);
            }
            system.debug(returnListVIds);
            returnSetVIds.addAll(returnListVIds);
            system.debug(returnSetVIds);
            obj.result = new List<String>();
            obj.result.addAll(returnSetVIds); 
            return obj;
        }
        catch (Exception e) {
            // "Convert" the exception into an AuraHandledException
            throw new AuraHandledException('Something went wrong: '
                                           + e.getMessage());    
        }
    }
    
    @AuraEnabled
    public static SearchProductController fetchProductbyCode(String searchKeyWord) {
        
        SearchProductController objCode = new SearchProductController();
        List<String> searchKeyCode;
        Set < String > returnSetVIds = new Set < String > ();
        List < String > returnListVIds = new List < String > ();
        String searchKey;
        try
        {
            if(searchKeyWord.contains(','))
            {
                searchKeyCode = searchKeyWord.split(',') ;
                objCode.returnList = [select Name,Price__c,Product_Categories__c, Product_Name__c
                                      from Product__c 
                                      where Name in: searchKeyCode LIMIT 500
                                     ];  
            }
            
            else
            {
                searchKey = searchKeyWord + '%';
                objCode.returnList = [select Name,Price__c,Product_Categories__c, Product_Name__c
                                      from Product__c
                                      where Name LIKE: searchKey LIMIT 500
                                     ];
            }   
            
            for (Product__c prd: objCode.returnList) {
                returnListVIds.add(prd.Product_Categories__c);
            }
            
            returnSetVIds.addAll(returnListVIds);
            objCode.result = new List<String>();
            objCode.result.addAll(returnSetVIds); 
            return objCode;
        }
        
        catch (Exception e) {
            // "Convert" the exception into an AuraHandledException
            throw new AuraHandledException('Something went wrong: '
                                           + e.getMessage());    
        }
    }
        
}