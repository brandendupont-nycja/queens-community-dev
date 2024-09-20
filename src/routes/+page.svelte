<script lang="ts">
  import { scaleOrdinal, scaleQuantile, scaleSqrt, scaleThreshold  } from 'd3-scale'; 
  import { geoMercator } from 'd3-geo';
  import { feature } from 'topojson-client';
  import { index, max } from 'd3-array';
  import { forceX, forceY, forceCollide,  forceManyBody, } from 'd3-force';
  import { Text } from 'layerchart';

  import { Axis, Chart, Circle, ForceSimulation, Svg, Tooltip, TooltipItem, ChartClipPath, GeoPath,  Highlight  } from 'layerchart';
  import HeroImage from "../lib/components/hero-image.svelte"
  import Block from './../lib/components/block.svelte';
  import TextBlock from './../lib/components/text.svelte';
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
  Participating businesses contact police when an individual engages in disruptive, dangerous, or illegal
  behavior in their establishment. The responding officers can issue a trespass notice, either in conjunction
  with an arrest or in lieu of arrest, and warn the individual that their return to the location will result in their
  arrest.
</TextBlock>
<TextBlock>
  So how does it look so far?
</TextBlock>
<TextBlock>
  Obviously, we have only our initial impressions at this point, based on 150-plus hearing observations—mostly in Cook County, but also in Lake, Winnebago, Kane, and McLean Counties. We do have a baseline for comparison, however, having made structured observations in about 140 bond court hearings under previous law, many in counties we’ve now had a chance to revisit. In addition, we are continuing to collect and analyze available data regarding jail and pretrial supervision populations and the outcomes of detention hearings, which serve to supplement our first-hand observations
</TextBlock>

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


  <div class="h-[400px]  p-4 ">
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
          class: "fill-black text-black text-lg",
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
            <Svg>
              <g>
              {#each selectedCountiesFeatures as feature  (feature.id)}
                {#if selectedStateFeature.properties.name === 'Henry'}
                <GeoPath
                id={feature.id}
                geojson={feature}
                fill={'#000000'}
                {tooltip}
              />
              {/if}
                <GeoPath
                id={feature.id}
                geojson={feature}
                class="fill-surface-100 stroke-surface-content/10 hover:fill-surface-content/20"
                {tooltip}
              />
            
              {/each}
              <GeoPath
              geojson={selectedStateFeature}
              class="fill-none stroke-surface-content pointer-events-none"
            />
          </g>
            </Svg>
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




