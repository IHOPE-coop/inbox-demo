<script lang="ts">
    import Ledger from "$lib/components/ledger.svelte";
    import MyNeeds from "$lib/components/myNeeds.svelte";
    import OtherNeeds from "$lib/components/otherNeeds.svelte";
    let entries = $state(Array.from({ length: 3 }).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`
    ));
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<MyNeeds bind:entries={entries}></MyNeeds>
<OtherNeeds name="Harley" {entries}></OtherNeeds>
<Ledger {entries}></Ledger>
