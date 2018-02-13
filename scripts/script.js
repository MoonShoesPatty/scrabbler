const letterSubmissionForm = document.querySelector('.letterSubmission');
const letterInput = document.querySelector('.letterInput');
const loadingSpinner = document.querySelector('.spinner01');
letterSubmissionForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    loadAnimation();
    findWords(letterInput.value);
}
function findWords(letters) {
    
}
function loadAnimation() {
    letterSubmissionForm.classList.add("hideElement");
    loadingSpinner.classList.remove("hideElement");
}