// TODO: Create a variable that selects the form element
const getForm = document.querySelector('form');
const getUsername = document.getElementById('username');
const getTitle = document.getElementById('title');
const getContent = document.getElementById('content');
const submitButton = document.getElementById('submit');
const error = document.getElementById('error');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
const formSubmit = function () {
    const post = {
        username: getUsername.value,
        title: getTitle.value,
        content: getContent.value
    };

    if (getUsername.value === '' || getTitle.value === '' || getContent.value === '') {
        error.textContent = 'Please complete the form'
    } else {
        localStorage.setItem(`${post.title}`, JSON.stringify(post));
        redirectPage('../blog.html')
        getUsername.value = '';
        getTitle.value = '';
        getContent.value = '';
    };
};
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    formSubmit();
});