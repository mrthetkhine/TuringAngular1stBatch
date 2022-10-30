class Human
{
    work()
    {
        console.log("Work");
    }
}
class Teacher extends Human
{
    work()
    {
        console.log("Teacher teach");
    }
}
class Doctor extends Human
{
    work()
    {
        console.log("Doctor treat patient");
    }
}
class Robot 
{
    work()
    {
        console.log("Robot work");
    }
} 
let h = new Robot();
h.work();