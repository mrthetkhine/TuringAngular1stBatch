class MyClass
{
    String name;
    int age;
   
}
class AnotherClass
{
    String name;
    int age;
}
public class NominalTyping
{
    public static void main(String[]args)
    {
        MyClass c = new MyClass();
        AnotherClass a = new AnotherClass();
        c = a;
       
    }
}