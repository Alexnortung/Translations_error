<script lang="ts">
  import { t } from "$lib/translations";
  import { page } from "$app/stores";
  import MediaQuery from "$lib/MediaQuery.svelte";
  import Language from "./parts/language.svelte";
  import Item from "./parts/Item.svelte";
  import ItemsDesktop from "./parts/items-desktop.svelte";
  import logoImage from "./SVG/logoImage.svelte";
</script>

<MediaQuery query="(max-width: 600px)" let:matches>
  {#if matches}
    <header
      class="fixed bottom-0 sm:top-0 w-full border-t-faded-default border-[1px]"
    >
      <nav class="py-4 px-2 flex justify-center">
        <ul class="grid grid-cols-4 w-full justify-items-center">
          <li class="h-ful ">
            <Item
              active={$page.url.pathname === "/booking"}
              link="/booking"
              text={$t("common.menu.booking")}
              svg="person"
            />
          </li>
          <li class="h-full">
            <Item
              active={$page.url.pathname === "/payment"}
              link="/payment"
              text={$t("common.menu.payment")}
              svg="payment"
            />
          </li>
          <li class="h-full">
            <Item
              active={$page.url.pathname === "/guide"}
              link="/guide"
              text={$t("common.menu.guide")}
              svg="guide"
            />
          </li>
          <li class="h-full">
            <Item
              active={$page.url.pathname === "/help"}
              link="/help"
              text={$t("common.menu.help")}
              svg="help"
            />
          </li>
        </ul>
      </nav>
    </header>
  {/if}
</MediaQuery>

<header
  class=" flex justify-around items-center top-0 w-full py-4 sm:py-0  border-t-faded-default border-[1px]"
>
  <div class="logo">
    <a class="w-[70px] h-[70px]" href="/">
      <svelte:component this={logoImage} />
    </a>
  </div>
  <MediaQuery query="(min-width: 600px)" let:matches>
    {#if matches}
      <nav class="px-2 flex justify-center">
        <ul
          class="flex  flex-wrap space-x-4 sm:space-x-8 md:space-x-16 lg:space-x-18"
        >
          <ItemsDesktop
            text={$t("common.menu-desktop.booking")}
            link="/booking"
          />
          <ItemsDesktop text={$t("common.menu-desktop.guide")} link="/guide" />
          <ItemsDesktop text={$t("common.menu-desktop.help")} link="/help" />
          <ItemsDesktop
            text={$t("common.menu-desktop.contact")}
            link="/contact"
          />
        </ul>
      </nav>
    {/if}
  </MediaQuery>
  <Language />
</header>
