public class GetUserInfo {
    @AuraEnabled
    public static User getCurrentUser(){
        return [Select Id , Name ,AboutMe,FullPhotoUrl,UserRole.Name ,Title,Email,FirstName,LastName from User where id =:Userinfo.getUserId()];
    }
    
}