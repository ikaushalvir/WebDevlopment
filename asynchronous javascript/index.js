const posts = [
  {
    title:'post one',
    post:'This is post one'
  },
  {
    title:'post two',
    post:'This is post two'
  }
]
function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
  document.body.innerHTML = output;
  },1000)
}

function createPost(post,callBack) {
  setTimeout(() => {
    posts.push(post);
    callBack();
  },2000)
}

createPost({ title:'post three',
body:'This is post three'},getPosts);
