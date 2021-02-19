<template>
<div class="station-list-container">
<button type="button" class="close" @click="stations_list=[]">&times;</button>
<MapMenu v-for="(sta, index) in stations_list" 
         v-bind:key="index" v-bind:station="sta"/>

</div>
</template>

<script>
import MapMenu from '@/components/StationList/MapMenu.vue'
import {EventBus} from '@/event-bus.js'
export default {
    name: 'StationList',
    components: {
        MapMenu
    },

    data(){
        return {
            stations_list: [],
            station: {
                type: Array
            }
        }
    },

    mounted: function(){
        EventBus.$on('passStation', (sta) => {
            this.stations_list = this.stations_list.concat(sta);
            this.station = sta;
        })
    }
}
</script>

<style scoped>
.station-list-container {
    background-color: white;
    width:100%;
    height: 100%;
    /*color: black;*/
    margin-top: 100px;
    text-align: center;
}
</style>
