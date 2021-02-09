import StationAPI from '../api/stations.js'
//import estaciones from '../assets/json/estaciones.json';


export const stations = {
    state: {
        stations: StationAPI.getStations()
    },

    actions: {
    },

    getters: {
        getStations: state => {
            // Obtener estaciones con todas sus propiedades
            return state.stations
        }
    }
}
