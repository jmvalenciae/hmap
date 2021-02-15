import StationAPI from '../api/stations.js'
//import estaciones from '../assets/json/estaciones.json';


export const stations = {
    state: {
        stations: [],
        stationsLoadStatus: 0,
        
    },

    actions: {
        loadStations({ commit }){
            commit( 'setStationsLoadStatus', 1 );

            return new Promise((resolve, reject) => {
                StationAPI.getStations()
                    .then( function( response ){
                        
                        commit( 'setStations', response );
                        commit( 'setStationsLoadStatus', 2 );
                        resolve(response);
                        
                    })
                    .catch( function(error){
                        commit( 'setStations', [] );
                        commit( 'setStationsLoadStatus', 3 );
                        reject(error);
                    });
            });
        }
    },

    getters: {
        getStations: state => {
            // Obtener estaciones con todas sus propiedades
            return state.stations
        }
    },
    mutations: {
        setStationsLoadStatus( state, status ){
            state.stationsLoadStatus = status;
        },

        setStations( state, stations ){
            state.stations = stations;
        }
    }
}
