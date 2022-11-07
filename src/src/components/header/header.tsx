import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/create">Create</Link>
        </li>
        <li>
          <a href="http://github.com/miamollie/teas" target="_blank">
            Github
          </a>
        </li>
      </ul>
    </header>
  );
});
