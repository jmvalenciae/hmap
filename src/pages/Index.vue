<template>
<div>
<HMap />
<StationList />
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
}
</script>

<style scoped>

</style>
