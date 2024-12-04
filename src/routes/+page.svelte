<script lang="ts">
  import Link from './../lib/components/link.svelte'
  import { scaleOrdinal } from 'd3-scale'; 
  import { forceX, forceY, forceCollide,  forceManyBody, forceCenter  } from 'd3-force';
  import HeroImage from "../lib/components/heroImage.svelte"
  import Block from './../lib/components/block.svelte';
  import TextBlock from './../lib/components/text.svelte';
  import PopOverMobile from './../lib/components/popoverMobile.svelte';
  import Sidebar from './../lib/components/sidebar.svelte';
  import Menu from './../lib/components/collapsiblemenu.svelte';
  import CommunityGrants from './../lib/components/communityGrants.svelte'
  import Map from './../lib/components/mapbox/map.svelte'
  import LineLayer from 'svelte-maplibre/LineLayer.svelte';
  import Calendar from './chart.svelte?raw';
  import GeoJSON from 'svelte-maplibre/GeoJSON.svelte';
  import Calendar2 from './../lib/components/charts/calendar.svelte';
  import viz from './viz.png';
  const categoryColor = scaleOrdinal([
    '#ffbf00',
    '#00aeff',
  ]);

    let currentStep;
    const steps = [    "<p>This chart depicts defendant's that have been served with trespass notices under the Queens Merchants Business Improvement Program.</p>", "<p> We conducted an initial analysis of this program's effectiveness. To do so, we selected 174 individuals served with trespass notices who had been subject to the tresspass notice for at least up to one year. This gives us enough time to get a sense of arrest patterns under this program. </p>", 
     "<p>We find that 87% of individuals have been served with trespass notices and are not arrested at that same location again. </p>",  "<p>Conversely, 13% are rearrested at the same location. Business's can now partner with law enforcement and the Queen's DA's office to address recidivist's who continue to steal from the same location. </p>"];

  

    function unclump() {
    groupBy = false;
}
  function clump() {
    groupBy = true;

  }
  
    $: if (currentStep == 0) {
      unclump();

    } 
    else if (currentStep == 1) {
      unclump();
    }
    else if (currentStep == 2) {
      clump();
    } else if (currentStep == 3) {
      clump();
    }

// this is code around



 



  let groupBy = false;
  $: reheatSimulation({ groupBy });

  let alpha = .8;

  const xForce = forceX().strength(0.1);
  const yForce = forceY().strength(0.1);
  const chargeForce = forceManyBody().strength(1);
  const collideForce = forceCollide();
  const centerForce = forceCenter();

  function reheatSimulation(args: Record<string, any> = {}) {
    const _ = args;
    alpha = 1.0;
  }

  let isSelected = 1


  import  dots  from './rearrest_retail_theft.csv';



  
  import { Button } from "$lib/components/ui/button";
  import  data  from './detention-eligible-by-county-detention-eligible-by-county (1).csv';







  import Scroller from '$lib/components/scroller.svelte';

 </script>


<HeroImage />

<div class="sm:sticky xl:top-[1vh] 2xl:top-[10vh] z-50 sm:float-right float-none md:block hidden ">
  <Menu/>
</div>

<div class=" sm:hidden sticky top-0 z-50">
  <div class="flex items-center justify-between space-x-4 pr-4 bg-black mb-10 ">
    <h4 class="text-sm font-semibold text-white p-3 ">Table of Contents</h4>
    <PopOverMobile />     

   </div>
</div>



<Block>
  
  <TextBlock>
    <div class="first-letter:text-7xl first-letter:text-black first-letter:font-sans first-letter:pr-1 first-letter:pb-1 first-letter:float-left ">
      The District Attorney’s office has sought ways to combat the rise in retail theft that many communities around the nation have experienced in the last few years. The Queens Merchants Business Improvement Program was created in partnership with the NYPD and community stakeholders to combat the problem. The initiative seeks to combat repeat shoplifting and the threats and harassment directed at customers and store staff by the handful of individuals responsible for many of these disruptions to local businesses.
</div>
</TextBlock>

<TextBlock>
  <div class="first-letter:text-7xl first-letter:text-black first-letter:font-sans first-letter:pr-1 first-letter:pb-1 first-letter:float-left ">
</div>
</TextBlock>


<TextBlock>
  Participating businesses contact police when an individual engages in disruptive, dangerous, or illegal behavior in their establishment. The responding officers can issue a trespass notice, either in conjunction with an arrest or in lieu of arrest, and warn the individual that their return to the location will result in their arrest.
