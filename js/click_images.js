const images= document.querySelectorAll('img');

images.forEach(image =>{
    image.addEventListener('click',()=>{
        const message = image.getAttribute('data-info');
        alert(message);
    });
});
