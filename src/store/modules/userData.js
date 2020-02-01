const state = {
    userStocks: [
        { name: 'Google', quantity: Math.max(Math.floor(Math.random() * 50) + 1, 10) },
        { name: 'Apple', quantity: Math.max(Math.floor(Math.random() * 50) + 1, 10) },
        { name: 'Facebook', quantity: Math.max(Math.floor(Math.random() * 50) + 1, 10) },
        { name: 'Tesla', quantity: Math.max(Math.floor(Math.random() * 50) + 1, 10) },
    ],
    funds: 10000,
}

const getters = {
    userStocks: (state, rootState) => {
        const aux = rootState.companies.map(company => ({
            ...state.userStocks.find((stock) => (stock.name === company.name) && stock),
            ...company
        }));
        return aux.filter(item => item.quantity);
    },
    userFunds: state => {
        return (state.funds).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');;
    },
}

const mutations = {
    buyStocks: (state, payload) => {
        const { company, quantity } = payload;
        if (quantity > 0) {
            const index = state.userStocks.findIndex(stock => stock.name === company.name);
            if (state.funds <= quantity * company.price) {
                if (index > 0) {
                    state.userStocks[index].quantity += Number((state.funds / company.price));
                } else {
                    state.userStocks.push(
                        { name: company.name, quantity: Number((state.funds / company.price)) }
                    );
                }
                state.funds = 0;
            } else {
                if (index > 0) {
                    state.userStocks[index].quantity += Number(quantity);
                } else {
                    state.userStocks.push(
                        { name: company.name, quantity: Number(quantity) }
                    );
                }
                state.funds -= quantity * company.price;
            }
        }
    },
    sellStocks: (state, payload) => {
        const { company, quantity } = payload;
        const index = state.userStocks.findIndex(stock => stock.name === company.name);
        if (quantity > 0) {
            if (state.userStocks[index].quantity <= quantity) {
                state.funds += state.userStocks[index].quantity * company.price;
                state.userStocks.splice(index, 1);
            } else {
                state.funds += quantity * company.price;
                state.userStocks[index].quantity -= Number(quantity);
            }
        }
    },
}

const actions = {
    buyStocks: ({ commit }, payload) => {
        commit('buyStocks', payload);
    },
    sellStocks: ({ commit }, payload) => {
        // if (confirm('You sure?')) {
        commit('sellStocks', payload);
        // }
    }
}

export default {
    state, getters, mutations, actions
}