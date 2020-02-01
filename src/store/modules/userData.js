const state = {
    userStocks:[
        {name: 'Google',price: 100, quantity: (Math.random*100)+1},
        {name: 'Apple',price: 100, quantity: (Math.random*100)+1},
        {name: 'Facebook',price: 100, quantity: (Math.random*100)+1},
        {name: 'Tesla',price: 100, quantity: (Math.random*100)+1},
    ],
    funds: 10000,
}

const getters = {
    userStocks: state => {
        return state.userStocks;
    },
    userFunds: state => {
        return (state.funds).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');;
    },
}

const mutations = {
    buyStocks: state => {},
    sellStocks: state =>{},
}

const actions = {}

export default {
    state, getters, mutations, actions
}