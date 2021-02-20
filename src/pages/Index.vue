<template>
<div>
    <div>
        <HMap />
    </div>
    <!-- .bienvenidos -->
    <div class="bienvenidos">
    <StationList v-show="show" @closeSidebar="closeSidebar" @openSidebar="openSidebar"/>
    </div>
    <!-- /.bienvenidos -->
</div>
</template>

<script>
import HMap from '@/components/HMap.vue'
import StationList from '../components/StationList.vue'
export default {
    name: 'Index',

    components: {
        HMap,
        StationList
    },

    data(){
        return {
            show: false
        }
    },

    methods: {
        closeSidebar(){
            this.show = false;
        },

        openSidebar(){
            this.show = true;
        }
    }
}
</script>

<style scoped>
.bienvenidos {
    position: absolute;
    height: 90%;
    width: 30%;
    min-width: 350px;
    z-index: 1;
    top: -4.5%;
    right: 0.2%;
    display: flex;
    }

</style>
