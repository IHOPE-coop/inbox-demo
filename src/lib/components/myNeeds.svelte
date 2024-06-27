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
  
  <h1 class="my-2">Things I Need</h1>
  <form {onsubmit} class="mb-4">
    <Input type="text" placeholder="Hit Enter to add need" class="w-auto" bind:value={input}></Input>
  </form>
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
  