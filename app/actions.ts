import prisma from "./services/prisma";
import { ToDoFormValues, ToDoType } from "./types/ToDo";


export async function createToDo(values: ToDoFormValues) {
  const result = await prisma.todos.create({
    data: { ...values },
  });

  return result;
}

export async function getToDos() {
  const result = await prisma.todos.findMany({});

  return result;
}
