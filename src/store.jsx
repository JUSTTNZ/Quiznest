import { configureStore } from "@reduxjs/toolkit";
const initialState =  {
    score: 0,
    HighScore: 0,
    isAddition : true,
    isSubtraction: true,
    isDivision: true,
    isMuliplication: true,
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
            }
            case "SET_ADDITION":
              return {
                ...state,
                isAddition: action.payload
              }
              case "SET_SUBTRACTION":
                return {
                  ...state,
                  isSubtraction: action.payload
                }    
                 case "SET_DIVISION":
                return {
                  ...state,
                  isDivision: action.payload
                }
                case "SET_MULTIPLICATION":
                  return {
                    ...state,
                    isMuliplication: action.payload
                  }
    default:
        return state;
        
}

}
const store = configureStore({reducer})
export default store;