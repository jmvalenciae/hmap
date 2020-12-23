<template>
<!-- .row map -->
<div id="map" class="row">
<l-map  
    :zoom="zoom" 
    :center="center"
    :options="{zoomControl: false}"
    >
<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
<l-marker :lat-lng="marker"></l-marker>
<l-control-scale position="bottomleft" :metric="true" :imperial="true">
</l-control-scale>
</l-map>
</div>
<!-- /.row map -->
</template>

<script>
import {latLng} from 'leaflet';
import {LMap, 
        LTileLayer, 
        LMarker, 
        LControlScale,
        } from 'vue2-leaflet';

    export default {
        name: "HMap",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LControlScale,
        },

        data(){
            return {
                zoom: 13,
                center: latLng(5.06889, -75.51738),
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
                marker: latLng(5.06889, -75.51738), 
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
