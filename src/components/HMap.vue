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
<l-geo-json :geojson="geojson"
            :options-style="StyleFunction"/>
</l-map>
</div>
<!-- /.row map -->
</template>

<script>
import manizalesmap from '../assets/json/CaldasMun.json';
//import caldasmap from '../assets/json/Caldas.json';
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
        
        computed:{
            StyleFunction(){
                return() => {
                    return {
                    weight: 2,
                    color: '#111111',
                    opacity: 1,
                    fillColor: '#111111',
                    fillOpacity: 0.1
                    };
                };
            }
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
