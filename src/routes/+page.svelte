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
  import PopOver from './../lib/components/popover.svelte';
  import Menu from './../lib/components/collapsiblemenu.svelte';
  
  import { Button } from "$lib/components/ui/button";
  import  data  from './detention-eligible-by-county-detention-eligible-by-county.csv';
  import geojson from './counties.json'

  import Scroller from '$lib/components/scroller.svelte';
  const genderColor = scaleOrdinal(['#02AEFF', '#FFC413']);

  const xForce = forceX().strength(4);
  const yForce = forceY().strength(0.075);
  const collideForce = forceCollide();

  const maxRadius = 30;
  const rScale = scaleSqrt()
    .domain([0, 1134 ?? 0])
    .range([0, maxRadius]);

  const SwarmLabels = ['Iroquois', 'Bond']

  let projection = geoMercator;

  const counties = feature(geojson, geojson.objects.counties);
  const states = feature(geojson, geojson.objects.states);
  //const geojson = feature(usStates, usStates.objects.collection);


  let selectedStateId = '17'; // 'West Virginia';
  $: selectedStateFeature = states.features.find((f) => f.id === selectedStateId);
  $: selectedCountiesFeatures = counties.features.filter(
    (f) => String(f.id).slice(0, 2) === selectedStateId
  );


 </script>

<HeroImage />

<div class="sticky top-[30vh]">
  <Menu/>
</div>

<Block>

  
</Block>

<Block>
  
  <TextBlock>
    <div class="first-letter:text-7xl first-letter:text-black first-letter:font-sans first-letter:pr-1 first-letter:pb-1 first-letter:float-left ">

      The Illinois Pretrial Fairness Act (PFA) went into effect across the state on Monday, September 18th, completely overhauling Illinois pretrial detention and release practices. Among other things, the PFA abolished the use of cash bail as a condition of pretrial release, imposed strict new limits on the use of pretrial jail detention for people accused of crimes, and set up an array of new hearings, procedures, and decision standards for courts. As evaluators of the PFA’s statewide implementation and impact, we’ve been observing as many first appearance and detention hearings as we can in these early weeks, to monitor the roll-out and get a sense of early challenges to implementation.


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
  So how does it look so far?
</TextBlock>
<TextBlock>
  We’ll continue to share findings, insights, and questions as they emerge. And in the meantime, where possible, we have worked with state and local agencies to make the data we are using for our evaluation accessible to the public through data tools on our website. <PopOver number={"[1]"} >For example, we collaborated with IDOC to develop a data dashboard tracking the number of people booked each month into <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/illinois-jail-population-tracker"}> county jails</a>. See <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/tracking-the-cook-county-jail-and-community-corrections-population"}>also our Cook County Jail Tracker</a>. </PopOver >
</TextBlock>


<h2 id="anchor-pfa-background" class="text-4xl font-semibold pt-4 pb-4">
  PFA Background
</h2>

<TextBlock>
  The PFA was enacted as part of Illinois Public Act 101-0652, a sweeping criminal justice omnibus measure that amended Illinois law in many areas, including police accountability and criminal sentencing as well as pretrial detention and release practice. <PopOver number={"[2]"} >The law as a whole was entitled the Safety, Accountability, Fairness and Equity–Today or SAFE-T Act; the parts of the SAFE-T Act aimed at overhauling pretrial detention and release practice in Illinois are known as the Pretrial Fairness Act, or PFA.</PopOver > It was passed by the Illinois General Assembly in January 2021 and signed into law on February 22, 2021. The original start date of the PFA was to be January 1, 2023, giving local and state leaders and practitioners about two years to plan, prepare and budget for the changes the new law would require. However, litigation challenging the law under the Illinois Constitution delayed PFA implementation, and these challenges were not resolved until July 2023, when the Illinois Supreme Court upheld the new law and ordered implementation to begin statewide on September 18, 2023.
</TextBlock>


