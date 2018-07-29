import Vuex from 'vuex';
import Vue from 'vue';

import template from './modules/template/template';




Vue.use(Vuex);

var store = new Vuex.Store({
    modules: {
        template
    }
})


export default store;