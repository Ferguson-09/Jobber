'use strict';
const main = document.querySelector('main');
const postBtn = document.querySelector('.post-btn');
const textArea = document.querySelector('.input');
const container = document.querySelector('.container');
const image = document.querySelector('#imageUpload');
const openBtn = document.querySelector('.end-header');
const overlay = document.querySelector('.overlay');
const info = document.querySelector('.pop-text');
const closeBtn = document.querySelector('.close');
const middle = document.querySelector('.middle');
const now = new Date();
const apiURL = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';
const right = document.querySelector('.right');

const date = now.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
});

postBtn.addEventListener('click', (a) => {
    a.preventDefault();

    let textHTML = '';
    let imgHTML = '';

    if (textArea.value.trim() !== '') {
        textHTML = `<p class="text-out">${textArea.value}</p>`;
    }

    if (image.files[0]) {
        const imageUrl = URL.createObjectURL(image.files[0]);
        imgHTML = `<img src="${imageUrl}" class="image-out">`;
    }

    if (!textHTML && !imgHTML) {
        alert ('Insert content in the box');
        return;
    };


    const post = document.createElement('div');
    post.innerHTML = `
        <div class="top">
            <div class="end-header">
                <i class="fa-regular fa-user"></i>
            </div>          
            <h3 class="name">Ferguson Zibiri</h3>
            <p class="date-end">${date}</p>
        </div>
        ${textHTML}
        ${imgHTML}
    `;
    post.classList.add('output')
    middle.appendChild(post);

    textArea.value = '';
    image.value = '';
 }) 

// openBtn.addEventListener('click', () => {
//     overlay.style.display = 'flex';
// }) 


// closeBtn.addEventListener('click', () => {
//     overlay.style.display = 'none';
// })

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/JSON; charset=utf-8'
    },
    mode: 'cors'
}

fetch(apiURL, options)
    .then(response => response.json())
    .then(json => json.results)
    .then(console.log);

async function getUsers(endpointURL) {
    try {
        const result = await fetch (endpointURL, options);
        const data = await result.json();
        return(data.results)
    } catch (error) {
        console.log(error.message);
    }
}

async function displayUsers() {
    const users = await getUsers(apiURL);
    console.log(users)
    users.forEach(user => {
        right.innerHTML+= `
            <div class="friend">
                <img src="${user.picture.medium}" class="ppic">
                <div class="f-name">
                    <p class="friend-name">${user.name.first} ${user.name.last}</p>
                    <p>${user.location.city}</p>
                </div>
                <div class="add-friend">+</div>
            </div>
        `
    });
}
displayUsers();