<TextBlock>
  Before the PFA, Illinois’ pretrial system broadly resembled those in most other states, with pretrial detention and release decisions being made at relatively brief and informal “bond court” hearings, and the outcome of most hearings being either a release “on recognizance” (without any special conditions) or detention pending the posting of a monetary bond in an amount set by the judge. <PopOver number={"[3]"} >In some but not all Illinois counties, defendants could also be released subject to pretrial supervision or electronic monitoring. And in very rare instances, subject to a special showing by the state and only in cases involving certain serious offenses specified in the Illinois Constitution, pretrial release could be denied altogether. </PopOver > 
</TextBlock>

<TextBlock>
  The PFA changed almost everything about this system. The most important of these changes are:  
</TextBlock>

<TextBlock>

  <ul class="list-disc space-y-2">

<li>
<b class="text-lg font-bold">Arrests.</b> The PFA authorizes—and in some circumstances requires—law enforcement to issue citations in lieu of arresting many of those charged with low-level offenses, potentially changing the way a large volume of cases come into the pretrial system in the first place. <PopOver number={"[4]"} >For offenses below the level of a Class A misdemeanor, defendants must be cited and released with standard conditions, unless they cannot be properly identified or would pose a risk to public safety or a danger to themselves if not taken into custody. For Class A misdemeanors and felonies that are not detainable, law enforcement has the choice either (1) to release the defendant with standard conditions (either at the scene or after booking at the jail or police station, but without any appearance before a judge), or (2) to bring the defendant to the jail to be held for a judicial hearing on release conditions. The law creates a presumption in favor of the first option, but does not absolutely require it.</PopOver >
</li>
<li>
  <b class="text-lg font-bold">Initial appearances.</b> 
 Numerous procedural changes in the PFA serve to formalize and standardize statewide pretrial detention and release hearing practice. Most notably, the PFA imposes a 48-hour deadline for holding first appearance hearings when a defendant is in custody, and requires that defendants be present and represented by counsel at any hearing in which nonmandatory conditions of release are set.
</li>
<li>
  <b class="text-lg font-bold">Detention restrictions.</b> 
 Under the PFA, pretrial release (with or without conditions) is required for most defendants. Pretrial detention is reserved only for cases involving the most serious kinds of charges, which are specified in the law. <PopOver number={"[5]"} >Where the state seeks pretrial detention to protect public safety, the offense charged must be a “forcible” felony, a “nonprobationable” felony (i.e. one that would require imprisonment upon conviction), or else one of a list of other serious offenses specified in the law (e.g., domestic battery). Pretrial detention based on the risk of flight is more broadly available under the new law, but the defendant must still be charged with an offense above the lowest grade of felony (i.e., one that is more serious than a Class 4 felony). </PopOver >
  </li>
  <li>
    <b class="text-lg font-bold">Detention procedures and standards.</b> 
If the state seeks to detain the defendant, it must file a detention petition at the initial appearance, and prove by clear and convincing evidence, either then or at a continued detention hearing, that the defendant has committed a detention-eligible offense and poses a public safety or flight risk that cannot be mitigated by any conditions that could be imposed on release.
</li>
<li>
  <b class="text-lg font-bold">Limits on release conditions.</b>  Under the PFA, all monetary conditions of pretrial release (cash bail) are prohibited. A handful of standard conditions are imposed on everyone who is released pretrial, including the obligation to attend required hearings, submit to all court orders, and refrain from violating any laws. No additional conditions may be imposed unless the judge finds it is necessary to ensure the defendant’s hearing attendance or compliance with conditions during the period of pretrial release, or to prevent the defendant from committing any criminal offenses or interfering with the justice process. <PopOver number={"[6]"} >The PFA specifically prohibits (1) conditions that are more restrictive than is necessary to accomplish these purposes, (2) blanket conditions that are not individualized, (3) “punitive” conditions that essentially assume the defendant’s guilt, like community service or restitution obligations, and (4) conditions mandating “rehabilitative services” such as counseling or treatment “unless directly tied to the risk of pretrial misconduct.” </PopOver >
  </li>
  </ul>
  </TextBlock>


  
