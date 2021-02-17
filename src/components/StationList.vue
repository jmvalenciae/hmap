<template>
<div class="station-list-container">
<MapMenu v-bind:station="station"/>

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
            station: {
                type: Array
            }
        }
    },

    mounted: function(){
        EventBus.$on('passStation', (sta) => {
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
    color: black;
    margin-top: 100px;
    text-align: center;
}
</style>
