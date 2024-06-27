<script lang="ts">
    import { ScrollArea } from "./ui/scroll-area";
    import { Separator } from "./ui/separator";
    type Props = {name: string, entries: Array<string>};
    let {name, entries}: Props = $props();
</script>

<h1>Things {name} Needs</h1>
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
  