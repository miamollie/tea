/* eslint-disable no-console */
import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface Tea {
  name: string;
  id: string;
}

export default component$(() => {
  const teasResource = useResource$<Tea[]>(() => getTeas());

  console.log("Render");
  return (
    <Resource
      value={teasResource}
      onPending={() => <>Loading...</>}
      onRejected={(error) => {
        console.log("error");
        console.log(error);
        return <>Error: {error.message}</>;
      }}
      onResolved={(res) => (
        <ul>
          {res.map((r) => (
            <li>
              <Link href={`/tea/${r.id}`}>{r.name}</Link>
            </li>
          ))}
        </ul>
      )}
    />
  );
});

// TODO how to env variables?
export async function getTeas(): Promise<Tea[]> {
  console.log(
    "FETCH",
    `https://z4106slus8.execute-api.us-east-1.amazonaws.com/prod/teas`
  );
  const resp = await fetch(`http://localhost:8080/teas`);
  console.log("FETCH resolved");
  console.log(resp.status);
  const json = await resp.json();
  console.log(json);
  return json;
}
