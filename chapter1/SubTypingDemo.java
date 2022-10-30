class Human
{
    void work()
    {
        System.out.println("Work");
    }
}
class Teacher extends Human
{
    void work()
    {
        System.out.println("Teacher teach");
    }
}
class Doctor extends Human
{
    void work()
    {
        System.out.println("Doctor treat patient");
    }
}
class Robot 
{
    void work()
    {
        System.out.println("Robot work");
    }
} 
public class SubTypingDemo
{
    public static void main(String[]args)
    {
        Human h = new Robot();
        h.work();
    }
}