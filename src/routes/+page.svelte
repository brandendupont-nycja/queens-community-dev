<script lang="ts">
  import Link from './../lib/components/link.svelte'
  import { scaleOrdinal, scaleQuantile, scaleSqrt, scaleThreshold  } from 'd3-scale'; 
  import { geoMercator } from 'd3-geo';
  import { feature } from 'topojson-client';
  import { index, max } from 'd3-array';
  import { forceX, forceY, forceCollide,  forceManyBody, } from 'd3-force';
  import { Text } from 'layerchart';

  import { Axis, Chart, Circle, ForceSimulation, Svg, Tooltip, TooltipItem, ChartClipPath, GeoPath,  Highlight  } from 'layerchart';
  import HeroImage from "../lib/components/heroImage.svelte"
  import Block from './../lib/components/block.svelte';
  import TextBlock from './../lib/components/text.svelte';
  import AccordianBlock from './../lib/components/accordianBlock.svelte';
  import PopOver from './../lib/components/popover.svelte';
  import Sidebar from './../lib/components/sidebar.svelte';
  import Menu from './../lib/components/collapsiblemenu.svelte';
  
  import { Button } from "$lib/components/ui/button";
  import  data  from './detention-eligible-by-county-detention-eligible-by-county (1).csv';

  import Scroller from '$lib/components/scroller.svelte';
  const genderColor = scaleOrdinal(['#02AEFF', '#FFC413']);

  const xForce = forceX().strength(4);
  const yForce = forceY().strength(0.075);
  const collideForce = forceCollide();

  const maxRadius = 25;
  const rScale = scaleSqrt()
    .domain([0, 1134 ?? 0])
    .range([0, maxRadius]);


let swarmChart = (d) => d.both
let swarmDescription = "Petition to Detain"
let isSelected = 1

function not_petitioned() {
  swarmChart =  (d) => d.detention_eligible_cases_detained;
  swarmDescription = "Not Petitioned" 
  isSelected = 2
}
function petitioned_not_detained() {
  swarmChart =  (d) => d.detention_petition_filed_but_denied;
  swarmDescription = "Petition Not Detained"
  isSelected = 3
}
function detained() {
  swarmChart =  (d) => d.detention_eligible_no_petition_filed;
  swarmDescription = "Detained"
  isSelected = 4
}
function both() {
  swarmChart =  (d) => d.both;
  swarmDescription = "Petition to Detain";
  isSelected = 1}

 </script>

<HeroImage />

<div class="sm:sticky xl:top-[1vh] 2xl:top-[10vh] z-50 sm:float-right float-none md:block hidden ">
  <Menu/>
</div>

<div class=" sm:hidden sticky top-0 z-50">
  <div class="flex items-center justify-between space-x-4 pr-4 bg-black mb-10 ">
    <h4 class="text-sm font-semibold text-white p-3 font-mono">Navigate the Report</h4>
    <Sidebar></Sidebar>      

   </div>
</div>

<Block>

  
</Block>

<Block>
  
  <TextBlock>
    <div class="first-letter:text-7xl first-letter:text-black first-letter:font-sans first-letter:pr-1 first-letter:pb-1 first-letter:float-left ">
  The Pretrial Fairness Act (PFA) has now been in operation in Illinois for one full year. Beginning September 18, 2023, the PFA fundamentally altered pretrial practices in Illinois. The law eliminated the use of cash bail in all criminal cases, prohibited pretrial detention altogether for most defendants, and established new and uniform processes, timelines and decision standards for pretrial detention and release hearings, among many other changes. What can we say about the workings and effects of the new law at the one-year point?


</div>
</TextBlock>

<TextBlock>
  We now have data from a variety of state and local sources that give us a picture of the ways Illinois pretrial detention and release practice and decision-making have changed since a year ago, and the varying effects being felt in local jails and courthouses. It’s still early, of course, for any kind of definitive findings—our evaluation is ongoing, and will run at least through December 2025. Ultimate questions about the effects of the new law on defendants, on court and jail operations, and on public safety can’t be answered till more time has passed and more data becomes available. Moreover, one of our most consistent findings is that the effects of the PFA vary by county and region, making even simple generalizations about its “statewide” effects problematic, if not meaningless. 
</TextBlock>
<TextBlock>
  This report is intended to provide a snapshot of what we’re learning, at a significant point in time. We can say something about the kinds of cases in which detention is being sought and granted, and the kinds of conditions being imposed on those who are released pretrial. We have some limited information from which to judge the extent to which people released under the PFA are successfully abiding by the law and returning to court.
</TextBlock>


<TextBlock>
  And we know that this information, though provisional, is of vital interest to the public and the field.
</TextBlock>

<TextBlock>
  We’ll continue to share findings, insights, and questions as they emerge. And in the meantime, where possible, we have worked with state and local agencies to make the data we are using for our evaluation accessible to the public through data tools on our website. <PopOver number={"[1]"} >For example, we collaborated with IDOC to develop a data dashboard tracking the number of people booked each month into <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/illinois-jail-population-tracker"}> county jails</a>. See <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/tracking-the-cook-county-jail-and-community-corrections-population"}>also our Cook County Jail Tracker</a>. </PopOver >
</TextBlock>

<AccordianBlock />



<h2 id="anchor-pretrial-decision-change" class="text-4xl font-semibold pt-32 pb-4">
  How Has Pretrial Hearing and Decision-Making Practice Changed Under the PFA?
</h2>



<TextBlock>
  Both court observations and interviews with practitioners confirmed that the PFA has fundamentally changed pretrial practice in Illinois. 
</TextBlock>

