<template>
<div id="menu">
    <TabMenu :tabs="['Info', 'Galeria', 'Otros']" 
             :selected="selected" @selected="setSelected">

    <Tab :isSelected="selected === 'Info'">
        <h1>Hello World</h1>
    </Tab>

    <Tab :isSelected="selected === 'Galeria'">
        <p>Goodbye world</p>
    </Tab>

    <Tab :isSelected="selected === 'Otros'">
        <li>Hello</li>
        <li>Hello</li>
        <li>Hello</li>
    </Tab>
    </TabMenu>
</div>
</template>
<script>
import TabMenu from './tabs/TabMenu.vue'
import Tab from './tabs/Tab.vue'

export default {
    name: "MapMenu",

    components: {TabMenu, Tab},

    props: {
        station:Object 
    },

    data(){
        return {
            selected: 'Info'
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
