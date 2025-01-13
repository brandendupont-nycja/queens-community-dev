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
  import ZoomRange from 'svelte-maplibre/ZoomRange.svelte';
  import Calendar from './chart.svelte?raw';
  import GeoJSON from 'svelte-maplibre/GeoJSON.svelte';
  import Calendar2 from './../lib/components/charts/calendar.svelte';
  import viz from './viz.png';
  const categoryColor = scaleOrdinal([
    '#ffbf00',
    '#00aeff',
  ]);

    let currentStep;
    const steps = [    "<p>This chart depicts defendant's that have been served with trespass notices under the Queens Merchants Business Improvement Program. With</p>", "<p> We conducted an initial analysis of this program's effectiveness. To do so, we selected 174 individuals served with trespass notices who had been subject to the tresspass notice for at least up to one year. This gives us enough time to get a sense of arrest patterns under this program. </p>", 
     "<p>We find that 87% of individuals have been served with trespass notices and are not arrested at that same location again. </p>",  "<p>Conversely, 13% are rearrested at the same location. Business's can now partner with law enforcement and the Queens DA's office to address recidivist's who continue to steal from the same location. </p>"];

  

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
      The first contact that an individual has with a prosecutor should not occur in a courtroom or during a crisis. It should happen in a welcoming environment—such as a community event—where individuals can learn about available resources and services that the prosecutors’ office has to offer. That means prosecutors getting out into the community, listening to citizens, and building long-term relationships. 
</div>
</TextBlock>

<TextBlock>
  <div class="first-letter:text-7xl first-letter:text-black first-letter:font-sans first-letter:pr-1 first-letter:pb-1 first-letter:float-left ">
</div>
</TextBlock>


<TextBlock>
  Toward this goal, the Community Partnerships Division in the Queens District Attorney’s Office takes a multi-faceted approach to community engagement – providing opportunities for citizens to work collaboratively with the Office to make a positive contribution to Queens County. The Division reaches out to civic and non-profit organizations, develops programs, sponsors and co-sponsors events, and engages with every neighborhood throughout the borough of Queens. 
  
</TextBlock>


</Block>

<h2 id="anchor-detention-release-changed" class="text-2xl mt-10 font-semibold pt-4 pb-4 mx-auto max-w-[600px]">
  Attending Over ~3,000 Events Across Queens, The Community Partnerships Division Is Deeply Engaged in the Community
</h2>

<Map >
</Map>

<Block>
  
<TextBlock>
  <div style="min-height:813px" id="datawrapper-vis-4zCNi"><script type="text/javascript" defer src="https://datawrapper.dwcdn.net/4zCNi/embed.js" charset="utf-8" data-target="#datawrapper-vis-4zCNi"></script><noscript><img src="https://datawrapper.dwcdn.net/4zCNi/full.png" alt="" /></noscript></div>
</TextBlock>
  <TextBlock>
    Over the past four years, staff in the Office participated in over 3,000 public events - from community presentations on domestic violence at St. Mary & St. Antonios Coptic Orthodox Church in Ridgewood to community board meetings and precinct council meetings across the borough to community-based celebrations of Lunar New Year, Black History Month, Hispanic Heritage, Women’s History, Asian American Pacific Islander Heritage, Jewish American Heritage and more.
  </TextBlock>


  <h2 id="anchor-detention-release-changed" class="text-4xl font-semibold pt-4 pb-4 mt-10">
    Since 2020 the Queens DA's Office Has A Large and Active Presence In the Community
  </h2>

<TextBlock>
  Nearly every day of the year the District Attorney’s Office is in the community, demonstrating its ongoing commitment to strengthening positive ties with citizens. Through this approach, the office has successfully engaged the Queens community, fostering an environment where residents feel empowered to reach out to the office not just for assistance with law enforcement-related issues.
</TextBlock>

</Block>

<Block>

  </Block>
  
  
  
  <div class="pt-10 ">
    <h2 id="anchor-detention-release-changed" class="text-2xl font-semibold pt-4 pb-2 mx-auto max-w-[800px]">
      Every week of the year the Queens DA's Office is in the community
    </h2>
    <div id="anchor-detention-release-changed" class="text-md pb-3  mx-auto max-w-[800px]">
      The calendar shows daily events attended by the Queen's Community Partnership Division. And details the the time committment the office invests in being accessible to the community.
    </div>
    <Calendar2 />
  </div>


 

<Block>


    <h2 id="anchor-detention-release-changed" class="text-4xl font-semibold pt-4 pb-4">
      The Queens DA's Office Invests Millions in Youth Development and Crime Prevention
    </h2>
<TextBlock>
  A prosecutor’s office has a broader role in the community than simply processing cases. As an organization deeply rooted in its local community, the prosecutor’s office has an opportunity to use its human capital and resources to improve the long-term social, economic, and cultural well-being of the community - to act as a stabilizing force in civic life. In addition to engaging the community through through community events, The Queens District Attorney’s Office also supports the community through Violence Prevention and Youth Development Grants.
</TextBlock>

<TextBlock>
  In 2024, the Office announced $2.75 million in funding for 34 community-based organizations for the second phase of the office's Community Youth Development and Crime Prevention Project (CYDCPP), which seeks to foster positive relationships between communities and law enforcement, reduce youth crime, improve young people's self-confidence, increase exposure to positive adult role models, and strengthen academic performance and school attendance. Since its inception in 2021, the program has provided 5.45 million in program funding for the community.
</TextBlock>


<h2 id="anchor-detention-release-changed" class="text-3xl font-semibold pt-4 pb-4">
  $5.45M Million Invested From 2021-2024
</h2>

<TextBlock>
Click the right or left arrows to view the many organizations the Queens DA's office has supported.
</TextBlock>


</Block>



  <CommunityGrants />



<Block>





<h2 id="anchor-detention-release-changed" class="text-4xl font-semibold pt-4 pb-4">
  Queen's Youth Empowerment Unit Is in Every School District
</h2>

<TextBlock>
  A primary focus of the Office lies in supporting and encouraging youth. The Youth Empowerment Unit engaged over 10,000 young people across Queens County in 2024. The Unit’s programs are designed to cultivate young minds, strengthening their ability to think critically and communicate with mastery, thereby empowering them to navigate challenges and obstacles with confidence and maturity. 
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