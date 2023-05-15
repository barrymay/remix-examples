import styled from "@emotion/styled";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";

export const loader = () => {
  return json({ message: "Hello, Barry - Server 12345!" });
}
const Container = styled("div")`
  font-family: "system-ui, sans-serif";
  line-height: 1.4;
  background-color: #ddd;
`;

export default function Index() {
  const data = useLoaderData();
  const [state, setState] = useState(0);
  return (
    <Container>
      <h1>Welcome to Remix (Client: 123) with Emotion Example: {data.message}</h1>
      <ul>
        <li>
          <Link to="/jokes">Jokes {state}</Link>
        </li>
        <li>
          <Link to="/jokes-error">Jokes: Error</Link>
        </li>
      </ul>
      <button onClick={() => setState(state + 1)}>Click me: {state}</button>
    </Container>
  );
}
