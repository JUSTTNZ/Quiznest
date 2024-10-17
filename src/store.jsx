import { configureStore } from "@reduxjs/toolkit";
const initialState =  {
    score: 0,
 
    
}
const reducer = ( state = initialState, action) => {
switch (action.type) {
    case "SET_SCORE":
              return {
            ...state,
            score: action.payload
        }
    default:
        return state;
        
}

}
const store = configureStore({reducer})
export default store;