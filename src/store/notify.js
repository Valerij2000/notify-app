import loadMore from '../js/loadMore.js'


export default {
    state: {
      hotels: [],
      hotelsMain: [],
      stars: [null, '★', '★★', '★★★', '★★★★', '★★★★★'],
    },
    mutations: {
        setNotify (state, payload) {
            state.hotels = payload;
        },
        setNotifyMain (state, payload) {
            state.hotelsMain = payload;
        },
        loadHotels (state, payload) {
            state.hotelsMain = [...state.hotelsMain, ...payload];
        }
    }, 
    actions: {
        setNotify ({commit}, payload) {
            commit('setNotify', payload);
        },
        setNotifyMain ({commit}, payload) {
            commit('setNotifyMain', payload);
        },
        
        loadHotels ({commit, getters})  {
            let res = getters.getNotifyFilter;
            commit('loadHotels', loadMore(res));
        },

    },
    getters: {
       getNotify (state) {
           return state.hotels;
       },
       getNotifyMain (state) {
        return state.hotelsMain;
        },
       getNotifyFilter (state) {
        return state.hotels.filter( h => {
            return h.main === false;
        })
        },
      
       getStarsHotel (state) {
        return state.stars;
       },
    },
}

