//import {ALERT_SYSTEM_CONFIG} from '../config.js'

import stations from '@/assets/json/estaciones.json'

//let myRequest = new Request(ALERT_SYSTEM_CONFIG.JSON_URL+'estaciones.json')
export default {
    getStations: function(){
        return stations
        //return fetch(myRequest)
        //       .then(response => response.text())
        //       .then(obj => console.log(obj));
    }
}
