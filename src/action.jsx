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