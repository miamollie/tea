/* eslint-disable no-console */
import { component$, Resource, useResource$ } from "@builder.io/qwik";

export default component$(() => {
  const teasResource = useResource$<string>(postTea);

  return (
    <Resource
      value={teasResource}
      onPending={() => <>Loading...</>}
      onRejected={(error) => {
        console.log("error");
        console.table(error);
        return <>Error: {error.message}</>;
      }}
      onResolved={(res) => <p>{res}</p>}
    />
  );
});

export async function postTea(): Promise<string> {
  const resp = await fetch(`${import.meta.env.VITE_API_BASE_URL}/teas`, {
    method: "POST",
  });
  console.log("FETCH resolved");
  const json = await resp.json();
  console.log(json);
  //   perform redirect or return error...?
  //   throw response.redirect(`/tea/{tea.id}?created`);
  return "yup";
}
