/* eslint-disable no-console */
import { component$, Resource, useResource$ } from "@builder.io/qwik";

export default component$(() => {
  const teasResource = useResource$<string>(({ cleanup }) => {
    // We need a way to re-run fetching data whenever the `github.org` changes.
    // Use `track` to trigger re-running of the this data fetching function.
    // track(() => github.org);

    // A good practice is to use `AbortController` to abort the fetching of data if
    // new request comes in. We create a new `AbortController` and register a `cleanup`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return postTea(controller);
  });

  console.log("Render");
  return (
    <Resource
      value={teasResource}
      onPending={() => <>Loading...</>}
      onRejected={(error) => {
        console.log("error");
        console.table(error);
        return <>Error: {error.message}</>;
      }}
      onResolved={(res) => (
        <ul>
          {res.map((r) => (
            <li>{r}</li>
          ))}
        </ul>
      )}
    />
  );
});

export async function postTea(controller?: AbortController): Promise<string> {
  const resp = await fetch(
    `https://z4106slus8.execute-api.us-east-1.amazonaws.com/prod/teas`,
    {
      signal: controller?.signal,
    }
  );
  console.log("FETCH resolved");
  const json = await resp.json();
  console.log(json);
  //   perform redirect or return error...?
  //   throw response.redirect(`/tea/{tea.id}?created`);
  return "yup";
}
