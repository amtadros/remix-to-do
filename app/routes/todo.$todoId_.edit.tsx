import { Button, Input } from "@chakra-ui/react";
import { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect, useLoaderData } from "@remix-run/react";
import { getToDo, editToDo } from "~/actions";
import { ToDoFormValues, ToDoType } from "~/types/ToDo";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData) as unknown as ToDoFormValues;

  if (params.todoId) {    
     editToDo({ ...values, id: parseInt(params.todoId) });
  }
  return redirect("/");
};

interface LoaderProps {
  params: {
    todoId: string;
  };
}

export const loader = ({ params }: LoaderProps) => {
  return getToDo(parseInt(params.todoId));
};

export default function EditToDoRoute() {
  const toDo = useLoaderData<typeof loader>() as ToDoType;

  return (
    <>
      <Form method="post">
        <Input name="title" type="text" defaultValue={toDo.title} />
        <Input name="description" type="text" defaultValue={toDo.description}/>
        <Button type="submit" colorScheme="teal">
          Save
        </Button>
      </Form>
    </>
  );
}
