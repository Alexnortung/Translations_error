<script lang="ts">
  import person from "../SVG/person.svelte";
  import guide from "../SVG/guide.svelte";
  import payment from "../SVG/payment.svelte";
  import help from "../SVG/help.svelte";

  export let active: boolean;
  export let svg: any = undefined;
  export let text: string, link: string;

  let svgs = {
    person,
    guide,
    payment,
    help,
  };
</script>

{#if !active}
  <a
    class="w-full flex flex-wrap flex-col justify-around  h-full content-between items-center"
    sveltekit:prefetch
    href={link}
  >
    <span><svelte:component this={svgs[svg]} /></span>
    <span class="text-[13px]">{text}</span>
  </a>
{:else}
  <a
    class="w-full flex flex-wrap flex-col no-decoration justify-around  h-full content-between items-center"
    sveltekit:prefetch
    href={link}
  >
    <span><svelte:component this={svgs[svg]} fillColor="#D69330" /></span>
    <span class="text-[13px] font-bold">{text}</span>
  </a>
{/if}
