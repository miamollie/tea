/* eslint-disable no-console */
import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface Tea {
  name: string;
  id: string;
}

export default component$(() => {
  const teasResource = useResource$<Tea[]>(getTeas);

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
  const resp = await fetch(`${import.meta.env.VITE_API_BASE_URL}/teas`);
  console.log("FETCH resolved");
  console.log(resp.status);
  const json = await resp.json();
  console.log(json);
  return json;
}
