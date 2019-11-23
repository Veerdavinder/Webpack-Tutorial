import image from './Images/picture.jpg'

function addImage(){
    const img=document.createElement('img');
    img.alt='Image';
    img.width=400;
    img.src=image;

    const body = document.querySelector('body');
    body.appendChild(img)
}

export default addImage;