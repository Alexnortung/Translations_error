<script>
  import { goto } from "$app/navigation";

  import { lang } from "$lib/stores/lang";
  let selected;

  function updateLanguage() {
    lang.set(selected);
    // set localstorage lang with selected value
    localStorage.setItem("lang", selected);
  }

  let options = {
    en: "English / EN",
    da: "Dansk / DK",
    se: "Svenske / SE",
  };
</script>

<div class="inline-block relative w-34">
  <select
    bind:value={selected}
    on:change={updateLanguage}
    class="block appearance-none w-full bg-white px-4 py-2 pr-8 border-none focus:shadow-none  leading-tight focus:outline-none"
  >
    <option value={$lang}>{options[$lang]}</option>
    {#each Object.entries(options) as [key, value]}
      {#if $lang != key}
        <option value={key}>{value}</option>
      {/if}
    {/each}
  </select>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
  />
</div>
