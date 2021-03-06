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

function createPost(post) {
  return new Promise( (resolve, reject) => {
    console.log('inside promise');
    setTimeout(() => {
      posts.push(post);
      resolve();
    },2000)

  })

}

async function init() {
  await createPost({ title:'post three',
  body:'This is post three'});
  console.log("post created");
  getPosts();
}

init();
