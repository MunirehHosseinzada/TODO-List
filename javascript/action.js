
const postBtn = document.getElementById("postBtn");
const container = document.getElementById('container');
const inputUsername = document.getElementById('inputUsername');
const inputComment = document.getElementById('inputComment');
const discussion = document.getElementById('discussion');

var name;
var comment;

function Post(name, comment) {
    this.name = name
    this.comment = comment
}

const firstPost = new Post("Ahmad", "I have no idea!")

var posts = [firstPost]

function loadPosts() {
    posts.forEach((post, index) => {
        createPost(post.name, post.comment)
    })
    discussion.textContent = "Discussion (" + posts.length + ")"
}

function removeAllPosts() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function addPost(n, c) {
    removeAllPosts()
    const newPost = new Post(inputUsername.value, inputComment.value)
    posts.unshift(newPost)
    loadPosts()
    inputUsername.value = ""
    inputComment.value = ""
}

function createPost(n, c) {
    const containerDiv = document.createElement('div');
    containerDiv.style.minHeight = '100px'
    containerDiv.style.marginTop = '35px'

    const firstRow = document.createElement('div')
    firstRow.style.height = '40px'
    firstRow.style.display = 'flex'

    const userIcon = document.createElement('img')
    userIcon.src = 'resources/userIcon.webp'
    userIcon.style.height = '27px'
    userIcon.style.width = '27px'
    userIcon.style.flex = '0 0 auto'

    const username = document.createElement('p')
    username.textContent = n
    username.style.color = 'white'
    username.style.fontSize = '0.8em'
    username.style.fontFamily = 'Arial'
    username.style.marginTop = '5px'
    username.style.marginLeft = '5px'

    const time = document.createElement('p')
    time.textContent = 'Today'
    time.style.color = 'gray'
    time.style.fontSize = '0.8em'
    time.style.fontFamily = 'Arial'
    time.style.marginTop = '5px'
    time.style.marginLeft = '10px'

    const comment = document.createElement('p')
    comment.textContent = c
    comment.style.color = 'gray'
    comment.style.fontSize = '0.85em'
    comment.style.fontFamily = 'Arial'
    comment.style.margin = '0px'

    const trashIcon = document.createElement('img')
    trashIcon.src = 'resources/trashIcon.png'
    trashIcon.style.height = '13px'
    trashIcon.style.width = '13px'

    const removeP = document.createElement('p')
    removeP.textContent = 'Remove'
    removeP.style.color = 'gray'
    removeP.style.fontSize = '0.9em'
    removeP.style.fontFamily = 'Arial'
    removeP.style.margin = '0px'
    removeP.style.marginLeft = '10px'

    const removeBtn = document.createElement('button')
    removeBtn.style.display = 'flex'
    removeBtn.style.padding = '0px'
    removeBtn.style.backgroundColor = 'transparent'
    removeBtn.style.border = 'none'
    removeBtn.style.marginTop = '10px'
    removeBtn.addEventListener('click', function() {
        removePost(removeBtn.id)
    })
    removeBtn.id = n

    firstRow.appendChild(userIcon);
    firstRow.appendChild(username)
    firstRow.appendChild(time)
    containerDiv.appendChild(firstRow);
    containerDiv.appendChild(comment)
    removeBtn.appendChild(trashIcon)
    removeBtn.appendChild(removeP)
    containerDiv.appendChild(removeBtn)
    container.appendChild(containerDiv);
}

function removePost(btnId) {
    var index;
    for (i in posts) {
        if (posts[i].name == btnId){
            index = i
        }
    }
    
    posts.splice(index, 1)
    removeAllPosts()
    loadPosts()
}

postBtn.addEventListener('click', function() {
    addPost(inputUsername, inputComment)
});

window.onload = loadPosts;