<TextBlock>
  Our observations of pretrial hearings in multiple counties, <PopOver number={"[9]"} >We observed pretrial hearings in a total of 1,767 cases in Cook and 7 other mostly urban counties, including DuPage, Kane, Lake, McLean, Will, Williamson, and Winnebago. (On a daily basis, a relatively small number of pretrial hearings occur in most rural counties, and often on an ad hoc basis; both the low volume and the unpredictability of hearings make court observation efforts difficult in these counties.) Hearings were observed in the summer of 2022, in the final months of 2023 (first few months of PFA implementation), and again in the summer of 2024, using a structured data collection instrument completed by trained court watchers.</PopOver > including pre- and post-implementation observations in four counties, <PopOver number={"[10]"} >Cook, Winnebago, Lake and McLean.</PopOver >indicated that, at least when detention was at issue, PFA hearings were longer and more deliberative than pre-PFA bail hearings. In particular, PFA hearings featured more discussion, a broader range of issues, closer scrutiny of the evidence, and a tighter focus on risk.
</TextBlock>


<TextBlock>

  <ul class="list-disc ">
    <li>
<b class="text-lg font-bold ">Duration of Hearings.</b>  In the counties where we observed hearings before and after PFA implementation, we noted a significant increase in the duration of detention hearings. Before the PFA, bond court hearings observed were almost uniformly short, with median lengths between 4 and 6 minutes. Post-PFA “conditions” hearings, in which the only issues concerned terms and conditions of release, were also short, with medians between 4 and 5 minutes. But hearings in which the state sought detention took longer in all the counties we visited, with median lengths that varied from 10 to 30 minutes. In more complex and contested cases, we observed detention hearings that lasted close to an hour—an unheard-of length in the period before the PFA.
</li>
<div class="mt-10"></div>
<div class="mt-10 mb-10">
<iframe title="After the PFA, hearings in which detention was at issue were significantly longer in all counties." aria-label="Dot Plot" id="datawrapper-chart-XBdRl" src="https://datawrapper.dwcdn.net/XBdRl/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="402" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
</div>
<hr />
<div class="mt-10"></div>
<li>
<b class="text-lg font-bold space-y-2">Issues Raised.</b>  Prior to the PFA, in all counties observed, bond court hearings featured little individualized argumentation. Following PFA implementation, hearing argumentation was more varied and substantive. Both prosecution and defense raised a broader range of case-specific issues, there was more examination of the evidence and its weight, and the two sides were more likely to engage directly on a common set of factors acknowledged to be relevant to the detention/release decision. 
</li>

<li>
<b class="text-lg font-bold space-y-2">Reasons for Decisions.</b>  Prior to the PFA, it was common practice for judges to issue bond decisions without citing any reasons for them: in the courts we observed, bond decisions were announced without articulated reasons between 49% and 88% of the time. After the PFA took effect, judges in the same four counties more often cited reasons for their decisions, and always in cases in which detention was at issue. And those reasons were more likely to relate to the facts and case characteristics raised by the parties. 
</li>

  </ul>


</TextBlock>


<TextBlock>
  <div class="mb-10 mt-10">
  <iframe title="Pre-PFA bond hearings featured little overlap in factors cited for and against monetary bail. Rarely did judges provide reasons for imposing bail." aria-label="Split Bars" id="datawrapper-chart-HrEmB" src="https://datawrapper.dwcdn.net/HrEmB/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="557" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
  </script>
  </div>
  <hr/>
</TextBlock>


<TextBlock>

<div class="mb-10  mt-10">
  <iframe title="Post-PFA detention hearings featured more overlap AND more diversity in factors considered." aria-label="Split Bars" id="datawrapper-chart-IVMk9" src="https://datawrapper.dwcdn.net/IVMk9/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="514" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
  </script>
  </div>
  <hr/>
  
</TextBlock>

<TextBlock>
  Practitioners involved in detention and release proceedings at the county level confirmed these basic trends. One clear theme of our practitioner interviews, which are ongoing, concerns the ways that the PFA has resulted in the prioritization and frontloading of detention cases. Both by limiting the availability of detention and by requiring that the state signal its intention to detain early in the process, the law has had the effect of dividing what had been an undifferentiated mass of bond court cases into two groups, which are handled very differently:

</TextBlock>


<TextBlock>

  <ul class="list-disc space-y-2">

    
<li>
<b class="text-lg font-bold">“Conditions” cases.</b> In the mass of cases where detention is not at issue—either because it’s not a detention-eligible charge or because the state is not seeking it—the process of determining appropriate conditions of release is relatively simple. Hearings tend to be shorter and less intensive, and often feature little substantive dispute. <PopOver number={"[11]"} >As one public defender put it, “We know we don't have to spend a lot of time” with pretrial preparation in cases where release is guaranteed. And conditions of release in such cases are often standardized and predictable. “Like a domestic battery: I know that the judge is going to order no contact \[with the alleged victim]…I usually don't think it makes sense to make any arguments regarding that. I know that's a condition that's going to happen.”</PopOver >
</li>
<li>
 <b class="text-lg font-bold">Detention cases.</b> Cases in which detention is sought, on the other hand, absorb far more of prosecutors’, defenders’ and courts’ attention and resources. The process is frontloaded—decisions must be made quickly, and information must be reviewed and shared on tight deadlines. More hearing preparation is required, discovery is more extensive, and hearings themselves are more formal, more resource-intensive, more complex, and more structured than pre-PFA bond court hearings.
</li>
  </ul>
  
</TextBlock>

