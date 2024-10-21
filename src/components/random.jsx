
// Shuffle  array
export const Shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array; 
};
export const GetRandomQuestions = (obj, count) => {
    const keys = Object.keys(obj);
    const randomKeys = new Set();
  
    while (randomKeys.size < count && randomKeys.size < keys.length) {
      const randomIndex = Math.floor(Math.random() * keys.length);
      const key = keys[randomIndex];
      randomKeys.add(key); // Use Set to avoid duplicates
    }
  
    const selectedQuestions = Array.from(randomKeys).map(key => obj[key]);
    return Shuffle(selectedQuestions); // Shuffle the selected questions
  };


