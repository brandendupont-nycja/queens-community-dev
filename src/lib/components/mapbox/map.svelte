<script lang="ts">
  import MapLibre from 'svelte-maplibre/MapLibre.svelte';
  import LineLayer from 'svelte-maplibre/LineLayer.svelte';
  import { FillLayer } from 'svelte-maplibre';
  import GeoJSON from 'svelte-maplibre/GeoJSON.svelte';
  import Marker from 'svelte-maplibre/Marker.svelte';
  import Popup from 'svelte-maplibre/Popup.svelte';
  import { Legend } from 'layerchart';
  import MarkerData from './../mapbox/ce-data.csv'
  import type { FeatureCollection } from 'geojson';
  import ZoomRange from 'svelte-maplibre/ZoomRange.svelte';
  import { zoomTransition } from 'svelte-maplibre/expressions.js';
  import { scaleThreshold, scaleOrdinal } from 'd3-scale';
    import { count } from 'd3-array';
  
  // geo data
  const queens = 'https://raw.githubusercontent.com/ebrelsford/geojson-examples/master/queens.geojson'
  const nbh = "https://raw.githubusercontent.com/brandendupont-mcw/queens-community-dev/refs/heads/main/src/lib/components/mapbox/nbh.geojson"

  console.log(nbh)


  //geo specs
  let borderColor = '#000000';

  let zoomThreshold = $state(10.1);

</script>

<div class="max-w-[1000px] mx-auto mt-4 mb-20">
<MapLibre
  style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
  class="relative aspect-[9/16] max-h-[70vh] w-full sm:aspect-video sm:max-h-full"
  center={[-73.814817, 40.672054]}
  zoom={10.1}
  standardControls
>

  <div class="absolute z-50 right-4 top-4 bg-white text-black h-[120px] w-[250px] border-2 border-black p-3">
    <p class="font-semibold text-lg">Community Partnerships Division Event Map</p>
    <div class="grid gap-6 mt-2">
      <Legend
        scale={scaleOrdinal(
          [
            "Represents a Community Event",
          ],
          [
        "#00aeff",
      ],
        )}
        title=""
        variant="swatches"
        classes={{ swatch: "" }}
      />
    </div>
  </div>




  <ZoomRange minzoom={zoomThreshold - 0.5}>
    {@const fadeStates = zoomTransition(zoomThreshold - 1, 0.8, zoomThreshold + 0.5, 0)}
    {@const fadeCountiesText = zoomTransition(zoomThreshold, 0.2, zoomThreshold + 0.5, 1)}
  

    <GeoJSON id="countyfips" data={nbh} >
      <FillLayer
      paint={{
        'fill-color': [
          'interpolate',
          ['linear'],
          // Population density
          [ 'get', 'count'],
          0,
          '#0a0',
          10,
          '#a00',
        ],
        'fill-opacity': fadeStates, 
      }}
      
      >
      </FillLayer>
    </GeoJSON>
    
  </ZoomRange>

<ZoomRange>
  {@const fadeCounties = zoomTransition(zoomThreshold - 0.9, 0, zoomThreshold + 0.5, 0.8)}
  {#each MarkerData as { Longitude, Latitude, Event, Location } }
  {@const lngLat = [Longitude,Latitude]}
  <Marker
    {lngLat}
    class="grid opacity-25 h-2 w-2 place-items-center rounded-full  bg-main text-black shadow-2xl focus:outline-2 focus:outline-black "
    opacity={fadeCounties}
  >
    <Popup openOn="hover" offset={[0, -10]}>
      <div class="text-md font-semibold  max-w-[275px]">{Event}</div>
      <div class="text-sm  max-w-[300px]">{Location}</div>
    </Popup>
  </Marker>
  {/each}
</ZoomRange>


  <GeoJSON id="queens" data={queens} >
    <LineLayer
    layout={{ 'line-cap': 'round', 'line-join': 'round' }}
    paint={{ 'line-color': borderColor, 'line-width': 1 }}
  />
  </GeoJSON>

</MapLibre>
</div>