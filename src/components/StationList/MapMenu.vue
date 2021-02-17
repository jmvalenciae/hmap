<template>
<div id="menu">
        <TabMenu :tabs="['Información', 'Variables', 'Galería']" 
                 :selected="selected" @selected="setSelected">

    <Tab :isSelected="selected === 'Información'">
        <h1>Hello World</h1>
    </Tab>

    <Tab :isSelected="selected === 'Variables'">
        <p>Goodbye world</p>
    </Tab>

    <Tab :isSelected="selected === 'Galería'">
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
    </Tab>
    </TabMenu>
</div>
</template>
<script>
import TabMenu from '@/components/StationList/TabMenu.vue'
import Tab from '@/components/StationList/Tab.vue'

export default {
    name: "MapMenu",

    components: {TabMenu, Tab},

    props: {
        station:Object 
    },

    data(){
        return {
            selected: 'Información'
        }
    },

    methods: {
        setSelected(tab){
            this.selected = tab;
        }
    }
}
</script>

<style scoped>
#menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>
