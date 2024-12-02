<script>
	import Scroll from "./ui/Scrolly.svelte";

    import { scaleBand, scaleTime } from 'd3-scale';
  import { addMinutes, startOfDay } from 'date-fns';


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