import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Teas from "~/components/teas/teas";

export default component$(() => {
  return (
    <div>
      <h1>Welcome to Teas</h1>
      <Teas />
      <Link href="/create">Create a new tea</Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Teas",
};
