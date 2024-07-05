import { createStore } from "vuex";
export default createStore({
    state:{
        category:'',
        cart: [],
    },
    mutations:{
        setCategory(state, newcategory){
            state.category = newcategory;
        },
        setCart(state, newcart){
            state.cart = newcart;
        },
    },
    getters:{
        getCategory: state => state.category,
        getCart: state => state.cart
    }
})