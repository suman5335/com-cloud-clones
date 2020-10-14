public class FeatureController {
@AuraEnabled
 public static List<Feature__c> FeatureListView(){
  List<Feature__c> FeatureList= [Select Name,Feature_Description__c from Feature__c  where 	Product_Feature__r.Name = :'P-0001' ];
  System.debug('Success');
     return FeatureList;
 }
}