<template>
<!-- .row map -->
<div id="map" class="row">
<l-map  
    :zoom="zoom" 
    :center="center"
    :options="{zoomControl: false}"
    >
<l-tile-layer :url="url" :attribution="attribution"/>
<l-marker 
    v-for="(sta, index) in stations" :key="index"
    :lat-lng="getLatLng(sta.Latitud, sta.__EMPTY_7, sta.__EMPTY_8, sta.Longitud, sta.__EMPTY_10, sta.__EMPTY_11)"/>
    
<l-control-scale position="bottomleft" :metric="true" :imperial="true"/>
<l-geo-json :geojson="geojson"
            :options-style="StyleFunction"/>
</l-map>
</div>
<!-- /.row map -->
</template>

<script>
import manizalesmap from '../assets/json/CaldasMun.json';
import CaldasStations from '../assets/json/estaciones.json'
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
                zoom: 9,
                center: latLng(5.06889, -75.51738),
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
                marker: latLng(5.06889, -75.51738), 
                geojson: manizalesmap,
                stations: CaldasStations,
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
        },

        methods: {
            getLatLng: function(lat, latmin, latsec, lng, lngmin, lngsec){
                var Lat = lat + latmin/60.0 + latsec/36e2
                var Lng = lng + lngmin/60.0 + lngsec/36e2
                return latLng(Lat, -Lng);
            }
        },

        mounted(){
            console.log(this.stations)
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
