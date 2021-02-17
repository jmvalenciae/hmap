<template>
<div id="menu">
        <TabMenu :tabs="['Información', 'Variables', 'Galería']" 
                 :selected="selected" @selected="setSelected">

    <Tab :isSelected="selected === 'Información'">
    <div style="font-size: 90%;">
        <table class="table-responsive">
            <tbody>
                <tr>
                <td class="text-center">
                    <b>{{station.NOMBRES}}</b>
                </td>
                </tr>
                <tr>
                    <td>
                        <b>Tipo de Estación</b>
                        {{station.Red}}
                        <br>
                        <b>Latitud</b>
                        {{station.Latitud_1}}
                        <br>
                        <b>Longitud</b>
                        {{station.Longitud_1}}
                        <br>
                        <b>Altitud</b>
                        {{station["Altitud (m.s.n.m.)"]}} m.s.n.m
                        <br>
                        <b>Ubicación</b>
                        {{station.Ubicación}}
                        <br>
                        <b>Código</b>
                        {{station["Código estación"]}}
                        <br>
                        <b>Municipio</b>
                        {{station.Municipio}}
                        <br>
                        <b>Propietario</b>
                        {{station.Propietario}}
                        <br>
                        <b>Activa Desde</b>
                        {{station["Fecha de instalación"]}}
                        <br>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
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
