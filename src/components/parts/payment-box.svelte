<script lang="ts">
  import { t } from "$lib/translations";
  import Button from "../base/Button.svelte";

  export let paid = false;
  export let deadline = "31. jan. 2023";
  export let deadline_close = false;
  export let name = "Depositum";
  export let price = 3500;
  export let currency = "DKK";
</script>

<div
  class="payment-box py-5"
  class:text-faded-blue={paid}
  >
  <div class="flex justify-between pb-4 text-lg">
    <div>
      <strong>{ name }</strong>
    </div>
    <div>
      <strong>{ price } { currency }</strong>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="flex flex-col justify-center">
      <p>
        <strong>{ $t(`common.payment.${paid ? "paid" : "payment_deadline"}`) }</strong>
        <br />
        <span class:text-red-500={deadline_close}>
        { deadline }
        </span>
      </p>
    </div>
    <div>
      <Button disabled={paid}>
        { $t(`common.payment.${paid ? "paid" : "pay_now"}`) }
      </Button>
    </div>
  </div>

</div>
<hr />

<style>
</style>
