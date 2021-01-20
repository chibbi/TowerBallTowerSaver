import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.RandomAccessFile;

public class addnewButtons {

    public static String ending = "\n}";
    public static String file = "js/default.js";

    public static void main(String[] args) {
        deleteLastLine();
        for (int i = 1; i <= 13; i++) {
            appendToFile(newButton("place9-" + i));
        }
        appendToFile(ending);
    }

    public static void deleteLastLine() {
        try {
            RandomAccessFile raf = new RandomAccessFile(file, "rw");
            long length = raf.length();
            raf.setLength(length - 2); // i know that the ending has an \n and an } so it will always be exactly 2
            raf.close();
        } catch (Exception ex) {
            ex.printStackTrace();
        }

    }

    public static void appendToFile(String text) {
        try {
            FileWriter fw = new FileWriter(file, true);
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(text);
            bw.newLine();
            bw.close();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    private static String newButton(String name) {
        String newString = "endMenu(\"" + name + "\", getCookie(\"" + name + "\"));\ndocument.getElementById(\"" + name
                + "\").onclick = () => {\nloadMenu(\"" + name + "\")\n};";
        return newString;
    }
}