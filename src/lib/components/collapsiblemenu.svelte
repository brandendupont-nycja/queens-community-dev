<script lang="ts">
    import * as Collapsible from "$lib/components/ui/collapsible/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

    function handleAnchorClick (event) {
		event.preventDefault()
		const link = event.currentTarget
		const anchorId = new URL(link.href).hash.replace('#', '')
		const anchor = document.getElementById(anchorId)
		window.scrollTo({
			top: anchor.offsetTop,
			behavior: 'smooth'
		})
	}
   </script>


    
   <Collapsible.Root class="w-[250px] space-y-2 z-50 float-right md:block hidden  bg-black">
    <div class="flex items-center justify-between space-x-4 pr-4">
     <h4 class="text-sm font-semibold text-white p-3">Navigate the Report</h4>
     <Collapsible.Trigger asChild let:builder>
      <Button builders={[builder]} variant="ghost" size="sm" class="w-9 p-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFC413" class="size-5">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
          </svg>
          
      
      </Button>
     </Collapsible.Trigger>
    </div>
    <Collapsible.Content class="space-y-2 text-white">
    <div class="border-b border-t border-white px-4 py-2 font-mono text-xs hover:text-yellow hover:text-underline">
        
        <a href="#anchor-pfa-background" on:click={handleAnchorClick}>
            PFA Background
        </a>
        </div>
     <div class="border-b border-white px-4 py-2 font-mono text-xs">
        Prior Evaluation Findings
     </div>
     <div class="border-b border-white px-4 py-2 font-mono text-xs">
        How Has Pretrial Hearing and Decision-Making Practice Changed Under the PFA?
     </div>
     <div class=" px-4 py-2 font-mono text-xs">
        Who is Eligible for Detention and Who is Being Detained Under the PFA?
     </div>
    </Collapsible.Content>
   </Collapsible.Root>