<TextBlock>
  Both defenders and prosecutors reported being challenged by the new demands and deadlines imposed by the PFA. The law puts a particular strain on already-strapped and short-handed defenders, <PopOver number={"[12]"} >“You know, we're public defenders, and so we have pretty big caseloads to begin with. And so if you add a daily call on top of our already large caseloads, and it's a call that we have no idea, you know—I get an email at 5:00 every morning letting me know how many people are in custody. It could be zero, it could be 10, and that really changes your day.”</PopOver > and new state funding for defense doesn’t necessarily fix the problem. <PopOver number={"[13]"} >In response to new workload demands anticipated under the PFA, the General Assembly made $10 million in additional funding available in fiscal year 2024, to be distributed by the Illinois Supreme Court to indigent defense programs outside of Cook County. However, defenders repeatedly reported not being able to use this funding to attract qualified candidates. “Folks are not applying for this position,” one told us. “The number one problem I'm facing is finding lawyers who are qualified for the slots I have available,” said another.</PopOver >

    
  </TextBlock>


  <TextBlock>
    The PFA creates new responsibilities and burdens for prosecutors as well. Previously, prosecutors generally made only cursory presentations in bond hearings, and often no specific recommendations as to bond amount. The PFA now requires them to review reports, evidence and criminal histories in every case eligible for detention, <PopOver number={"[14]"} >“Some days that's 50 pages, some days that's 400 pages.”</PopOver > decide whether or not to file a petition, assemble and share all relevant discovery materials, and mount a persuasive case for detention, usually all on the same day. <PopOver number={"[15]"} >“In bond court, you would basically argue the factual summary or the factual synopsis and their Pretrial Services report. Now, I mean, I'm going back decades….It takes everything in our power to be ready by 1:30.”</PopOver >

      
    </TextBlock>
    <TextBlock>
      For judges, the PFA’s detention eligibility rules, decision standards, and required findings necessitate a more structured and formal approach to pretrial hearings. Accordingly, at least in the early going, they have been conducting PFA hearings with an eye to transparency, being careful to articulate reasons for their decisions, point to case-specific facts to support them, and establish an adequate record for subsequent appellate review. <PopOver number={"[16]"} >This pattern of caution, which we consistently observed in PFA hearings over the past year, may well reflect the novelty of the law and the heightened awareness of the appealability of detention decisions. In fact, the PFA generated an unexpectedly high volume of appeals during its first three months, including 1,899 direct appeals from detention/release decisions—more than ten times the number of similar appeals filed in the preceding decade.</PopOver >       
      </TextBlock>

  <h2 id="anchor-eligible-detention-detained" class="text-4xl font-semibold pt-4 pb-4">
    Who is Eligible for Detention and Who is Being Detained Under the PFA?
  </h2>

  <TextBlock>
    The PFA makes pretrial release mandatory, except for two broad groups, who are eligible for pretrial detention subject to the required proofs: (1) a “public safety” group consisting of those accused of a set of specified violent and/or serious offenses and shown to pose a risk to public safety, <PopOver number={"[17]"} >Offenses eligible for pretrial detention under the public safety consideration include: “forcible” felonies, “nonprobationable” felonies (i.e. one that would require imprisonment upon conviction), weapons offenses, felony and misdemeanor domestic battery, and violation of orders of protection. Offenses eligible for pretrial detention under the willful flight consideration include: all Class 3, Class 2, and Class 1 Felonies. Offenses ineligible for pretrial detention include all Class 4 Felonies and all misdemeanors, unless captured in one of the detainable categories.</PopOver > and (2) a “risk of flight” group including those accused of any felonies above the level of Class 4 and shown to pose a risk of flight from prosecution. (To justify detention of an individual in either group, it must also be shown that no release condition would acceptably mitigate the risk.) While the latter eligibility group is potentially much larger, in practice few detention cases in the PFA’s first year have been justified under the flight-risk exception. Accordingly, unless otherwise noted, when we focus on the universe of “detainable” cases in this report, we are discussing cases falling within the public safety exception.    
  </TextBlock>

  <TextBlock>
    What offenses are charged against those eligible for detention on public safety grounds? Combining data from the 77 counties served by the Office of Statewide Pretrial Services (OSPS) with data from an additional 11 non-OSPS counties plus Cook County (a total of 89 of Illinois’ 102 counties) provides a useful picture here. <PopOver number={"[18]"} >Because it operates across a large and growing number of Illinois counties—including many downstate and rural counties—OSPS is an invaluable source of detention petition and outcome information under the PFA. In the counties covered by OSPS, the agency performs pretrial investigations on all defendants being held overnight in jail pending PFA detention or conditions hearings. From the PFA’s September 18, 2023 effective date through July 26, 2024, OSPS either conducted pretrial investigations or was ordered to provide pretrial services in 8,760 cases meeting offense-level criteria for public safety detention.</PopOver > Still, it is important to point out that Cook County accounts for a majority (59%) of the cases from these 89 counties. Out of nearly 25,000 detention-eligible cases filed across these 89 counties  during the PFA’s first ten months, more than half (53%) involved domestic violence charges—including 46% in which the top charges were misdemeanor domestic batteries or violations of orders of protection (VOOP), and another 7% in which the top charges were felony-level offenses of the same kind. <PopOver number={"[19]"} >This is consistent with Loyola’s pre-PFA  <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/estimate-pfa-act"}>projections</a> based on analysis of historical arrest data.</PopOver > The remaining detention-eligible cases (nondomestic) included top charges involving forcible felonies, and nonprobationable firearm possession, property, or drug-law violation offenses.
  </TextBlock>

  <TextBlock>

    <div class="mb-10  mt-10">
      <iframe title="Out of nearly 25,000 detainable cases filed across 89 counties, 53% involved domestic violence charges." aria-label="Bar Chart" id="datawrapper-chart-rXa70" src="https://datawrapper.dwcdn.net/rXa70/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="271" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
      </script>
      </div>
      <hr/>
      
    </TextBlock>


  <TextBlock>
    How were these cases handled? The short answer is that, out of the whole group of close to 25,000 cases, about 39% had a petition for detention filed, and about 24% of the 25,000 cases were in fact detained pretrial. The proportions that were petitioned and detained varied according to the types of charges involved, as you might expect. Almost three-quarters of misdemeanor domestic battery/VOOP went unpetitioned, compared with only 27%  of felony-level domestic batteries/VOOP offenses. By comparison, 50% of all the non-domestic violence cases eligible for detention were not petitioned for detention. Overall, across these 89 counties combined,  only 9% of cases involving misdemeanor domestic battery/VOOP were actually detained, while 45% of those charged with a felony-level domestic battery/VOOP were detained and 36% of those charged with the other detainable offenses  ended up detained. However, the percent of eligible cases petitioned for detention and detained was lower in Cook County than in the other 88 counties combined, and because Cook County accounts for such as large share of the cases included in the analyses, their practices influence these overall rates.  
  </TextBlock>

  <TextBlock>

    <div class="mb-10  mt-10">
      <iframe title="Of the nearly 25,000 detainable cases filed in 89 counties, 24% were detained. " aria-label="Stacked Columns" id="datawrapper-chart-Hio3i" src="https://datawrapper.dwcdn.net/Hio3i/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="438" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
  </script>
      </div>
      <hr/>
      
    </TextBlock>


  <TextBlock>
    But it isn’t just that Cook County and other counties differed. In reality both the likelihood of a detention petition being filed and the likelihood of its being granted varied widely across individual counties. In the 89 counties examined, 31 processed at least 100 detention-eligible cases since the PFA went into effect, <PopOver number={["[20]"]} >Counties with fewer than 100 cases since the PFA went into effect, which translates into less than ten per month, were excluded from this analysis.</PopOver > and across these 31 counties petition rates varied all the way from 15% to 95% (i.e., what percent of eligible cases were petitioned for detention), and detention rates from 11% to more than 50% (i.e., what percent of eligible cases were actually detained). Thus, while producing measures at the state-level are useful, recognizing that there is considerable variation across individual counties is important to understanding how the PFA is being implemented across a diverse state.    
    </TextBlock>

