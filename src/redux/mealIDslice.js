import { ADD_COUNTRY_REJECTE, ADD_COUNTRY_STARTE, ADD_COUNTRY_SUCCES } from "./slice/types/types";






const initialState = {
    mealID:[],
    status:'',
    error:''
}




const mealIDReducer = (state=initialState, action) =>{
    const {type, payload} = action
    switch(type){
        case ADD_COUNTRY_STARTE:  
            return {
                ...state,
                 status: 'pending'}; 
        case  ADD_COUNTRY_SUCCES:
            return{
                ...state,
                status:'success',
                mealID:payload
            };
        case ADD_COUNTRY_REJECTE:
            return {
                  ...state,
                  status: 'error',
                  error: payload
            };
        default:
            return state
    }
}

export default mealIDReducer