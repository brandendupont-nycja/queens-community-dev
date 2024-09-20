<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";
    export let citationNumber
   </script>
    
   <Popover.Root portal={null}>
    <Popover.Trigger asChild let:builder>
     <Button builders={[builder]} variant="outline">{citationNumber}</Button>

    </Popover.Trigger>
    <Popover.Content class=" bg-gray-50 shadow-xs hover:shadow-lg border-r-[7px] border-b-[7px] border-black  rounded-lg mt-4 ">
        <div class="">
     <div class="">
        <slot>
            <em>no content was provided</em>
        </slot>
     </div>
     <div></div>
    </Popover.Content>
   </Popover.Root>