</Block>

<div id="chart-container" class="max-w-[1400px] mx-auto  mt-[100px] sm:pr-0 sm:pl-0 pl-10 pr-10 ">
  <h2 class="text-2xl font-semibold mb-4  max-w-[700px] mx-auto">Of the cases with a detainable offense, the percent with a detention petition filed and the percent resulting in detention varied across Illinois counties. </h2>

  <div class="text-black  max-w-[700px] text-md max-w-3xl mx-auto">
    <div class=" mb-4 mt-2">In some counties, over 70% of defendants charged with detainable offense faced a petition to detain, while in other counties less than 30% faced a petition to detain. </div>
    <div class="inline-block align-middle">Each  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#02AEFF" class="size-4 inline-block align-middle">
      <path  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"  />
    </svg>   is one of 32 Illinois counties with >100 cases scaled by the number of detainable cases.</div>
  </div>


  <div>

  <div class="grid place-content-center mb-10 mt-10 ">
  <span class="inline-flex  rounded-md border bg-white shadow-sm ">
    <button
      class="inline-block border-black border-e sm:px-8 sm:py-2 sm:text-sm px-4 py-2 border-2 text-xs font-medium  { isSelected === 1 ? 'bg-black text-white' : 'bg-white text-black'} hover:bg-black hover:text-white focus:relative"
      on:click={both}
    >
     Petition to Detain
    </button>
        <button
        class="inline-block border-black border-e sm:px-8 sm:py-2 sm:text-sm px-4 py-2 text-xs border-2 font-medium font-medium { isSelected === 2 ? 'bg-black text-white' : 'bg-white text-black'} hover:bg-black hover:text-white focus:relative"
        on:click={not_petitioned}
      >
      Not petitioned
      </button>
      <button
      class="inline-block  sm:px-8 sm:py-2 sm:text-sm px-4 py-2 text-xs font-medium border-black border-2 border-e text-sm font-medium { isSelected === 3 ? 'bg-black text-white' : 'bg-white text-black'} hover:bg-black hover:text-white focus:relative"
      on:click={petitioned_not_detained}
    >
    Petitioned Not Detained
    </button>
    <button
    class="inline-block  sm:px-8 sm:py-2 sm:text-sm px-4 py-2 text-xs font-medium border-black border-2 border-e text-sm font-medium { isSelected === 4 ? 'bg-black text-white' : 'bg-white text-black'} hover:bg-black hover:text-white focus:relative"
    on:click={detained}
    >
    Detained
    </button>
  

  </span>
</div>

