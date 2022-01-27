// import writable
import { writable } from "svelte/store";

// create writable with language
export let lang = writable("en");

if (typeof localStorage !== "undefined") {
  if (localStorage.getItem("lang")) {
    localStorage.setItem("lang", "en");
  }

  lang.update((n) => {
    return (n = localStorage.getItem("lang"));
  });
}
