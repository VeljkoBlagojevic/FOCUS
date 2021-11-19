package main;

import java.util.ArrayList;

public class ToDoList {
	
	private static ToDoList instance;
	
	private ArrayList<Task> tasks;
	
	private ToDoList() {
		tasks = new ArrayList<>();
	}
	
	public static ToDoList getInstance() {
		if(instance == null)
			instance = new ToDoList();
		return instance;
	}
	
	public void createTask() {
		
	}
	
	public void addTask(Task task) {
		tasks.add(task);
	}
	
	public void removeTask(Task task) {
		if(tasks.contains(task))
			tasks.remove(task);
	}

	public ArrayList<Task> getTasks() {
		return tasks;
	}

	public void setTasks(ArrayList<Task> tasks) {
		this.tasks = tasks;
	}

	public void showAllTasks() {
		for (Task task : tasks) {
			System.out.println(task);
		}
	}

	public Task find(String input) {
		for (int i = 0; i < tasks.size(); i++) {
			if(tasks.get(i).getName().equals(input))
				return tasks.get(i); 
		}
		return null;
	}
	
	
}
