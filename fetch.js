const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
}

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(data => displayPost(data))
}

const displayPost = (posts) => {
    const ul = document.getElementById('post-container');
    ul.style.listStyle = 'none'
    ul.innerHTML = '';
    
    posts.forEach(post => {
        const li = document.createElement('li')
        li.innerText =`${post.id}: ${post.title}`;
        ul.appendChild(li)
    })
}