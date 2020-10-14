public with sharing class productPage_Searchbar_Apex {
    @AuraEnabled
    public static List < account > fetchAccount() {
        List < Account > returnList = new List < Account > ();
        List < Account > lstOfAccount = [select id, Name, Type, Industry, Phone, Fax from account];
        for (Account acc: lstOfAccount) {
            returnList.add(acc);
        }
        return returnList;
    }
}