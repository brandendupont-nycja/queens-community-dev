<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import TextBlock from '$lib/components/text.svelte';
    import PopOver from '$lib/components/popover.svelte';
   </script>
    
   <Accordion.Root class="">
    <Accordion.Item value="item-1">
     <Accordion.Trigger>
        <h2 id="anchor-pfa-background" class="sm:text-2xl text-lg  font-semibold pt-4 pb-4">
            PFA Background
          </h2>
     </Accordion.Trigger>
     <Accordion.Content>

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
        <div class="mb-10"></div>
    </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
     <Accordion.Trigger>
        <h2 id="anchor-loyola-evaluation" class="sm:text-2xl font-semibold pt-4 pb-4">
           About Loyola CCJ's Evaluation
          </h2>
     </Accordion.Trigger>
     <Accordion.Content>

        <TextBlock>
            Loyola University’s Center for Criminal Justice is conducting a four-year evaluation of the implementation and impact of the PFA, with the support of the National Institute of Justice as well as other funders.  Using a mixed-method approach, we are examining multiple processes and outcomes associated with the new law, including pre/post changes in the size and composition of jail populations, the lengths and costs of pretrial detention, rates and conditions of pretrial release, rates of failure to appear and new arrests during the pretrial period, overall case outcomes, and the work routines of criminal justice stakeholders. In addition to hearing observations, interviews and focus groups with criminal justice stakeholders, and interviews with defendants who went through the pre-trial process, our evaluation makes use of quantitative data from a variety of state and local sources. <PopOver number={"[7]"} >Jail data, for example, is obtained from individual county Sheriffs’ offices as well as from the Illinois Department of Corrections (IDOC) Jail and Detention Standards unit, which collects aggregate data on a monthly basis from county jails across Illinois. Similarly, information on court processing and pretrial supervision comes from both Clerks of the Circuit Court in individual counties and from data required to be submitted to the Administrative Office of the Illinois Courts (AOIC). In addition, the newly created Office of Statewide Pretrial Services (OSPS), which is now active in 77 counties, is sharing data on all the cases in which the agency has either done a pretrial investigation or been ordered to provide pretrial supervision.</PopOver >
          
          </TextBlock>
          
          
          <TextBlock>
            While the evaluation is statewide, the PFA must be implemented at the county level, under varying local conditions. Accordingly, our evaluation is focusing on 33 counties across 7 judicial circuits, a range that is reflective of Illinois’ overall geographic and population diversity. Wherever possible, we are collaborating with elected and appointed officials in these sites, as well as with state-level agencies involved with or potentially impacted by the implementation of the new law, including the Illinois Department of Corrections (IDOC) Jail and Detention Standards Unit, the Office of Statewide Pretrial Services (OSPS), and the Administrative Office of the Illinois Courts (AOIC).
          </TextBlock>

          <TextBlock>
            <div class="mb-10 mt-10">
                <iframe title="The evaluation currently has some data on hearings, jail populations, or supervision for all 102 Illinois Counties." aria-label="Map" id="datawrapper-chart-ghl5F" src="https://datawrapper.dwcdn.net/ghl5F/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="815" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
                </script>
          </TextBlock>

          <div class="mb-10"></div>
     </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-3">
     <Accordion.Trigger>
        <h2 id="anchor-prior-findings" class="sm:text-2xl text-lg  font-semibold pt-4 pb-4">
            Prior Evaluation Findings
          </h2>
     </Accordion.Trigger>
     <Accordion.Content>
        <TextBlock>
            Evaluation activities began in January 2022, with the aim of understanding the pretrial landscape in Illinois, getting a picture of the working reality of the pre-PFA cash bail system, and establishing a baseline for measuring changes associated with the PFA. <PopOver number={"[8]"} >At the outset, much of our analytic work was intended to support Illinois practitioners who were trying to plan for the changes that the new law would bring; for example, we analyzed <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/estimate-pfa-act"}>historical arrest data</a> to determine what proportion involved offenses that would have been “detainable” under the PFA.</PopOver > Periodically, as we made pre-implementation findings of potential interest to practitioners and the public, we reported them: for example, our analysis of pre-PFA administrative data confirmed that <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/cash-bail-but-for-how-long"}>most pretrial jail stays were short</a> under the cash bail system; that most defendants, even when accused of felonies, <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/how-much-pretrial-detention-does-cash-bail-buy"}>did not await trial in jail</a>; and that requiring <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/paying-in-advance"}>payment of money</a> as a condition of release was routine, even in less serious cases. Our structured observations of <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/bond-court-observations"}>bond-court-observations</a> helped to quantify pre-PFA hearing practice in terms of average hearing length, factors and arguments typically raised on both sides and cited by judges, and outcomes in terms of bond amounts imposed. Through confidential interviews with criminal justice practitioners, we identified a significant pattern of assumptions and attitudes about the informal purposes and benefits of pretrial detention and monetary bail, as distinct from their technical-legal justifications. Cash bail was seen to <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/why-hold-onto-cash-bail"}>serve many purposes</a> besides its “official” ones, as a sanction for criminal activity, a mechanism for achieving preventive detention, and a <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/bail-and-restitution"}>kind of security deposit</a> for later collection of post-conviction fees, fines and restitution. Pretrial detention also had <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/a-little-time-in-jail"}>unofficial purposes and benefits</a> in the eyes of practitioners, as an informal deterrent to law-breakers, a powerful incentive to waive trial rights, and in some cases a form of short-term shelter for the homeless or a conduit to treatment for those with substance use issues. Finally, interviews with people who had been criminal defendants contributed <a class="text-main hover:font-underline" href={"https://loyolaccj.org/blog/paying-in-advance"}>important insights</a> about the cash bail system, including the burdens it imposed on defendants’ families, the frequency with which posted bail was seized to satisfy other financial obligations, and the negative perceptions of system legitimacy that such practices tended to encourage.
            </TextBlock>
            <div class="mb-10"></div>
     </Accordion.Content>
    </Accordion.Item>
   </Accordion.Root>