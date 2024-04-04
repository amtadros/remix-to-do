import { Button, Card, CardBody, CardHeader } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getToDos } from "~/actions";
import styles from "../shared.module.css";
export const meta: MetaFunction = () => {
  return [{ title: "To Do's" }, { name: "description", content: "GTD!" }];
};

export const loader = () => {
  return getToDos();
};

export default function Index() {
  const toDos = useLoaderData<typeof loader>();

  return (
    <div>
      <div className={styles.centerContent}>
        <Link to="/todo/new">
          <Button colorScheme="teal">Create New To Do</Button>
        </Link>
      </div>

      {toDos.map((todo) => (
        <Link to={`/todo/${todo.id}/edit`} key={todo.id}>
          <Card margin={2}>
            <CardHeader>{todo.title}</CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
