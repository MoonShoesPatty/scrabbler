const letterSubmissionForm = document.querySelector('.letterSubmission');
const letterInput = document.querySelector('.letterInput');
const loadingSpinner = document.querySelector('.spinner01');

const wordList = ["pat", "patty", "patrick"]

// handle submission of letters
function handleSubmit(event) {
    event.preventDefault();
    toggleLoadAnimation();
    findWords(letterInput.value);
}

// Find any words which can be spelled with the user's letters
function findWords(letters) {
    // Create array of letter input for searching
    const userLetters = letters.split('');
    // Empty array to be added to when a word match is found
    const canSpellArray = [];

    // FIND A WAY TO NARROW THE LIST BEFOREHAND, WOW
        // Eliminate all words that start with letters that aren't in userLetters
        // Eliminate all words that are too long
        // Elimniate 

    // Run through the remaining array to find appropriate words
    wordList.map(word => {
        if (wordMatch(userLetters, word)) {
            canSpellArray.push(word);
        }
        // currentWordArray = word.split('');
        // const letterArray = userLetters;
        // for (let i = 0; i < letterArray.length; i++) {
        //     console.log(currentWordArray, letterArray[i]);
        // }
    })
}

// Given an array of letters (letters) and a string (word), determine whether it is possible to spell word with letters
function wordMatch(letters, word) {

    for (let i = 0; i < word.length; i++) {
        let hit = false;
        for (let j = 0; j < letters.length; j++) {
            console.log(word[i], letters[j]);
            if (word[i] === letters[j]) {
                j = letters.length;
                console.log("^^^^^ Hit! ^^^^^");
            }
        }
        if (hit)
    }
    
    // for (let i = 0; i < letters.length; i++) {
    //     let something = wordArray.find(wordLetter => {
    //         return (wordLetter === letters[i])
    //     })
    //     console.log(something)
    // }

    // wordArray.every(wordLetter => {
    //     letters.every(userLetter => {
    //         console.log(wordLetter, userLetter)
    //         if (wordLetter === userLetter) {
    //             return true;
    //         }
    //     })
    // });
    return true;
}

// Toggle between text input and loading animation display
function toggleLoadAnimation() {
    letterSubmissionForm.classList.toggle("hideElement");
    loadingSpinner.classList.toggle("hideElement");
}

// ----- EVENT LISTENERS ----- //
letterSubmissionForm.addEventListener('submit', handleSubmit);