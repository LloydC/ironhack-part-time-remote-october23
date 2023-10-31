function generateCatPicture(){
    const catPictures = [
        'https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc',
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
        'https://images.unsplash.com/photo-1573865526739-10659fec78a5',
        'https://images.unsplash.com/photo-1495360010541-f48722b34f7d'
    ]
    // 1. Create an Img element
    const imgElement = document.createElement('img');
    // 2. Add a cat picture url to the 'src'
    const randomImageIndex = Math.floor(Math.random()*catPictures.length)

    imgElement.setAttribute('src', catPictures[randomImageIndex])//imgElement.src = catPictures[randomImageIndex]
    imgElement.setAttribute('width', '100px')
    imgElement.setAttribute('height', '100px')
    imgElement.setAttribute('class', 'circular-img shadow')
    // 3. Target an element on the page to display my new cat image
    document.getElementById('cat-container').appendChild(imgElement);
}

document.getElementById('hide-cats').addEventListener('click', function(){
    // 1. Select all the cats pictures on the page
//     const catsPictures = document.querySelectorAll('img')
//     console.log('catsPictures', catsPictures)
//     // 2. Hide all the cats pictures
//    const copyOfCatsPictures = [...catsPictures]
//    copyOfCatsPictures.map( catPicture => catPicture.className = 'hidden')

// Get the button to either display or hide the cat pictures

// 1. Select all the cats pictures on the page
const catsPictures = document.querySelectorAll('img');
// 2. Check whether their 'class' property is equal to 'hidden' or 'circular-img'
// 3. a/ If class === 'circular-img' ---> class === 'hidden'
//    b/ If class === 'hidden' ---> class === 'circular-img'
const copyOfCatsPictures = [...catsPictures]
console.log(copyOfCatsPictures[0].className)

copyOfCatsPictures.map(catPicture => catPicture.classList.toggle("hidden"))

if(document.getElementById('hide-cats').textContent == 'Hide cats pictures'){
    document.getElementById('hide-cats').textContent = 'Show cats pictures';
}
else {
    document.getElementById('hide-cats').textContent = 'Hide cats pictures';
}

// document.getElementById('hide-cats').textContent === 'Hide cats pictures' ? document.getElementById('hide-cats').textContent = 'Show cats pictures' : document.getElementById('hide-cats').textContent = 'Hide cats pictures';
    // if(copyOfCatsPictures[0].className === 'circular-img shadow'){ // all cats pictures are displayed
    //     copyOfCatsPictures.map( catPicture => catPicture.className = 'hidden')// hides cats pictures
    //     document.getElementById('hide-cats').textContent = 'Show the cats pictures'; // Change the content of the button
    // }
    // else {
    //     copyOfCatsPictures.map( catPicture => catPicture.className = 'circular-img shadow')// hides cats pictures
    //     document.getElementById('hide-cats').textContent = 'Hide the cats pictures'; // Change the content of the button
    // }
})