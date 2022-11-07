import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Teas from "~/components/teas/teas";

export default component$(() => {
  return (
    <div>
      <h1>Tea</h1>
      <Teas />
      {/* TODO make this a button look */}
      <Link href="/create">+ Add a tea</Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Tea",
};
