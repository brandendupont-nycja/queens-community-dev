<script lang="ts">
  import MapLibre from 'svelte-maplibre/MapLibre.svelte';
  import LineLayer from 'svelte-maplibre/LineLayer.svelte';
  import GeoJSON from 'svelte-maplibre/GeoJSON.svelte';
  import Marker from 'svelte-maplibre/Marker.svelte';
  import Popup from 'svelte-maplibre/Popup.svelte';

  import MarkerData from './../mapbox/ce-data.csv'
  
  // geo data
  const queens = 'https://raw.githubusercontent.com/ebrelsford/geojson-examples/master/queens.geojson'

  //geo specs
  let borderColor = '#000000';

</script>

<div class="max-w-[1200px] mx-auto mt-4 mb-20">
<MapLibre
  style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
  class="relative aspect-[9/16] max-h-[70vh] w-full sm:aspect-video sm:max-h-full"
  center={[-73.814817, 40.662054]}
  zoom={10.3}
  standardControls
>
{#each MarkerData as { Longitude, Latitude, Event, Location } }
{console.log(Longitude)}

{@const lngLat = [Longitude,Latitude]}


<Marker
  {lngLat}
  class="grid h-2 w-2 place-items-center rounded-full  bg-main text-black shadow-2xl focus:outline-2 focus:outline-black"
>


  <Popup openOn="hover" offset={[0, -10]}>
    <div class="text-lg font-bold max-w-[300px]">{Event}</div>
  </Popup>
</Marker>
{/each}

<GeoJSON id="queens" data={queens} >
    <LineLayer
    layout={{ 'line-cap': 'round', 'line-join': 'round' }}
    paint={{ 'line-color': borderColor, 'line-width': 1 }}
  />
  </GeoJSON>

</MapLibre>
</div>