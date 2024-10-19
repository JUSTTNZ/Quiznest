import { configureStore } from "@reduxjs/toolkit";
const initialState =  {
    score: 0,
    HighScore: 0,
 
    
}
const reducer = ( state = initialState, action) => {
switch (action.type) {
    case "SET_SCORE":
              return {
            ...state,
            score: action.payload
        }
    case "SET_HIGHSCORE":
              return {
                ...state,
                HighScore: Math.max(state.HighScore, action.payload)
              }
              case "RESET_SCORE":
            return {
                ...state,
                score: 0, // Reset score to 0
            };
    default:
        return state;
        
}

}
const store = configureStore({reducer})
export default store;