// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const getMain = document.querySelector('main');
const getBack = document.getElementById('back');
// TODO: Create a function that builds an element and appends it to the DOM
const makeEl = function () {
   const newBlog = document.createElement(section);
   document.getMain.appendChild(newBlog);
};
// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = function () {
    if ()
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
getBack.addEventListener('click', () => {redirectPage('../index.html')});