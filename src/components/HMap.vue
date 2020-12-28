<template>
<!-- .row map -->
<div id="map" class="row">
<l-map  
    :zoom="zoom" 
    :center="center"
    :options="{zoomControl: false}"
    >
<l-tile-layer :url="url" :attribution="attribution"/>
<l-marker :lat-lng="marker"/>
<l-control-scale position="bottomleft" :metric="true" :imperial="true"/>
<l-geo-json :geojson="geojson"/>
</l-map>
</div>
<!-- /.row map -->
</template>

<script>
import manizalesmap from '../assets/json/ManzlesUrb.json'
import {latLng} from 'leaflet';
import {LMap, 
        LTileLayer, 
        LMarker, 
        LControlScale,
        LGeoJson,
        } from 'vue2-leaflet';

    export default {
        name: "HMap",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LControlScale,
            LGeoJson,
        },

        data(){
            return {
                zoom: 13,
                center: latLng(5.06889, -75.51738),
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
                marker: latLng(5.06889, -75.51738), 
                geojson: manizalesmap,
            };
        },
        methods: {
        }
    }
</script>

<style scoped>
#map{
    height: 100vh;
    display: block;
    z-index: 0;
    position: relative;
}
</style>