<h2 id="anchor-loyola-evaluation" class="text-4xl font-semibold pt-4 pb-4">
  Loyola Center for Criminal Justice’s Evaluation
</h2>


<TextBlock>
  Loyola University’s Center for Criminal Justice is conducting a four-year evaluation of the implementation and impact of the PFA, with the support of the National Institute of Justice as well as other funders.  Using a mixed-method approach, we are examining multiple processes and outcomes associated with the new law, including pre/post changes in the size and composition of jail populations, the lengths and costs of pretrial detention, rates and conditions of pretrial release, rates of failure to appear and new arrests during the pretrial period, overall case outcomes, and the work routines of criminal justice stakeholders. In addition to hearing observations, interviews and focus groups with criminal justice stakeholders, and interviews with defendants who went through the pre-trial process, our evaluation makes use of quantitative data from a variety of state and local sources. <PopOver number={"[7]"} >Jail data, for example, is obtained from individual county Sheriffs’ offices as well as from the Illinois Department of Corrections (IDOC) Jail and Detention Standards unit, which collects aggregate data on a monthly basis from county jails across Illinois. Similarly, information on court processing and pretrial supervision comes from both Clerks of the Circuit Court in individual counties and from data required to be submitted to the Administrative Office of the Illinois Courts (AOIC). In addition, the newly created Office of Statewide Pretrial Services (OSPS), which is now active in 77 counties, is sharing data on all the cases in which the agency has either done a pretrial investigation or been ordered to provide pretrial supervision.</PopOver >

</TextBlock>


<TextBlock>
  While the evaluation is statewide, the PFA must be implemented at the county level, under varying local conditions. Accordingly, our evaluation is focusing on 33 counties across 7 judicial circuits, a range that is reflective of Illinois’ overall geographic and population diversity. Wherever possible, we are collaborating with elected and appointed officials in these sites, as well as with state-level agencies involved with or potentially impacted by the implementation of the new law, including the Illinois Department of Corrections (IDOC) Jail and Detention Standards Unit, the Office of Statewide Pretrial Services (OSPS), and the Administrative Office of the Illinois Courts (AOIC).
</TextBlock>

<h2 id="anchor-prior-findings" class="text-4xl font-semibold pt-4 pb-4">
  Prior Evaluation Findings
</h2>

<TextBlock>
Evaluation activities began in January 2022, with the aim of understanding the pretrial landscape in Illinois, getting a picture of the working reality of the pre-PFA cash bail system, and establishing a baseline for measuring changes associated with the PFA. <PopOver number={"[8]"} >At the outset, much of our analytic work was intended to support Illinois practitioners who were trying to plan for the changes that the new law would bring; for example, we analyzed <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/estimate-pfa-act"}>historical arrest data</a> to determine what proportion involved offenses that would have been “detainable” under the PFA.</PopOver > Periodically, as we made pre-implementation findings of potential interest to practitioners and the public, we reported them: for example, our analysis of pre-PFA administrative data confirmed that <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/cash-bail-but-for-how-long"}>most pretrial jail stays were short</a> under the cash bail system; that most defendants, even when accused of felonies, <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/how-much-pretrial-detention-does-cash-bail-buy"}>did not await trial in jail</a>; and that requiring <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/paying-in-advance"}>payment of money</a> as a condition of release was routine, even in less serious cases. Our structured observations of <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/bond-court-observations"}>bond-court-observations</a> helped to quantify pre-PFA hearing practice in terms of average hearing length, factors and arguments typically raised on both sides and cited by judges, and outcomes in terms of bond amounts imposed. Through confidential interviews with criminal justice practitioners, we identified a significant pattern of assumptions and attitudes about the informal purposes and benefits of pretrial detention and monetary bail, as distinct from their technical-legal justifications. Cash bail was seen to <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/why-hold-onto-cash-bail"}>serve many purposes</a> besides its “official” ones, as a sanction for criminal activity, a mechanism for achieving preventive detention, and a <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/bail-and-restitution"}>kind of security deposit</a> for later collection of post-conviction fees, fines and restitution. Pretrial detention also had <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/a-little-time-in-jail"}>unofficial purposes and benefits</a> in the eyes of practitioners, as an informal deterrent to law-breakers, a powerful incentive to waive trial rights, and in some cases a form of short-term shelter for the homeless or a conduit to treatment for those with substance use issues. Finally, interviews with people who had been criminal defendants contributed <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/paying-in-advance"}>important insights</a> about the cash bail system, including the burdens it imposed on defendants’ families, the frequency with which posted bail was seized to satisfy other financial obligations, and the negative perceptions of system legitimacy that such practices tended to encourage.
</TextBlock>

