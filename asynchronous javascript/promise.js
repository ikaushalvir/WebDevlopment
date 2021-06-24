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
    },10000)

  })

}

createPost( { title:'post three', body:'This is post three'} )
.then(getPosts);
