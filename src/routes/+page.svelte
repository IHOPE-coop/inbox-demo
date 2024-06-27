<script lang="ts">
    import Ledger from "$lib/components/ledger.svelte";
    import MyNeeds from "$lib/components/myNeeds.svelte";
    import Notifications from "$lib/components/notifications.svelte";
    import OtherNeeds from "$lib/components/otherNeeds.svelte";
    let entries = $state(Array.from({ length: 3 }).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`
    ));
</script>

<h1>Nathan's Page</h1>
<div class="grid grid-cols-2 grid-rows-2 gap-4 h-3/5" >
    <div class="m-6">
        <MyNeeds bind:entries={entries}></MyNeeds>
    </div>
    <div class="m-6">
        <Notifications {entries}></Notifications>
    </div>
    <div class="m-6">
        <OtherNeeds name="Harley" {entries}></OtherNeeds>
    </div>
    <div class="m-6">
        <Ledger {entries}></Ledger>
    </div>
</div>
