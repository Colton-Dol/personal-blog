// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const getMain = document.querySelector('main');
const getBack = document.getElementById('back');
const getUL = document.querySelector('ul');
// TODO: Create a function that builds an element and appends it to the DOM
const makeEl = function () {
    const newBlog = document.createElement('article');
    getMain.appendChild(newBlog);
};
// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = function () {
    const message = document.createElement('p');
    message.textContent = 'No Blog posts yet...'
    getMain.appendChild(message);
    
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = function () {
    if (localStorage.length === 0) {
        noPosts();
    } else {
        const posts = localStorage;
        for (let i = 0; i < posts.length; i++) {
            postValue = JSON.parse(posts.getItem(posts.key(i)));
            const newBlog = document.createElement('article');
            getMain.appendChild(newBlog);
            newBlog.innerHTML = `<h2>${postValue.title}</h2><blockquote>${postValue.content}</blockquote><p>Posted by: ${postValue.username}</p>`;
        }
        
    };
};
// TODO: Call the `renderBlogList` function
renderBlogList()
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
getBack.addEventListener('click', () => {redirectPage('../index.html')});