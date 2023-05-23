import { createStore } from 'vuex'
import Axios from 'axios';

const store = createStore({
    state: {
        instruments: null,
    },
    getters: {
        INSTRUMENTS: state =>{
            return state.instruments;
        },
    },
    mutations: {
        SET_INSTRUMENTS: (state,payload) => {
            state.instruments = payload;
        },
    },
    actions: {
        GET_INSTRUMENTS: async (context) => {
            let {data} = await Axios.get('http://localhost:8000/api/v1/instruments/');
            context.commit('SET_INSTRUMENTS', data.results);
        },
        GET_EMPLOYEES_NEW_PAGE: async (context, numberPage) => {
            let {data} = await Axios.get(`http://localhost:8000/api/v1/instruments/?page=${numberPage}`);
            context.commit('SET_INSTRUMENTS', data.results);
        },

        GET_INSTRUMENTS_FILTER_CATEGORY: async (context, cat) => {
            let {data} = await Axios.get(`http://localhost:8000/api/v1/instruments/?category=${cat}`);
            context.commit('SET_INSTRUMENTS', data.results);
        },
    }
  })

  export default store

