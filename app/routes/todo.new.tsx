import { Button, Input } from "@chakra-ui/react";
import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { createToDo } from "~/actions";

import { ToDoFormValues } from "~/types/ToDo";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const values = Object.fromEntries(formData) as unknown as ToDoFormValues;

  createToDo(values);
  return redirect("/");
};

export default function NewToDoRoute() {
  return (
    <>
      <Form method="post">
        <Input name="title" type="text" />
        <Input name="description" type="text" />
        <Button type="submit" colorScheme="teal">Save</Button>
      </Form>
    </>
  );
}
