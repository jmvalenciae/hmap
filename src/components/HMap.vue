<template>
<!-- .row map -->
<div id="map" class="row">
<l-map  
    :zoom="zoom" 
    :center="center"
    :options="{zoomControl: false}"
    >
    <l-tile-layer :url="url" :attribution="attribution"/>
    <l-control-scale position="bottomleft" :metric="true" :imperial="true"/>
    <l-geo-json :geojson="geojson"
                :options-style="StyleFunction"/>


    <l-marker 
        v-for="(sta, index) in stations" :key="index"
        :lat-lng="getLatLng(sta.Latitud, sta.__EMPTY_7, sta.__EMPTY_8, 
                            sta.Longitud, sta.__EMPTY_10, sta.__EMPTY_11)">
        <l-tooltip>{{sta.NOMBRES}}</l-tooltip>
        <l-popup class=probe><MapMenu v-bind:station="sta"/></l-popup>


        <l-icon 
            v-if="sta.Red === 'Comunitarias'">
        <img src="../assets/icons/Comunitarias.png">
        </l-icon>

        <l-icon 
            v-if="sta.Red === 'SAT Deslizamientos'">
        <img src="../assets/icons/nubladoNoche.png">
        </l-icon>

        <l-icon 
            v-if="sta.Red === 'Cuencas'">
        <img src="../assets/icons/desconectada.png">
        </l-icon>

        <l-icon 
            v-if="sta.Red === 'SISMOLÓGICA'">
        <img src="../assets/icons/acelerografica.png">
        </l-icon>

        <l-icon 
            v-if="sta.Red === 'CHEC'">
        <img src="../assets/icons/desconectadaParcial.png">
        </l-icon>

    </l-marker>
        
</l-map>
</div>
<!-- /.row map -->
</template>

<script>
import caldasmap from '../assets/json/CaldasMun.json';
import MapMenu from "./MapMenu.vue"
import {latLng} from 'leaflet';
import {LMap, 
        LTileLayer, 
        LMarker, 
        LControlScale,
        LGeoJson,
        LIcon,
        LTooltip,
        LPopup,
        //Lcontrol,
        } from 'vue2-leaflet';

export default {
    name: "HMap",
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LControlScale,
        LGeoJson,
        LIcon,
        LTooltip,
        LPopup,
        //Lcontrol,
        MapMenu,
    },

    data(){
        return {
            zoom: 9,
            center: latLng(5.06889, -75.51738),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
            geojson: caldasmap,
        };
    },

    computed:{
        StyleFunction(){
            /* Geojson style */
            return() => {
                return {
                weight: 2,
                color: '#111111',
                opacity: 1,
                fillColor: '#111111',
                fillOpacity: 0.1
                };
            };
        },

        stations(){
            /* store.js data (vuex) */
            return this.$store.getters.getStations;
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
