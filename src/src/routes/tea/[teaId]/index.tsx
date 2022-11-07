import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

interface Tea {
  name: string;
  description: string;
}

export default component$(() => {
  const { params } = useLocation();
  console.log(params.teaId);
  const teaResource = useResource$<Tea>(() => getTea(params.teaId));

  console.log("Render");
  return (
    <Resource
      value={teaResource}
      onPending={() => <>Loading...</>}
      onRejected={(error) => {
        console.log("error");
        console.log(error);
        return <>Error: {error.message}</>;
      }}
      onResolved={(res) => <Tea {...res} />}
    />
  );
});

export function Tea({ name, description }: Tea) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export async function getTea(id: string): Promise<Tea> {
  const resp = await fetch(
    `https://z4106slus8.execute-api.us-east-1.amazonaws.com/prod/tea/${id}`
  );
  console.log("FETCH resolved");
  console.log(resp.status);
  const json = await resp.json();
  console.log(json);
  return json;
}
