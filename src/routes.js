
import Home from './components/Home.vue';
import Stocks from "./components/Stocks.vue";

export const routes = [
    { path: '', component: Home },
    { path: '/stocks', component: Stocks},
    //  { path: '/redirect', redirect:'/user'  },
    { path: '*', redirect: '/' }
];