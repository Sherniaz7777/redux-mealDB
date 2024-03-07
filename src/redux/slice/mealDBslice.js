import { ADD_COUNTRY_REJECTED, ADD_COUNTRY_STARTED, ADD_COUNTRY_SUCCESS } from "./types/types";





const initialState = {
    mealDB:[],
    status:'',
    error:''
}




const mealDbReducer = (state=initialState, action) =>{
    const {type, payload} = action
    switch(type){
        case ADD_COUNTRY_STARTED:  
            return {
                ...state,
                 status: 'pending'}; 
        case  ADD_COUNTRY_SUCCESS:
            return{
                ...state,
                status:'success',
                mealDB:payload
            };
        case ADD_COUNTRY_REJECTED:
            return {
                  ...state,
                  status: 'error',
                  error: payload
            };
        default:
            return state
    }
}

export default mealDbReducer