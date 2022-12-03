
class Data
{
    int value;
}
class IncThread extends Thread 
{
    Data data;
    String name;

    public IncThread(String name,Data data)
    {
        this.name = name;
        this.data = data;
    }
    public void run()
    {
        for(int i=0;i<100000;i++)
        {
            //System.out.println("Thread "+this.name +" Count "+i);
            this.data.value ++;
        }
    }
}
public class SyncProblem
{
    static public void main(String[]args)
    {
        Data data = new Data();
        IncThread thread1 = new IncThread("Thread1", data);
        IncThread thread2 = new IncThread("Thread2", data);
        IncThread thread3 = new IncThread("Thread3", data);

        thread1.start();
        thread2.start();
        thread3.start();

        try
        {
            thread1.join();
            thread2.join();
            thread3.join();
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
       

        System.out.println("Data "+data.value);
    }
}