<h2 id="anchor-pretrial-decision-change" class="text-4xl font-semibold pt-4 pb-4">
  How Has Pretrial Hearing and Decision-Making Practice Changed Under the PFA?
</h2>



<TextBlock>
  Both court observations and interviews with practitioners confirmed that the PFA has fundamentally changed pretrial practice in Illinois. 
</TextBlock>

<TextBlock>
  Our observations of pretrial hearings in multiple counties, <PopOver number={"[9]"} >We observed pretrial hearings in a total of 1,767 cases in Cook and 7 other mostly urban counties, including DuPage, Kane, Lake, McLean, Will, Williamson, and Winnebago. (On a daily basis, a relatively small number of pretrial hearings occur in most rural counties, and often on an ad hoc basis; both the low volume and the unpredictability of hearings make court observation efforts difficult in these counties.) Hearings were observed in the summer of 2022, in the final months of 2023 (first few months of PFA implementation), and again in the summer of 2024, using a structured data collection instrument completed by trained court watchers.</PopOver > including pre- and post-implementation observations in four counties, <PopOver number={"[10]"} >Cook, Winnebago, Lake and McLean.</PopOver >indicated that, at least when detention was at issue, PFA hearings were longer and more deliberative than pre-PFA bail hearings. In particular, PFA hearings featured more discussion, a broader range of issues, closer scrutiny of the evidence, and a tighter focus on risk.
</TextBlock>


<TextBlock>

  <ul class="list-disc space-y-2">
    <li>
<b class="text-lg font-bold">Duration of Hearings.</b>  In the counties where we observed hearings before and after PFA implementation, we noted a significant increase in the duration of detention hearings. Before the PFA, bond court hearings observed were almost uniformly short, with median lengths between 4 and 6 minutes. Post-PFA “conditions” hearings, in which the only issues concerned terms and conditions of release, were also short, with medians between 4 and 5 minutes. But hearings in which the state sought detention took longer in all the counties we visited, with median lengths that varied from 10 to 30 minutes. In more complex and contested cases, we observed detention hearings that lasted close to an hour—an unheard-of length in the period before the PFA.
</li>

<li>
<b class="text-lg font-bold">Issues Raised.</b>  Prior to the PFA, in all counties observed, bond court hearings featured little individualized argumentation. Following PFA implementation, hearing argumentation was more varied and substantive. Both prosecution and defense raised a broader range of case-specific issues, there was more examination of the evidence and its weight, and the two sides were more likely to engage directly on a common set of factors acknowledged to be relevant to the detention/release decision. 
</li>

<li>
<b class="text-lg font-bold">Reasons for Decisions.</b>  Prior to the PFA, it was common practice for judges to issue bond decisions without citing any reasons for them: in the courts we observed, bond decisions were announced without articulated reasons between 49% and 88% of the time. After the PFA took effect, judges in the same four counties more often cited reasons for their decisions, and always in cases in which detention was at issue. And those reasons were more likely to relate to the facts and case characteristics raised by the parties. 
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
      

