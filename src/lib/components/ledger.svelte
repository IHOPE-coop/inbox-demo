<script lang="ts">
  import { ScrollArea } from "./ui/scroll-area";
  import { Separator } from "./ui/separator";
  type Props = {entries: Array<string>};
  let {entries}: Props = $props();
</script>

<h1 class="my-2">Ledger</h1>
<ScrollArea class="h-48 w-64 rounded-md border">
    <ul>
        {#each entries as entry}
        <li class="text-sm my-2">
            {entry}
        </li>
        <Separator/>
    {/each}
    </ul>
</ScrollArea>
