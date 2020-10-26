public class MainApp
{
    public static void main(String[] args)
    {
        String message = "Lorem ipsum dolor sit amet, \nconsectetur adipisicing elit. Nobis, nihil. \nUllam magnam nam repellat recusandae?";
        slowPrint(message, 30);
    }

    /**
     * Function to print each character in a string with a delay (a "typewriter" effect)
     * @param message The string to print
     * @param millisPerChar Milliseconds to take to print each character
     */
    public static void slowPrint(String message, long millisPerChar)
    {
        for (int i = 0; i < message.length(); i++)
        {
            System.out.print(message.charAt(i));

            try
            {
                Thread.sleep(millisPerChar);
            }
            catch (InterruptedException e)
            {
                e.printStackTrace();
            }
        }
    }
}


