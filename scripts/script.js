const letterSubmissionForm = document.querySelector('.letterSubmission');
const letterInput = document.querySelector('.letterInput');
const loadingSpinner = document.querySelector('.spinner01');
letterSubmissionForm.addEventListener('submit', handleSubmit);

const wordList = ["pat", "patty", "patrick"]

function handleSubmit(event) {
    event.preventDefault();
    toggleLoadAnimation();
    findWords(letterInput.value);
}
function findWords(letters) {
    // Create array of letter input for searching
    const userLetters = letters.split('');
    console.log(userLetters);

    // FIND A WAY TO NARROW THE LIST BEFOREHAND, WOW
        // Eliminate all words that start with letters that aren't in userLetters
        // Eliminate all words that are too long
        // Elimniate 

    // Run through the remaining array to find appropriate words
    wordList.map(word => {
        
    })
}
function toggleLoadAnimation() {
    letterSubmissionForm.classList.toggle("hideElement");
    loadingSpinner.classList.toggle("hideElement");
}