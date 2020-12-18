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
import {L} from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    export default {
        name: "HMap",
        data: function(){
            return {
                zoom: 13,
                center: L.latLng(47.41322, -1.219482),
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.3, -32.2)
            }
        },
        components: {
            LMap,
            LTileLayer,
            LMarker,
        },
    }

</script>

<style scoped>
.map{
    height: 95vh;
}
</style>
