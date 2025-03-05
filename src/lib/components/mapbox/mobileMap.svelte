<script>
    import { onMount } from 'svelte';
    import { Deck } from '@deck.gl/core';
    import { ScatterplotLayer } from '@deck.gl/layers';
    //import maplibregl from 'maplibre-gl';
  
    let mapContainer;
  
    let deck;
  
    const INITIAL_VIEW_STATE = {
      longitude: -122.41669,
      latitude: 37.7853,
      zoom: 8,
      pitch: 0,
      bearing: 0
    };
  
    const data = [
      { position: [-122.41669, 37.7853], size: 100, color: [255, 0, 0] },
      { position: [-122.41669, 37.781, 37.789], size: 100, color: [0, 0, 255] }
    ];
  
    const mapStyle = 'https://demotiles.maplibre.org/style.json';
  
    function createDeckGL() {
      deck = new Deck({
        initialViewState: INITIAL_VIEW_STATE,
        controller: true,
        parent: mapContainer,
  
        layers: [
          new ScatterplotLayer({
            id: 'scatterplot-layer',
            data,
            getPosition: d => d.position,
            getRadius: d => d.size,
            getFillColor: d => d.color,
            pickable: true
          })
        ],
  
        getTooltip: ({ object }) => object && `Coordinates: ${object.position}`
      });
  
      // Attach MapLibre map underneath
      const map = new maplibregl.Map({
        container: deck.getMapContainer(), // maplibre gets attached inside DeckGL's container
        style: mapStyle,
        interactive: false
      });
  
      deck.setProps({ onViewStateChange: ({ viewState }) => map.jumpTo(viewState) });
    }
  
    onMount(() => {
      createDeckGL();
    });
  </script>
  
  <style>
    div.map-container {
      width: 400px;
      height: 400px;
    }
  </style>
  
  <div bind:this={mapContainer} class="map-container">hi</div>
  