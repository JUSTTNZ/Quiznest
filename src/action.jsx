export const setScore = (score) => ({
    type: "SET_SCORE",
    payload:score
    })

    export const setHighScore = (Highscore) => ({
        type: "SET_HIGHSCORE",
        payload:Highscore
        })
    
    
        export const resetScore = () => ({
            type: "RESET_SCORE",
        });

        export const setAddition = (add) => ({
            type: "SET_ADDITION",
            payload:add
            })
          
            export const   setSubtraction = (sub) => ({
                type: "SET_SUBTRACTION",
                payload:sub
                })