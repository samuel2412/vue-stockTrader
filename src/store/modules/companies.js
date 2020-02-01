const state = {
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
}

const getters = {
    companies: state => {
        return state.companies;
    },
}

const mutations = {
    randomize(){
        state.companies.map(company=>{
            company.price = Math.max(Math.floor(Math.random() * company.price*1.5) +1, company.price*0.75 )
        })
    }
}

const actions = {
    randomize: ({ commit }) => {
        commit('randomize');
    },
}

export default {
    state, getters, mutations, actions
}