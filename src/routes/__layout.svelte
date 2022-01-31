
<script context="module">
  import { lang } from "$lib/stores/lang";
  import { t, locales, locale, loadTranslations } from "$lib/translations";

  export const load = async ({ url }) => {
    const { pathname } = url;

    const defaultLocale = get(lang); // get from cookie, user session, ...

    const initLocale = locale.get() || defaultLocale; // set default if no locale already set

    await loadTranslations(initLocale, pathname);

    return {};
  };
</script>

<script lang="ts">
  import "../app.css";

  import { get } from "svelte/store";
</script>

<main>
  Test
  <slot />
</main>
