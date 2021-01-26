import Vue from 'vue';
import Vuex from 'vuex';
import estaciones from '../assets/json/estaciones.json'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        stations: estaciones
    }
})
