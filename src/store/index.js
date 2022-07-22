import { createStore } from "vuex";

export default createStore({
    actions:{
        nextStep(_, payload){
            console.log(payload);
        }
    }
})