</div>
  
    <div class="h-[300px] sm:block hidden  p-4 z-index-10  ">
      <Chart
        data={data}
        x={swarmChart}
        xNice
        xDomain={[0, 1]}       
        padding={{ top: 12, left: 8, right: 8 }}
        let:xGet
        let:height
        let:tooltip
      >
        {@const r = 14}
        <Svg>
          <Axis rule={{ class: "stroke-none text-black" }} placement="top" format="percentRound"   tickLabelProps={{
            class: "fill-black text-black text-lg z-index-10",
          }}  
           
          grid={{ style: " stroke: #bcbcbc; color:red" }}
   />
          <ForceSimulation
            forces={{
              x: xForce.x((d) => xGet(d)),
              y: yForce.y(height / 2),
              collide: collideForce.radius(d => rScale(d.size)+1),
              charge: forceManyBody().strength(4),
              
            }}
            static={true}
            cloneData
            let:nodes
          >
            {#each nodes as node}
  
            
  
              <Circle
                cx={node.x}
                cy={node.y}
                r={rScale(node.size)+1}
                fill={genderColor(node.party)}
                class="stroke-surface-100  hover:stroke-black "
                on:pointermove={(e) => tooltip.show(e, node)}
                on:pointerleave={tooltip.hide}
              />
  
            {/each}
     
          </ForceSimulation>
          
        </Svg>
  
  
        <Tooltip class='border-solid border border-black rounded-none  bg-white opacity-100'  let:data>           
          <TooltipItem label="Number of Detainable Cases" value={Math.round(data.detained_cases)} />
          <TooltipItem label="Not Petitioned" value={Math.round(data.detention_eligible_cases_detained*100)}% />
          <TooltipItem label="Petitioned Not Detained" value={Math.round(data.detention_petition_filed_but_denied*100)}% />
          <TooltipItem label="Detained" value={Math.round(data.detention_eligible_no_petition_filed*100)}% />
          <TooltipItem label="Petition to Detain," value={Math.round(data.both*100)}% />
        </Tooltip>
      </Chart>


    </div>
    <div class="flex   justify-center sm:mb-0 mb-10  gap-10">
  
      <div class="grid grid-rows-2 justify-items-start">
    
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
      </svg>
    
      <span class="text-xs">Less {swarmDescription}</span>
    
    </div>  
    
      <div class="sm:text-md  text-sm mt-4 font-semibold  ">Percent of Cases {swarmDescription} by County</div>
    
      <div class="grid grid-rows-2 justify-items-end">
    
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      
        <span class=text-xs>More {swarmDescription}</span>
      </div>  
    
    </div>

    <div class="h-[900px] pr-20 pl-0 sm:hidden   z-index-10  ">
      <Chart
        data={data}
        y={(d) => d.both}
        yNice
        yDomain={[0, 1]}       
        padding={{ top: 12, left: 2,right: 6 }}
        let:yGet
        let:height
        let:tooltip
      >
        {@const r = 14}
        <Svg>
          <Axis rule={{ class: "stroke-none text-black" }} placement="right" format="percent"   tickLabelProps={{
            class: "fill-black text-black text-sm z-index-10",
          }}  
           
          grid={{ style: " stroke: #bcbcbc; color:red" }}
   />
          <ForceSimulation
            forces={{
              y: yForce.y((d) => yGet(d)),
              x: xForce.x(height / 8),
              collide: collideForce.radius(d => rScale(d.size)+1),
              charge: forceManyBody().strength(4),
            }}
            static={true}
            cloneData
            let:nodes
          >
            {#each nodes as node}
  
            
  
              <Circle
                cx={node.x}
                cy={node.y}
                r={rScale(node.size)+1}
                fill={genderColor(node.party)}
                class="stroke-surface-100  hover:stroke-black "
                on:pointermove={(e) => tooltip.show(e, node)}
                on:pointerleave={tooltip.hide}
              />
  
            {/each}
     
          </ForceSimulation>
          
        </Svg>
     
  
        <Tooltip class='border-solid border border-black rounded-none  bg-white opacity-100 max-w-[200px]'  let:data>           
          <TooltipItem label="Number of Detainable Cases" value={Math.round(data.detained_cases)} />
          <TooltipItem label="Not Petitioned" value={Math.round(data.detention_eligible_cases_detained*100)}% />
          <TooltipItem label="Petitioned Not Detained" value={Math.round(data.detention_petition_filed_but_denied*100)}% />
          <TooltipItem label="Detained" value={Math.round(data.detention_eligible_no_petition_filed*100)}% />
          <TooltipItem label="Petition to Detain," value={Math.round(data.both*100)}% />
        </Tooltip>
      </Chart>
    </div>
  </div>

  
  <div class="mt-20"></div>

<Block>

    <TextBlock>
      Both individual-level and county-level factors affected the likelihood of a detention-eligible case being petitioned and detained. Different counties have different case mixes, of course, with some having to deal with a more serious range of cases or defendants with different risk factors than others. But even apart from this, different counties also have different judges and prosecutors, different norms and risk tolerances—and all these may contribute to different rates at which they seek and impose detention.    
    </TextBlock>

    <TextBlock>
      At the individual level, the biggest factor influencing the likelihood of being detained was the seriousness of the charged offense—the more serious the crime class, the more likely the defendant would be detained. In addition, if the defendant was under some form of supervision at the time of the alleged offense (e.g., on probation or on mandatory supervised release) that also increased the likelihood of detention being sought and granted.  We also found that the filing of a detention petition and the granting of detention was slightly higher in the first few months of the PFA, when the law was new, than in the subsequent seven months examined. After accounting for case and defendant characteristics, there was still variation across individual counties and types of counties; in Cook County detention was sought and imposed less often than other urban counties include in the analyses, and in rural counties detention was less often sought and granted when compared to urban counties outside of Cook County.
    </TextBlock>

    <h2 id="anchor-detention-release-changed" class="text-4xl font-semibold pt-4 pb-4">
      How Have Detention and Release Rates Changed under the PFA?
    </h2>


    <TextBlock>
We analyzed pre- and post-PFA court data from 22 Illinois counties <PopOver number={"[21]"} >These included Cook County and 21 primarily rural counties that provided us with case-level data from their Clerk of the Circuit Court: Boone, Carroll, Edwards, Ford, Franklin, Fulton, Hancock, Henderson, Jefferson, Jo Daviess, Knox, Lawrence, Livingston, Logan, McDonough, Ogle, Richland, Stephenson, Warren, Wayne, and White.</PopOver > to get a sense of how detention and release rates may have changed under the new law. It’s difficult to make a one-to-one comparison between PFA detention and release rates and bond court outcomes under prior law. <PopOver number={"[22]"} >Under the cash bail system, there were some clear instances of “detention” (the very small number of cases in which defendants were ordered held without bail), as well as some clear “releases” (those in which the defendant was released without monetary conditions). But the bulk of the cases in most counties came out somewhere in between: people were neither detained nor released in absolute terms, but detained unless and until they posted 10% of a specified bond amount. If the bond amount was set very low, it usually amounted to a release; if it was set high enough, it amounted to a detention. But the line between the two was always somewhat uncertain, and its location shifted according to the circumstances of individual defendants. Another level of uncertainty under the cash bail system concerned the amount of detention being imposed. Any given bond amount would effectively detain differently situated defendants for different periods of time; some would have no trouble posting the required amount immediately, others would need more time before they could raise it from friends or relatives, and still others would never raise it at all.</PopOver > For our analysis, we examined the initial outcome in court to release a defendant or impose bond under the prior law; but we also made the assumption that, in cases governed by prior law, those defendants who were still in jail custody more than 3 days after bond-setting had been effectively “detained,” and all others had been “released.” <PopOver number={"[23]"} >Other cut-off points are possible, and produce different results.</PopOver > Before the PFA, roughly 51% of defendants were detained at their initial court hearing, through the imposition of bond; after the PFA, just 9% of defendants were detained at their initial court hearing. Examining defendants held for 3 days or more, the pre-PFA “detention” rate for all misdemeanor and felony offenses was about 33% across those 22 counties. After the PFA, the overall detention rate for all offenses was only 9%.    
    </TextBlock>



<TextBlock>
  <div class="mb-10 mt-10">
    <iframe title="In 22 counties examined, the percent of defendants detained at their initial court hearing decreased markedly for all offense types." aria-label="Split Bars" id="datawrapper-chart-aiqx8" src="https://datawrapper.dwcdn.net/aiqx8/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="353" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
    </script>
  </div>
  <hr/>
</TextBlock>


<TextBlock>

<div class="mb-10  mt-10">
  <iframe title="In 22 counties examined, the percent of defendants detained more than 3 days after their initial court hearing decreased markedly for all offense types." aria-label="Split Bars" id="datawrapper-chart-IVdbu" src="https://datawrapper.dwcdn.net/IVdbu/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="353" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
  </script>
  </div>
  <hr/>
  
</TextBlock>

<TextBlock>
  Detention rates for detainable offenses also changed markedly, from 77% to 33%. But here again, counties’ detention rates varied significantly, both before and after PFA implementation began. Before the PFA, most of these 22 counties detained defendants charged with detainable offenses in over 75% of cases; only three counties detained fewer than 50%. However, after the PFA, only one county still detained nearly 75% of defendants charged with detainable offenses; rather, fifteen counties detained less than 1/3 of such defendants.       
</TextBlock>

<TextBlock>
  <div class="mb-10  mt-10">
    <iframe title="In 22 counties examined, the percent of defendants charged with a detainable offense who were detained at their initial court hearing decreased in all counties. " aria-label="Arrow Plot" id="datawrapper-chart-W6Q3m" src="https://datawrapper.dwcdn.net/W6Q3m/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="698" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
    </script>
    </div>
    <hr/>
  </TextBlock>

  <h2 id="anchor-jail-pretrial-change" class="text-4xl font-semibold pt-4 pb-4">
    How Have Jail and Pretrial Supervision Populations Changed Under the PFA?
  </h2>


<TextBlock>
  As some feared and others hoped, the overall number of people held in jail pretrial declined after the PFA took effect in Illinois. Specifically, the monthly average jail populations fell 14% in Cook and other urban counties, and 25% in rural counties, with the sharpest drops occurring in the first few months of implementation. <PopOver number={"[24]"} > To examine the percent change in the average daily population of jails between the pre- and post-PFA periods a number of different comparisons were made, including a comparison of the October 2022 to June 2023 (pre) to the October 2023 to June 2024 (post) periods and a comparison of June 2023 (pre) to June 2024 (post). In both sets of analyses, the percent change between the pre- and post-PFA periods were similar. In Cook County, the percent change between the June-October periods was a 14% decrease, while the percent change between the June periods was also a 14% decrease. In the urban counties outside of Cook, the percent change between the June-October periods was a 14% decrease, while the percent change between the June periods was a 12% decrease. Finally, in rural counties, the percent change between the June-October periods was a 25% decrease, while the percent change between the June periods was a 26% decrease.</PopOver >      
</TextBlock>

<TextBlock>
  <div class="mb-10  mt-10">
    <iframe title="Pretrial jail populations fell after Illinois' Pretrial Fairness Act went into effect, down 14% in Cook County, 14% in other urban counties and 25% in rural counties " id="rrSnM" src="https://datawrapper.dwcdn.net/rrSnM/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="635" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
    </script>
    </div>
    <hr/>
  </TextBlock>

<TextBlock>
  Here again, however, there was considerable variation from county to county. Each county had its own post-PFA pattern, and some counties saw increases in average daily jail populations.     
</TextBlock>

<TextBlock>
  Apart from the numbers detained, how have jail populations otherwise changed since the PFA took effect? Preliminary analyses of jail populations in selected counties where we have access to more detailed data <PopOver number={"[25]"} > Cook, Winnebago, Kane, and Franklin Counties.</PopOver > suggest two kinds of change:   
</TextBlock>

<TextBlock>

  <ul class="list-disc space-y-2">

    <li>
    <b class="text-lg font-bold">Length of Stay.</b> We noted a decline in the proportion of the jail population held for short periods, and an increase in the proportion held for longer periods.
    </li>
    <li>
      <b class="text-lg font-bold">Offense Mix.</b> At least in Cook County, we noted a large increase in the proportion of the jail population charged with person and weapon offenses, and a decrease in the proportion held for drug, DUI, property, and public order offenses.
</TextBlock>

<TextBlock>
  <div class="mb-10 mt-10">
    <iframe title="Cook County Saw Declines in All ADP Categories Except 1 Year+ Stays" aria-label="Table" id="datawrapper-chart-Dh2IH" src="https://datawrapper.dwcdn.net/Dh2IH/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="392" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
    </script>
  </div>
  <hr/>
</TextBlock>


<TextBlock>

<div class="mb-10  mt-10">
  <iframe title="Cook County Saw Declines in All Offense Categories Except Person and Weapon Offenses" aria-label="Table" id="datawrapper-chart-mBRCg" src="https://datawrapper.dwcdn.net/mBRCg/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="435" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
  </script>
  </div>
  <hr/>
  
</TextBlock>

<TextBlock>
  If these findings turn out to be representative of the state as a whole, they would be consistent not only with the basic design of the PFA, but with the early impressions of many of the practitioners we interviewed. Except for very short jail holds that may precede hearings on release conditions in some counties, <PopOver number={"[26]"} > Following an arrest for even a “nondetainable” offense, a defendant may be held in jail pending a hearing to determine appropriate conditions of release. This kind of prehearing jail holding appears to be fairly widespread, judging from court observations and interviews with stakeholders around the state. Some counties seem to have a policy of holding everyone taken into custody until they can be released by a judge. And depending on the timing of the arrest and the local court’s hearing schedule, such jail stays may sometimes last several days.</PopOver > the PFA prohibits pretrial detention of most defendants, and does away with the once-routine jail stays necessitated by the time it took to raise money needed for bonds. Defense attorneys  we interviewed believed that the PFA’s detention eligibility restrictions had in fact reduced this form of short-term detention in their counties. <PopOver number={"[27]"} >“I've seen people who before the PFA might get stuck in custody until money could be posted…They're getting released, they're going home, they're going back to work.”</PopOver > They also had the sense that the mix of those detained had changed, with defendants accused of violent and serious offenses being more likely to be jailed, and jailed longer, than under the cash bail system. <PopOver number={"[28]"} >“Some violent people were getting a surprise that they just couldn't up and bond out, especially those first few months…If it's guns, you're going to be detained. If it's violent, you're going to be detained…They're being detained and they're not getting out, and they would have bonded out before.”</PopOver >  
</TextBlock>

<h2 id="anchor-pretrial-supervision" class="text-4xl font-semibold pt-4 pb-4">
  Pretrial Supervision
</h2>

<TextBlock>
  Our research prior to the implementation of the PFA found that the vast majority of individuals awaiting disposition of a criminal case were neither detained in jail nor on <a class="text-main hover:font-underline" href="https://loyolaccj.org/blog/pfa-jail"> pretrial supervision </a>. While that overall pattern remains—that most people awaiting disposition of their criminal case are not detained or on supervision—there have been some shifts. Unlike pretrial jail populations, pretrial supervision populations have increased since the PFA was implemented. In fact, statewide reductions in detention numbers have been more than offset by increases in the numbers of defendants released to the community but placed on pretrial supervision or electronic monitoring.  <PopOver number={"[29]"} >While these offsetting increases may be concerning to some, it should be noted that “pretrial supervision” may denote a variety of arrangements, from relatively intensive monitoring to simple reporting obligations. Even at its most intensive, however, advocates would suggest that pretrial supervision at least spares defendants many of the negative side effects of jail detention, and is preferable on that account alone.</PopOver >   
</TextBlock>

<TextBlock>
  The counties that saw the most dramatic increases in pretrial supervision were those served by OSPS—which is partly explained by the fact that in many cases, before the arrival of OSPS, those same counties had no previous pretrial supervision capacity at all. 
</TextBlock>


<TextBlock>
  <div class="mb-10  mt-10">
    <iframe title="Across 44 counties, the increase in defendants under pretrial supervision post-PFA dramatically exceeded the post-PFA drop in the pretrial jail population." aria-label="Interactive line chart" id="datawrapper-chart-J79EV" src="https://datawrapper.dwcdn.net/J79EV/2/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="512" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
    </script>
    </div>
    <hr/>  
</TextBlock>
<TextBlock>
  <div class="mb-10  mt-10">
    <iframe title="In non-OSPS counties outside of Cook County, average monthly pretrial jail populations fell by roughly 500 people after the PFA went into effect and pretrial supervision populations increased by roughly 300" aria-label="Interactive line chart" id="datawrapper-chart-ISA9R" src="https://datawrapper.dwcdn.net/ISA9R/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="507" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
    </script>
    </div>
    <hr/>  
</TextBlock>


<TextBlock>
  In Cook County, the average jail population declined by about 900 people, while the total number on some form of pretrial supervision in the community increased by 2,200. Non-OSPS counties outside Cook County also saw a pretrial supervision increase, but not enough to offset reductions in pretrial detention.  
</TextBlock>

<h2 id="anchor-electronic-monitoring" class="text-4xl font-semibold pt-4 pb-4">
  Electronic Monitoring
</h2>

<TextBlock>
  Prior to the PFA, there was some concern that the new law might trigger an unnecessary expansion in the use of pretrial electronic monitoring—particularly in counties served by OSPS, which for the first time would be providing GPS monitoring at no cost to the county or the defendant. There were similar concerns in Cook County, where the Sheriff operates an extensive pretrial electronic monitoring program. In fact, however, the electronic monitoring population in Cook is down substantially.
</TextBlock>

<TextBlock>
<div class="mb-10  mt-10">
<iframe title="Cook County Sheriff's Electronic Monitoring Population" aria-label="Interactive line chart" id="datawrapper-chart-GlakD" src="https://datawrapper.dwcdn.net/GlakD/196/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="508" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
</script>
</div>
<hr/>  

</TextBlock>

<TextBlock>
  So far, however, GPS monitoring has been ordered in only about 9% of nondetained OSPS cases. GPS was most commonly used in cases where detention would otherwise have been available: in a third of cases in OSPS counties where a petition to detain had been filed but not granted, GPS was ordered as a condition of release. 
</TextBlock>

<TextBlock>
  Practitioner interviews confirmed that it is typically the defendant’s counsel advocating electronic monitoring, rather than the state. Some prosecutors we spoke to expressed reservations about using electronic monitoring, particularly in cases where it might eventually result in “time served” credit against a prison sentence. <PopOver number={"[30]"} >“If I know they're going to prison, I'd rather them not have an easy six months sitting at home, when they need to be serving that in DOC.”</PopOver >
</TextBlock>

<h2 id="anchor-fta" class="text-4xl font-semibold pt-4 pb-4">
  How Has Hearing Attendance Changed Under the PFA?
</h2>

<TextBlock>
  Because the PFA mandated pretrial release of most defendants and ended the practice of requiring them to post money as security for hearing attendance, many predicted that it would result in an increase in failures to appear (FTAs) at required court hearings. Indeed, some practitioners we interviewed reported that missed hearings has been a problem in their counties under the PFA. Others believed that hearing attendance was unchanged. While we are still untangling this issue, the data we have so far do not show any dramatic increase in FTAs under the PFA. 
</TextBlock>

<TextBlock>
Analysis of court data from 22 counties indicates that overall FTA warrant rates—as measured by the percentage of released defendants with at least one FTA warrant issued within 6 months of their initial hearing/release or as of the time of case disposition, whichever came first—actually declined slightly, from 13.6% before the PFA to 12.5% after. The change was not the same across offense types. Defendants charged with non-detainable misdemeanors and detainable misdemeanors (i.e., domestic battery/violations of orders of protection) experienced decreases in FTA warrant rates, while defendants charged with non-detainable and detainable felonies saw increases. Specifically, those charged with non-detainable felonies (Class 3 and higher felonies detainable only under the little-used willful flight standard and Class 4 non-detainable felonies) saw the largest increase, from 13.1% before the PFA to 16.1% after the PFA. Several defendant- and case-level factors were related to FTA warrant rates. Older, white defendants tended to have higher FTA warrant rates, as did those charged with more serious offenses.      
</TextBlock>

<TextBlock>
  <div class="mb-10  mt-10">
    <iframe title="In 22 counties examined, overall FTA Warrant rates decreased after the PFA, from 13.5% to 11.5%." aria-label="Multiple Lines" id="datawrapper-chart-9csTJ" src="https://datawrapper.dwcdn.net/9csTJ/6/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="424" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
    </script>
    </div>
    <hr/>  
</TextBlock>

<TextBlock>
  But this is far from the final word. First, there is no one right way to measure hearing attendance. <PopOver number={"[31]"} >For example, OSPS calculates a rate based on the ratio of FTA warrants issued to total court dates, and reports a statewide rate of 5%--meaning that an FTA warrant is issued at only one of every 20 hearings held in OSPS-supervised cases. The warrant rate per defendant in OSPS cases may be higher or lower, depending on how many hearings occur in each defendant’s case during the measurement period.</PopOver > For example, when we include any instance of hearing nonattendance—whether or not an FTA warrant was issued—resulting FTA rates are higher; however, even using this broader measure, FTA rates appear to have decreased following PFA implementation (from 25.1% to 22.8%). <PopOver number={"[32]"} >While the analyses of FTA Warrant rates include Cook County, here only the 21 non-Cook counties for which we had access to court event data are included.</PopOver >  
</TextBlock>
    

<TextBlock>
  <TextBlock>
    <div class="mb-10  mt-10">
      <iframe title="In 21 counties examined, overall FTA rates (with and without a warrant issued) decreased after the PFA, from 25.1% to 22.8%." aria-label="Multiple Lines" id="datawrapper-chart-26kRO" src="https://datawrapper.dwcdn.net/26kRO/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="467" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
      </script>
      </div>
      <hr/>  
  </TextBlock>   
</TextBlock>

<TextBlock>
  Lengthening the measurement period from six to twelve months would also change the results, as would limiting the analysis to include only defendants with serious charges. Moreover, not all of the post-PFA cases used in the analysis have been closed. Finally, the PFA also made changes to the statutory provision governing issuance of warrants for nonattendance, creating a new summons option and leaving it somewhat unclear whether FTA warrants before and after the amendment are sufficiently equivalent to permit one-to-one comparisons. <PopOver number={"[33]"} >Prior to the PFA amendment, 725 ILCS 5/110-3 authorized courts to issue arrest warrants in response to a violation of any pretrial release condition, and required that a warrant be issued for any failure to appear in a felony case. After the amendment, the same provision gives courts the option to respond to failures to appear with “a summons or a warrant,” and directs that the law “be construed to effectuate the goal of relying upon summonses rather than warrants to ensure the appearance of the defendant in court whenever possible.” The amendment also provided that, if a summons is issued and the defendant appears in court in response, the defendant “shall not be recorded in the official docket as having failed to appear on the initial missed court date.”</PopOver >
</TextBlock>
    

<TextBlock>
  In any case, while more analysis is needed here, in some ways it would not be surprising if the PFA did not have much of an impact on hearing attendance. <a class="text-main hover:font-underline" href={"https://aouss.github.io/NCB.pdf"}>Other research</a> has cast doubt on the assumption that the fear of forfeiting a posted money bond provides a strong incentive to return to court. And our own prior research on Illinois’ cash bail system showed that in most cases the money in jeopardy (1) was not the defendant’s and (2) <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/paying-in-advance"}>wouldn’t be coming back</a> anyway.
</TextBlock>
    
<h2 id="anchor-crime" class="text-4xl font-semibold pt-4 pb-4">
  What Can We Say About Crime and Public Safety Under the PFA So Far?
</h2>

<TextBlock>
  While we lack the data needed for a causal analysis at this point, we can say at least that crime in Illinois did not go up following PFA implementation. In fact, reported violent and property crime declined in rural counties and in Cook and other large counties, though not in every county. Using data collected by the Illinois State Police through the National Incident Based Reporting System (NIBRS), we compared reported crime in each of Illinois’ counties during the first six months of 2023 (before the PFA) with crime reported during the first six months of 2024 (after the PFA). <PopOver number={"[34]"} >The analysis was based on data pulled from the Illinois State Police’s <a class="text-main hover:font-underline" href={"https://ilucr.nibrs.com/Report/GroupACrimeReport"}>NIBRS Group A Offense Report</a> for each individual county on September 9, 2024. Because of incomplete reporting, 17 of Illinois’ 102 counties were excluded from the analysis. In Cook County, the total combined violent and property offenses reported to the police decreased 16% during the period examined, while in urban areas outside of Cook County it fell 4% and in rural counties it fell 3%.
  </PopOver > The statewide volume of reported crimes declined 11% between the two periods. Violent crime declined 7%, and property crime declined 14%. 
</TextBlock>
  
<TextBlock>
  This does not answer the question of the PFA’s impact, if any, on crime and public safety. It’s possible, for example, that crime would have declined further in the absence of the PFA. But it does confirm the unanimous sense of the Illinois practitioners we interviewed, that (as several of them put it) “the sky did not fall” when the PFA went into effect.   
</TextBlock>
  
</Block>



<Block>
  <hr class="mt-20 text-black font-lg"/>
  <h2 id="anchor-acknowledgements" class="text-4xl font-semibold pt-20 pb-4">
    
    Acknowledgements
      </h2>
<TextBlock>
  A special thank you to the Loyola Chicago Center for Criminal Justice fellows and students for their assistance in this report. Jannah Abu-Khalil, Anna Bryant, Patrick Carabell, Stefan Cetenovic, Hannah Eure, Kenzie Gallivan, Grace Gattorno, Elena Hoeferle, Taylor Holzman, Alishba Kamran, Martyna Malecka, Abbie Romanowski, Patrick Taylor, Eva Platz-Walker, and Jack Wolff did invaluable work collecting court observations, cleaning transcriptions, and working with administrative data.
  
</TextBlock>

<TextBlock>
  This research is supported by Award No. 15PNIJ-21-GG-02807-RESS awarded by the National Institute of Justice, Office of Justice Programs, U.S. Department of Justice. The opinions, findings, and conclusions or recommendations expressed in this publication are those of the authors and do not necessarily reflect those of the Department of Justice. This research is also generously supported by The MacArthur Foundation and Arnold Ventures.
</TextBlock>
</Block>

