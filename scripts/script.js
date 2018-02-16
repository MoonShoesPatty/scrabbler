const letterSubmissionForm = document.querySelector('.letterSubmission');
const letterInput = document.querySelector('.letterInput');
const loadingSpinner = document.querySelector('.spinner01');

const wordList = ["pat", "patty", "hey", "hoes", "shoe", "shoes"]

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
    wordList.forEach(word => {
        // Don't bother checking the word if we don't have enough letters
        if (!(word.length > letters.length)) {
            // Check the word
            if (wordMatch(userLetters, word)) {
                canSpellArray.push(word);
            }
            console.log("tried: " + word)
        } else {
            console.log("skipt: " + word)
        }
        // currentWordArray = word.split('');
        // const letterArray = userLetters;
        // for (let i = 0; i < letterArray.length; i++) {
        //     console.log(currentWordArray, letterArray[i]);
        // }
    })
    console.log(canSpellArray)
}

// Given an array of letters (letters) and a string (word), determine whether it is possible to spell word with letters
function wordMatch(letters, word) {
    let hitCount = 0;
    for (let i = 0; i < letters.length; i++) {
        let hit = false;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === letters[i]) {
                word = word.slice(0, j) + word.slice(j + 1, word.length)
                console.log(word)
                // console.log(`Hit on ${word[j]}`)
                // console.log(wordCopy.slice(0, j) + wordCopy.slice(j + 1, word.length))
                hit = true;
                hitCount++;
                j = word.length;
            }
        }
    }
    if (word === "") {
        return true;
    } else {
        return false;
    }



    // console.log("spelled word: " + spelledWord.join(''));
    // console.log("Equality check" + word.length === spelledWord.join('').length);

    // return (word.length === spelledWord.join('').length)
    
    // for (let i = 0; i < word.length; i++) {
    //     let hit = false;
    //     for (let j = 0; j < letters.length; j++) {
    //         console.log(word[i], letters[j]);
    //         if (word[i] === letters[j]) {
    //             j = letters.length;
    //             console.log("^^^^^ Hit! ^^^^^");
    //         }
    //     }
    //     //if (hit)
    // }
    
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
    //return true;
}

// Toggle between text input and loading animation display
function toggleLoadAnimation() {
    letterSubmissionForm.classList.toggle("hideElement");
    loadingSpinner.classList.toggle("hideElement");
}

// ----- EVENT LISTENERS ----- //
letterSubmissionForm.addEventListener('submit', handleSubmit);