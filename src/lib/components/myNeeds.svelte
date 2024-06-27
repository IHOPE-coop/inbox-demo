<script lang="ts">
    import { Input } from "./ui/input";
    import { ScrollArea } from "./ui/scroll-area";
    import { Separator } from "./ui/separator";
    type Props = {entries: Array<string>};
    let {entries = $bindable([])}: Props = $props();
    let input = $state("");

    function onsubmit() {
        entries.push(input);
    }
</script>

<div class="grid grid-cols-3 grid-rows-1 gap-4">
    <div>
        <h1>Things I Need</h1>
    </div>
    <div class="col-span-2">
        <form {onsubmit} class="mb-4">
            <Input type="text" placeholder="Hit Enter to add need" class="w-full" bind:value={input}></Input>
        </form>
    </div>
</div>
<ScrollArea class="h-48 w-full rounded-md border">
    <ul>
    {#each entries as entry}
        <li class="text-sm my-2">
            {entry}
        </li>
        <Separator/>
    {/each}
    </ul>
</ScrollArea>
