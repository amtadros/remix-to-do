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
        <input name="title" type="text" />
        <input name="description" type="text" />
        <button type="submit">Save</button>
      </Form>
    </>
  );
}
