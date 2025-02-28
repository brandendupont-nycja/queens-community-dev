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


    
   <Collapsible.Root class="md:w-[250px] w-full space-y-2  bg-black ">
    <div class="flex items-center justify-between space-x-4 pr-4">
     <h4 class="text-md font-semibold text-white p-3 ">Table of Contents</h4>
     <Collapsible.Trigger asChild let:builder>
      <Button builders={[builder]} variant="ghost" size="sm" class="w-9 p-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFC413" class="size-5">
            <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
          </svg>
          
      
      </Button>
     </Collapsible.Trigger>
    </div>
    <Collapsible.Content class="space-y-2 text-white overflow-y-auto">
    <div class="border-b border-t border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
        
        <a href="#community-map" on:click={handleAnchorClick}>
         Community Partnerships Division Attends Over 3,000 Events
        </a>
        </div>
     <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
        <a href="#active-presence" on:click={handleAnchorClick}>
         A Large and Active Presence In the Community
        </a>
     </div>
     <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
      <a href="#youth-dev-crim-prevention" on:click={handleAnchorClick}>
         The Queens County DA's Office Invests Millions in Youth Development and Crime Prevention
      </a>
   </div>
   <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
      <a href="#youth-empowerment-unit" on:click={handleAnchorClick}>
         The Youth Empowerment Unit is in Every School District in Queens
      </a>
   </div>
    
    </Collapsible.Content>
   </Collapsible.Root>