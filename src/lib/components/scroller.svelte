<script>
	import Scroll from "./ui/Scrolly.svelte";

    import { scaleBand, scaleTime } from 'd3-scale';
  import { addMinutes, startOfDay } from 'date-fns';


  import {
    Axis,
    Chart,
    Highlight,
    Points,
    Svg,
    Tooltip,
    TooltipItem,
    TooltipSeparator,
  } from 'layerchart';



  const count = 10;
  const now = startOfDay(new Date());
  let lastStartDate = now;

  const data2 = Array.from({ length: count }).map((_, i) => {
    const startDate = addMinutes(lastStartDate, 50);
    const endDate = addMinutes(startDate, 40);
    lastStartDate = startDate;
    return {
      name: `Item ${i + 1}`,
      startDate,
      endDate,
    };
  });
  
    let data = [
      { foo: 4, bar: 1 },
      { foo: 6, bar: 7 },
      { foo: 9, bar: 5 },
      { foo: 2, bar: 4 },
      { foo: 8, bar: 2 },
      { foo: 9, bar: 9 },
      { foo: 5, bar: 3 },
      { foo: 3, bar: 8 },
      { foo: 1, bar: 6 },
    ];
  
    import { tweened } from "svelte/motion";
    const tweenedX = tweened(data.map((d) => d.foo));
  
    const setFoo = function () {
      tweenedX.set(data.map((d) => d.foo));
    };
    const setBar = function () {
      tweenedX.set(data.map((d) => d.bar));
    };
  
    import { scaleLinear } from "d3-scale";
  
    let width = 400;
    let height = 400;
  
    let xScale = scaleLinear().domain([0, 10]).range([0, width]);
    let yScale = scaleLinear().domain([0, 10]).range([height, 0]);
  
    let currentStep;
    const steps = ["<p>Step 0!</p>", "<p>Step 1?</p>", "<p>Step 2.</p>"];
  
    $: if (currentStep == 0) {
      setFoo();
    } else if (currentStep == 1) {
      setBar();
    } else if (currentStep == 2) {
      setFoo();
    }
  </script>
  
  <section>
    <!-- The chart in the background, which is sticky thanks to CSS below -->
    <div class="chart">
        <div class="h-[300px] p-4 border rounded">
            <Chart
              {data}
              x={['startDate', 'endDate']}
              xScale={scaleTime()}
              y="name"
              yScale={scaleBand()}
              yDomain={[...new Set(data.map((d) => d.name))]}
              padding={{ left: 36, bottom: 36 }}
              tooltip={{ mode: 'band' }}
            >
              <Svg>
                <Axis placement="left" grid={{ style: 'stroke-dasharray: 2' }} rule />
                <Axis
                  placement="bottom"

                />
                <Points class="fill-primary-100 stroke-primary" links={{ class: 'stroke-primary' }} />
                <Highlight area />
                <Highlight points lines axis="x" />
              </Svg>
            </Chart>
          </div>      
    </div>
    <!-- The scrolling container which includes each of the text elements -->
    <Scroll bind:value={currentStep}>
      {#each steps as text, i}
        <div class="step" class:active={currentStep === i}>
          <div class="step-content">
            {@html text}
          </div>
        </div>
      {/each}
    </Scroll>
  </section>
  
  <style>
    /* The fixed chart */
    .chart {
      background: whitesmoke;
      width: 400px;
      height: 400px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
      position: sticky;
      top: 10%;
      margin: auto;
    }
  
    /* Scrollytelling CSS */
    .step {
      height: 80vh;
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
    }
  
    .step.active .step-content {
      background: white;
      color: black;
    }
  </style>