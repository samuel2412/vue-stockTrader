import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        companies:[
            {name: 'Google',price: 100},
            {name: 'BMW',price: 100},
            {name: 'Apple',price: 100},
            {name: 'Facebook',price: 100},
            {name: 'Twitter',price: 100},
            {name: 'Dell',price: 100},
            {name: 'TCL',price: 100},
            {name: 'Samsung',price: 100},
            {name: 'Netflix',price: 100},
            {name: 'Tesla',price: 100},
        ],
        userStocks:[
            {name: 'Google',price: 100, quantity: (Math.random*100)+1},
            {name: 'Apple',price: 100, quantity: (Math.random*100)+1},
            {name: 'Facebook',price: 100, quantity: (Math.random*100)+1},
            {name: 'Tesla',price: 100, quantity: (Math.random*100)+1},
        ]
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
});