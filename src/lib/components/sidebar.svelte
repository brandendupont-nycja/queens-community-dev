<script lang="ts">
    import * as Sheet from "$lib/components/ui/sheet/index.js";
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
    
   <Sheet.Root>
    <Sheet.Trigger asChild let:builder>
     <Button builders={[builder]} variant="outline">        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFC413" class="size-5">
        <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clip-rule="evenodd" />
      </svg>
    </Button>
    </Sheet.Trigger>
    <Sheet.Content class="bg-black" side="right">
        <div class="flex items-center justify-between space-x-4 pr-4">
            <h4 class="text-sm font-semibold text-white p-3 font-mono">Navigate the Report</h4>
            <Sheet.Close asChild let:builder>
                <Button builders={[builder]} type="submit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFC413" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  </Button>
                </Sheet.Close>                
     
           </div>
        <div class="space-y-1 text-white overflow-y-auto">
            <div class="border-b border-t border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
                
                <a href="#anchor-pfa-background" >
                    PFA Background
                </a>
                </div>
             <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
                <a href="#anchor-loyola-evaluation" >
                 Loyola Center for Criminal Justice’s Evaluation
                </a>
             </div>
             <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
              <a href="#anchor-prior-findings" >
                 Prior Evaluation Findings
              </a>
           </div>
             <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
              <a href="#anchor-pretrial-decision-change" >
                 How Has Pretrial Hearing and Decision-Making Practice Changed Under the PFA?
              </a>
             </div>
             <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
               <a href="#anchor-eligible-detention-detained" >
                 Who is Eligible for Detention and Who is Being Detained Under the PFA?
              </a>
             </div>
             <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
              <a href="#anchor-detention-release-changed" >
                 How Have Detention and Release Rates Changed under the PFA?
             </a>
            </div>
            <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
              <a href="#anchor-jail-pretrial-change" >
                 How Have Jail and Pretrial Supervision Populations Changed Under the PFA?
             </a>
            </div>
            <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
              <a href="#anchor-pretrial-supervision" >
                 Pretrial Supervision
             </a>
            </div>
            <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
              <a href="#anchor-electronic-monitoring" >
                 Electronic Monitoring
             </a>
            </div>
            <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
              <a href="#anchor-fta" >
                 How Has Hearing Attendance Changed Under the PFA?
             </a>
            </div>
            <div class="border-b border-white px-4 py-2  text-xs hover:text-yellow hover:text-underline">
              <a href="#anchor-crime" >
                 What Can We Say About Crime and Public Safety Under the PFA So Far?
             </a>
            </div>
        
        </div>
    </Sheet.Content>
   </Sheet.Root>