import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <ul>
        <li>
          <a href="/create">Create</a>
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
