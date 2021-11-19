package main;

import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

public interface IWeb {

	public static void printToFile(String input) {
		try {
			FileWriter myWriter = new FileWriter("C:/xampp/htdocs/FOCUS!/obaveza.txt");
			myWriter.write(input);
			myWriter.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	public static void openWebApp() {
		try {
			URI uri= new URI("http://localhost:8081/FOCUS!/index.html");

			java.awt.Desktop.getDesktop().browse(uri);
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
