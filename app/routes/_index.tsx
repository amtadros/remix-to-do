import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getToDos } from "~/actions";

export const meta: MetaFunction = () => {
  return [{ title: "To Do's" }, { name: "description", content: "GTD!" }];
};

export const loader = () => {
  return getToDos();
};

export default function Index() {
  const toDos = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>To Do</h1>
      <Link to="/todo/new">Create New To Do</Link>
      {toDos.map((todo) => (
        <div>
          <Link to={`/todo/${todo.id}/edit`}>{todo.title}</Link>{" "}
        </div>
      ))}
    </div>
  );
}