</Block>






<div id="chart-container" class="max-w-[1400px] mx-auto  mt-[100px]">
<h2 class="text-4xl font-semibold mb-8 font-mono text-center">Explore detention rates in 72 Ilinois Counties</h2>
<div class="flex gap-10  justify-center ">

  <div>

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
  </svg>

  <span class="text-xs">Less Detained</span>
</div>  

  <span class="text-md mb-4  font-semibold  "> Detainable Eligible Offenses Detained</span>

  <div>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  
    <span class=text-xs>More Detained</span>
  </div>  

</div>
<div class="text-gray-600 text-center text-md max-w-3xl mx-auto mb-6 mt-6">The amount of individuals charged with a detainable eligible offense that were detained by county. </div>


  <div class="h-[400px]  p-4 z-index-10  ">
    <Chart
      data={data}
      x={(d) => d.detention_eligible_cases_detained}
      xNice
      xDomain={[0, 100]}       
      padding={{ top: 12, left: 8, right: 8 }}
      let:xGet
      let:height
      let:tooltip
    >
      {@const r = 14}
      <Svg>
        <Axis rule={{ class: "stroke-none text-black" }} placement="top" format="none"   tickLabelProps={{
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

          
          {#if SwarmLabels.includes(node.county) }
            
            
          <Text
          value={node.county}
          x={node.x }
          y={node.y  }
          dy={-2}
          verticalAnchor="middle"
          class="text-[8px] stroke-surface-100 stroke-2 bg-yellow "
        />
        {/if}

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
   

      <Tooltip class='border-solid border border-black rounded-none min-w-42 bg-white opacity-100'  let:data>
        <h1 class="text-xl">{data.county}</h1>
        <div class="h-[100px] w-[100px]">
          <Chart
            geo={{
              projection,
              fitGeojson: selectedStateFeature,
            }}
            let:tooltip
          >
            <Tooltip header={(data) => data.properties.name} />
          </Chart>
        </div>
         
        <TooltipItem label="Number of Cases" value={data.size} />
        <TooltipItem label="Detention Eligible Cases Detained" value={data.detention_eligible_cases_detained}% />
        <TooltipItem label="Detention Petition Filed But Not Detained" value={data.detention_petition_filed_but_denied}% />
        <TooltipItem label="Detention Eligible Cases with No Petition Filed" value={data.detention_eligible_no_petition_filed}% />
      </Tooltip>
    </Chart>
  </div>
</div>

<div class="mt-20"></div>
<Block >
  

<TextBlock>
  The Pretrial Fairness Act (PFA) has now been in operation in Illinois for one full year. Beginning September 18, 2023, the PFA fundamentally altered pretrial practices in Illinois. The law eliminated the use of cash bail in all criminal cases, prohibited pretrial detention altogether for most defendants, and established new and uniform processes, timelines and decision standards for pretrial detention and release hearings, among many other changes. What can we say about the workings and effects of the new law at the one-year point? 
</TextBlock>
<TextBlock>
  We now have data from a variety of state and local sources that give us a picture of the ways Illinois pretrial detention and release practice and decision-making have changed since a year ago, and the varying effects being felt in local jails and courthouses. It’s still early, of course, for any kind of definitive findings—our evaluation is ongoing, and will run at least through December 2025. Ultimate questions about the effects of the new law on defendants, on court and jail operations, and on public safety can’t be answered till more time has passed and more data becomes available. Moreover, one of our most consistent findings is that the effects of the PFA vary by county and region, making even simple generalizations about its “statewide” effects problematic, if not meaningless. 
</TextBlock>
<TextBlock>
  This report is intended to provide a snapshot of what we’re learning, at a significant point in time. We can say something about the kinds of cases in which detention is being sought and granted, and the kinds of conditions being imposed on those who are released pretrial. We have some limited information from which to judge the extent to which people released under the PFA are successfully abiding by the law and returning to court.
</TextBlock>

</Block>




