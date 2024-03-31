export interface ToDoType {
  id: number;
  title: string;
  description: string;
  due_date?: string;
  completed?: boolean;
  created_at?: string;
}

export type ToDoFormValues = Omit<ToDoType, "id">
