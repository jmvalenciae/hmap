<template>
<!-- .row map -->
<div class="row map">
<l-map :zoom="zoom" :center="center">
<l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
<l-marker lat-lng="marker"></l-marker>
</l-map>
</div>
<!-- /.row map -->
</template>

<script>
import {latLng} from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    export default {
        name: "HMap",
        components: {
            LMap,
            LTileLayer,
            LMarker,
        },
        data: function(){
            return {
                zoom: 13,
                center: latLng(5.0670, -75.5046),
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; Mapa Histórico',
                marker: latLng(5.0670, -75.5046),
            };
        },
    }
</script>

<style scoped>
.map{
    height: 95vh;
}
</style>
