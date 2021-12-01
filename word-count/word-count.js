
// Method one - Make the phrase into an array, then sort, and tally how many times the word is repeated

export const countWords = phrase => {
    const stripedPhrase = phrase.toLowerCase().replace(/[.\/#!$%@\^&\*;:{}=\-_`~()"]/g, "").replace(/[\n,]/g, " ");
    const phraseArray = stripedPhrase.split(" ").sort();
    let wordsObject = {};
    phraseArray.forEach(word => {
        word = word.replace(/^'(.*)'$/, '$1');
        if(word !== ""){
            let counter = phraseArray.filter(arrayItem => arrayItem.replace(/^'(.*)'$/, '$1') === word).length;
            wordsObject[word] = counter;       
        }
    });
     return wordsObject;
};