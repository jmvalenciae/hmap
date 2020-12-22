<template>
<!-- .row map -->
<div class="row map">
<l-map  
    :zoom="zoom" 
    :center="center"
    >
<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
<l-marker :lat-lng="marker"></l-marker>

<l-control
    :position="'topright'"
    class="encabezado"
>
<img src="../assets/images/SIMAC2.png" alt="SIMAC2">
</l-control>

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
        LControl,
        LControlScale} from 'vue2-leaflet';

    export default {
        name: "HMap",
        components: {
            LMap,
            LTileLayer,
            LMarker,
            LControl,
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
.map{
    height: 100vh;
}

.encabezado {
    border: 1px #111 solid;
}
</style>
