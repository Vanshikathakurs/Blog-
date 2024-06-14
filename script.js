const newPostBtn = document.getElementById('new-post-btn');
const postsList = document.getElementById('posts');
const newPostForm = document.getElementById('new-post-form');
const cancelBtn = document.getElementById('cancel-btn');

let posts = [];

function addPost(post) {
  const li = document.createElement('li');
  li.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
  postsList.appendChild(li);
}

function savePost(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  const post = { title, body };
  posts.push(post);

  addPost(post);

  newPostForm.style.display = 'none';
  newPostBtn.style.display = 'block';
}

function cancelPost(event) {
  event.preventDefault();

  newPostForm.style.display = 'none';
  newPostBtn.style.display = 'block';
}

newPostBtn.addEventListener('click', () => {
  newPostForm.style.display = 'block';
  newPostBtn.style.display = 'none';
});

cancelBtn.addEventListener('click', cancelPost);
newPostForm.addEventListener('submit', savePost);

// Add sample posts
addPost({ title: 'Sample Post 1', body: 'This is a sample post.' });
addPost({ title: 'Sample Post 2', body: 'Another sample post.' });