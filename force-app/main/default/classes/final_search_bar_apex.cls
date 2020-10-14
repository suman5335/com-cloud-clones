public with sharing class final_search_bar_apex {
 @AuraEnabled
 public static List < Product__c > fetchAccount(String searchKeyWord) {
  String searchKey = searchKeyWord + '%';
  List < Product__c > returnList = new List < Product__c > ();
  List < Product__c > lstOfpro = [select id, Name,Product_Name__c,Description__c from Product__c
                                   where Name LIKE: searchKey LIMIT 500];
     system.debug('pass1');
 
  for (Product__c pro: lstOfpro) {
   returnList.add(pro);
  }
     system.debug('pass2');
  return returnList; 
 }
}