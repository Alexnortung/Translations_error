<script lang="ts">
  import { t } from "$lib/translations";
  import { page } from "$app/stores";

  export let text: string, link: string;
</script>

<li
  class="relative text-center py-10"
  class:active={$page.url.pathname === link}
>
  <a class="no-underline hover:no-underline" sveltekit:prefetch href={link}>
    <span class="menu-item ">{text}</span>
  </a>
</li>

<style>
  .active::before {
    content: "";
    display: block;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #0e2542;
    z-index: 0;
  }
</style>
