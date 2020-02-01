const state = {
    companies:[
        {name: 'Google',price: 10000},
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
}

const getters = {
    companies: state => {
        return state.companies;
    },
}

const mutations = {}

const actions = {}

export default {
    state, getters, mutations, actions
}