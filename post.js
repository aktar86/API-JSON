const loadPost = ()=> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(data => displayPost(data))
}


const displayPost = (posts) => {
    //get the post container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = "";
    



    posts.forEach(post => {
            //create poist card 
            const postCard = document.createElement('div');
            postCard.classList.add('post-card')
            postCard.innerHTML = `
                <div>
                    <p>${post.id}</p>
                    <h1>${post.title}</h1>
                    <p>${post.body}</p>
                    <button>submit now </button>
                </div>
            `
            postContainer.appendChild(postCard)
            
    })

}

loadPost()