</TextBlock>

<TextBlock>
  Participating businesses contact police when an individual engages in disruptive, dangerous, or illegal behavior in their establishment. The responding officers can issue a trespass notice, either in conjunction with an arrest or in lieu of arrest, and warn the individual that their return to the location will result in their arrest.
</TextBlock>

</Block>

<h2 id="anchor-detention-release-changed" class="text-3xl mt-10 font-semibold pt-4 pb-4 mx-auto max-w-[800px]">
  Attending Over ~2,000 Events Across Queens The Community Partnerships Division Is Deeply Engaged in the Community
</h2>


<Map >
</Map>


<Block>
<TextBlock>
  The program began in Jamaica as a pilot program in June 2021 and its success led to its expansion to Flushing and Astoria. Ultimately, District Attorney Katz expanded the program borough-wide in August 2023.
</TextBlock>

</Block>

<Block>

  <h2 id="anchor-detention-release-changed" class="text-4xl font-semibold pt-4 pb-4">
    Since 2021 the Queen's DA's Office Has A Large and Active Presence In the Community 
  </h2>
  
  <TextBlock>
    This chart will be interactive, larger, text-wrapping, and with better resolution. Upon hovering over each square,
    a viewer will be able to see the program overview that was funded. We can add a tab for DA speaking that only includes the calendar and counts for DA speaking.
  </TextBlock>
  
  </Block>
  
  
  
  <div class="pt-20 ">
    <Calendar2 />
  </div>


 

<Block>
<TextBlock>
  Participating businesses contact police when an individual engages in disruptive, dangerous, or illegal behavior in their establishment. The responding officers can issue a trespass notice, either in conjunction with an arrest or in lieu of arrest, and warn the individual that their return to the location will result in their arrest.
</TextBlock>

<TextBlock>
  Participating businesses contact police when an individual engages in disruptive, dangerous, or illegal behavior in their establishment. The responding officers can issue a trespass notice, either in conjunction with an arrest or in lieu of arrest, and warn the individual that their return to the location will result in their arrest.
</TextBlock>


<h2 id="anchor-detention-release-changed" class="text-4xl font-semibold pt-4 pb-4">
  The Queen's DA's Office Invested Over 2.7 Millions in Youth Development and Crime Prevention
</h2>

<TextBlock>
Click the right or left arrows to view the many organizations the Queens DA's office has supported.
</TextBlock>


</Block>



  <CommunityGrants />



<Block>

<TextBlock>
  “This program has proven to be a resounding
success, with more than 14,000 individual youth participants gaining
crucial hands-on training and guidance on conflict resolution, civic
engagement, mental health support, STEM programs, college readiness
workshops and much more. The recipients of the funding in 2021 have
helped to empower our youth while increasing public safety in this
borough. I look forward to the implementation of even more wraparound
services provided to the young people of Queens through this latest round
of funding by my office.”
</TextBlock>




<h2 id="anchor-detention-release-changed" class="text-4xl font-semibold pt-4 pb-4">
  Queen's Youth Empowerment Unit Is in Every School District
</h2>

<TextBlock>
  Participating businesses contact police when an individual engages in disruptive, dangerous, or illegal behavior in their establishment. The responding officers can issue a trespass notice, either in conjunction with an arrest or in lieu of arrest, and warn the individual that their return to the location will result in their arrest.
</TextBlock>


<TextBlock>
  <div class="mb-10 mt-10">
    <iframe title="Hope and Leadership Academy Is in Every School District in Queens" aria-label="Map" id="datawrapper-chart-IUU05" src="https://datawrapper.dwcdn.net/IUU05/1/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="774" data-external="1"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(a){if(void 0!==a.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var t in a.data["datawrapper-height"])for(var r=0;r<e.length;r++)if(e[r].contentWindow===a.source){var i=a.data["datawrapper-height"][t]+"px";e[r].style.height=i}}}))}();
    </script>

</TextBlock>




</Block>
 

<style>


  /* Scrollytelling CSS */
  .step {
    height: 90vh;
    display: flex;
    place-items: center;
    justify-content: center;
  }

  .step-content {
    background: whitesmoke;
    color: #ccc;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: background 500ms ease;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
    max-width: 400px;
  }

  .step.active .step-content {
    background: white;
    color: black;
  }
</style>