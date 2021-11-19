package main;

import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		startApp();
	}

	private static void startApp() {
		welcome();
		int userInput = 0;
		do {
			showMenu();
			System.out.println("\nUnesi sta zelis [0-4]: ");
			userInput = getUserInput();
			doAction(userInput);
		} while (userInput != 0);
	}

	
	private static void welcome() {
		System.out.println("################################");
		System.out.println("DOBAR DAN!");
		System.out.println("DOBRO DOSLI NA NAS PROJEKAT");
		System.out.println("PREDSTAVLJAMO VAM TO-DO LISTU");
		System.out.println("################################\n\n");
	}
	
	private static void doAction(int userInput) {
		switch (userInput) {
		case 1:
			insertTask();
			System.out.println("\nUspesno ste uneli obavezu!\n");
			System.out.println("\nOvo je vasa lista svih obaveza: \n");
			showAllTasks();
			System.out.println("\n");
			break;
		case 2:
			showAllTasks();
			System.out.println("\nIzaberi sta zelis da izbacis: ");
			Task task = whatTaskUserWants();
			removeTask(task);
			System.out.println("\nUspesno je obrisana obaveza!");
			break;
		case 3:
			showAllTasks();
			System.out.println("\nIzaberi koju obavezu zelis da uradis: ");
			Task task2 = whatTaskUserWants();
			doTask(task2);
			break;
		case 4:
			showAllTasks();
			break;
		case 0:
			System.exit(0);
			System.out.println("Dovidjenja!");
			break;
		default:
			break;
		}
	}

	private static void removeTask(Task task) {
		ToDoList.getInstance().removeTask(task);
	}

	private static void doTask(Task task) {
		
		IWeb.printToFile(task.getName()+ " " + task.getDescription());
		IWeb.openWebApp();
		
		removeTask(task);
	}

	private static Task whatTaskUserWants() {
		String input = nameOfTask();
		Task task = ToDoList.getInstance().find(input);
		return task;
	}

	private static String nameOfTask() {
		Scanner scanner = new Scanner(System.in);
		String input = scanner.nextLine();
		return input;
	}

	private static void showAllTasks() {
		ToDoList.getInstance().showAllTasks();
	}



	private static void insertTask() {
		Task task1 = getTaskFromUser();
		ToDoList.getInstance().addTask(task1);
	}

	private static Task getTaskFromUser() {
		String name = getNameFromUser();
		String description = getDescriptionFromUser();
		
		Task noviTask = new Task(name, description);
		
		return noviTask;
	}

	private static String getDescriptionFromUser() {
		System.out.println("Unesi opis obaveze: ");
		Scanner scanner = new Scanner(System.in);
		String uneto = scanner.nextLine();
		return uneto;
	}

	private static String getNameFromUser() {
		System.out.println("\nUnesi naziv obaveze: ");
		Scanner scanner = new Scanner(System.in);
		String uneto = scanner.nextLine();
		return uneto;
	}

	private static int getUserInput() {
		
		Scanner scanner = new Scanner(System.in);
		int n = scanner.nextInt();
		
		return n;
	}

	private static void showMenu() {
		System.out.println("=====================");
		System.out.println("1. Unesi obavezu");
		System.out.println("2. Obrisi obavezu");
		System.out.println("3. Uradi obavezu");
		System.out.println("4. Prikazi sve obaveze");
		System.out.println("0. Ugasi program");
	}

}
