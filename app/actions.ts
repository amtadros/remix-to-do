import prisma from "./services/prisma";
import { ToDoFormValues, ToDoType } from "./types/ToDo";

export async function createToDo(values: ToDoFormValues) {
  return await prisma.todos.create({
    data: { ...values },
  });
}

export async function getToDos() {
  return await prisma.todos.findMany({});
}

export async function getToDo(id: number) {
  return await prisma.todos.findUnique({
    where: {
      id,
    }
  });
}

export async function editToDo(values: ToDoType) {
  return await prisma.todos.update({
    where: {
      id: values.id,
    },
    data: { ...values },
  });
}
