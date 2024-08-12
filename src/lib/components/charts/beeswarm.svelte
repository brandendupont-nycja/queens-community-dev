
<script lang="ts">
    import { scaleOrdinal } from 'd3-scale';
    import { forceX, forceY, forceCollide } from 'd3-force';
    import { Text } from 'layerchart';
  
    import { Axis, Chart, Circle, ForceSimulation, Svg, Tooltip, TooltipItem } from 'layerchart';

  
    import  data  from './us-senators.csv';
  
    const genderColor = scaleOrdinal(['#02AEFF', '#FFC413']);
  
    const xForce = forceX().strength(0.95);
    const yForce = forceY().strength(0.075);
    const collideForce = forceCollide();
  
    const SwarmLabels = ['Joe Manchin', 'Tammy Baldwin']
  
   </script>

<div id="chart-container" class="max-w-[1200px] mx-auto  mt-[100px]">
    <h2 class="text-3xl font-semibold mb-4 underline">Bespoke Visualization</h2>
    
      <div class="h-[400px]  p-4 ">
        <Chart
          data={data}
          x={(d) => d.date_of_birth.getFullYear()}
          xNice
          padding={{ top: 12, left: 8, right: 8 }}
          let:xGet
          let:height
          let:tooltip
        >
          {@const r = 12}
          <Svg>
            <Axis rule={{ class: "stroke-black text-black" }} placement="top" format="none"         tickLabelProps={{
              class: "fill-black text-black font-medium",
            }}          
            grid={{ style: "stroke-dasharray: 1; stroke: #000000; color:red" }}
     />
            <ForceSimulation
              forces={{
                x: xForce.x((d) => xGet(d)),
                y: yForce.y(height / 2),
                collide: collideForce.radius(r),
              }}
              static={true}
              cloneData
              let:nodes
            >
              {#each nodes as node}
                <Circle
                  cx={node.x}
                  cy={node.y}
                  {r}
                  fill={genderColor(node.party)}
                  class="stroke-surface-100  hover:stroke-black "
                  on:pointermove={(e) => tooltip.show(e, node)}
                  on:pointerleave={tooltip.hide}
                />
    
                {#if SwarmLabels.includes(node.name) }
                
                
                <Text
                value={node.name}
                x={node.x }
                y={node.y  }
                dy={-2}
                verticalAnchor="middle"
                class="text-[8px] stroke-surface-100 stroke-2 bg-yellow "
              />
              {/if}
              {/each}
       
            </ForceSimulation>
            
          </Svg>
       
    
          <Tooltip class='border-solid border border-black rounded-none min-w-42 bg-white opacity-100' header={(d) => d.name} let:data>
    
            <TooltipItem label="State" value={data.state_name} />
            <TooltipItem label="Party" value={data.party} />
            <TooltipItem label="Gender" value={data.gender} />
          </Tooltip>
        </Chart>
      </div>
    </div>