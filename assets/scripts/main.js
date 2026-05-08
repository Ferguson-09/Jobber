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
const now = new Date();

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
    container.appendChild(post);

    textArea.value = '';
    image.value = '';
 }) 

// openBtn.addEventListener('click', () => {
//     overlay.style.display = 'flex';
// }) 


closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
})