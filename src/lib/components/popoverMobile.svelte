<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";

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
    
   <Popover.Root portal={null}>
    <Popover.Trigger asChild let:builder>
     <Button builders={[builder]} variant="outline"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFC413" class="size-5">
        <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
      </svg></Button>

    </Popover.Trigger>
    <Popover.Content class="bg-black" side="right">

        <div class="space-y-1 text-white overflow-y-auto">
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
        
        </div>
    </Popover.Content>
   </Popover.Root>