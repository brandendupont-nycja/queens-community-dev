<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import data from "$lib/components/data/grants.csv"
    import { Title } from "./ui/sheet";
   </script>
    
   <Carousel.Root
    opts={{
     align: "start"
    }}
    class=" mx-auto max-w-[1400px]  pt-10 pb-10"
   >
    <Carousel.Content>
     {#each data as i}
      <Carousel.Item class="md:basis-1/2 lg:basis-1/4">
       <div class="p-1">
        <Card.Root>
            <Card.Title
            class="  p-6"
           >
           <div class=" pr-6 text-sm text-main mb-1">Precinct:  {i['precint']}</div>
            <span class="text-3xl font-semibold text-black">{i['org_name']}</span>
           </Card.Title>
         <Card.Content
          class="flex  p-6"
         >
          <span class="text-sm  text-gray-800">{i['program_overview']}</span>
         </Card.Content>
        </Card.Root>
       </div>
      </Carousel.Item>
     {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
   </Carousel.Root>