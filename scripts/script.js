const letterSubmissionForm = document.querySelector('.letterSubmission');
const letterInput = document.querySelector('.letterInput');
letterSubmissionForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    findWords(letterInput.value);
}
function findWords(letters) {
    
}