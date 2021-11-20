
//WordCount

const phrase1 = `"That's the password: 'PASSWORD 123'!", cried the Special Agent.\nSo I fled.`;
const phrase2 = 'one,\ntwo,\nthree';
const phrase3 = 'one,two,three';
const phrase4 = "Joe can't tell between 'large' and large." 
const phrase5 = "First: don't laugh. Then: don't cry.";
const phrase6 = "Joe can't tell between app, apple and a.";
const phrase7 = ' multiple   whitespaces';
const phrase8 = ",\n,one,\n ,two \n 'three'"

// Method one - Make the phrase into an array, then sort, and tally how many times the word is repeated


 const countWords = phrase => {
     // removes all punctuation but adds spaces for new lines and commas
    const strippedPhrase = phrase.toLowerCase().replace(/[.\/#!$%@\^&\*;:{}=\-_`~()"]/g, "").replace(/[\n,]/g, " ");
    // spits the string up into an array of words
    const phraseArray = strippedPhrase.split(" ").sort();
    // creates the object to return
    let wordsObject = {};
    // loops through the array
    phraseArray.forEach(word => {
        // removes any single quotes that may be around the words. This is done now and not in the original regex to preserve contractions
        word = word.replace(/^'(.*)'$/, '$1');
        // makes sure that extra spaces are not added to the array
        if(word !== ""){
            // this filters out all the words that are different and then I get the length of the array
            // I also had to but the same regex on the arrayItem as the word because I wasn't able remove the single quotes from the phrase to preserve contractions
            let counter = phraseArray.filter(arrayItem => arrayItem.replace(/^'(.*)'$/, '$1') === word).length;
            // adding the "new" word to the word count object 
            wordsObject[word] = counter;       
        }
    });
     return wordsObject;
};

console.log(countWords(phrase4));
