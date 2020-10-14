global with sharing class productClass {
    @auraEnabled
    public static List<Product2> getAllrecords()
    {
        List<Product2> regs=new LIST<Product2>();
        regs=[select id,Name,Description from Product2];
        return regs;
    }
    public Product2 getSelectedrecords(Id id)
    {
        Product2 regs=[select id,Name,Description from Product2 where id=:id];
        return regs;
    }
}