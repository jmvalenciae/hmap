import Vue from 'vue';
import Vuex from 'vuex';
import estaciones from '../assets/json/estaciones.json';

Vue.use(Vuex);

export const stations = {
    state: {
        stations: estaciones
    },

    getters: {
        getStations: state => {
            // Obtener estaciones con todas sus propiedades
            return state.stations
        }
    }
}
