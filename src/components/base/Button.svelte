<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let loading = false;
  export let disabled = false;

  const dispatch = createEventDispatcher();

  function isDisabled() {
    return disabled || loading;
  }
</script>

<button
  class="w-full rounded p-[13px] text-white font-bold leading-[150%]"
  class:bg-secondary={!isDisabled()}
  class:bg-faded-blue={isDisabled()}
  class:disabled={isDisabled()}
  on:click={() => dispatch('click')}>
  <slot />
</button>
