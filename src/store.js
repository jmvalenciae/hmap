
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {stations} from './modules/stations.js'

export const store = new Vuex.Store({
    modules: {stations}
});


