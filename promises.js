// Promises

const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// function createPost(post, callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

getPosts();

createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch(err => console.log(err));

// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts); **** using callback

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'Goodbye');
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(
response => response.json();
);

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));


// Async and Await

async function init {
    await createPost({ title: 'Post Four', body: 'This is post four' });

    getPosts();
}

init();

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await response.json();

    console.log(data);
}

fetchUser();