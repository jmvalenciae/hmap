import {ALERT_SYSTEM_CONFIG} from '../config.js'

import stations from '../assets/json/estaciones.json'

export default {
    getStations: function(){
        return stations;
    }
}
