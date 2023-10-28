document.getElementsByClassName('mouse')[1].innerHTML = '<h2>Goodbye World</h2>';
document.getElementsByClassName('mouse')[2].innerHTML = '<p>What a wonderful World</p>';

document.getElementById('cat').innerText = 'What a nice cat :)';
document.querySelector('#cat').innerText = 'What a beautiful cat ;)'
document.querySelectorAll('.mouse, #cat')[0].innerText = 'What a cheeky cat :('
document.getElementsByClassName('mouse')[0].style.color = 'brown';
document.getElementsByClassName('mouse')[1].style.backgroundColor = 'lightblue';

document.querySelector('#cat').className = 'something somethingElse' // how to add multiple classes to an element

// How to Iterate over multiple elements and update their css property
const selectElements = document.getElementsByClassName('mouse');
const copyOfSelectElements = [...selectElements];
copyOfSelectElements.map(element => element.style.fontSize = '14px')

// how to create an element

const divElement = document.createElement('div');
divElement.innerHTML = '<p>Naruto is one of the best animes of all times!</p>'

// 1. Target an element on the page
const helloElement = document.querySelector('.hello')
// 2. Use the appendChild() method on this element
helloElement.appendChild(divElement);

// how to remove an element

const firstChild = document.getElementById('firstChild');
helloElement.removeChild(firstChild);

const imgUrl = 'https://www.siliconera.com/wp-content/uploads/2021/05/One-Piece-Top-Ten-Characters-Worldwide.jpg';


document.getElementById('one-piece').addEventListener('click', function(){
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', imgUrl)
    // imgElement.setAttribute('width', '300px')
    // imgElement.setAttribute('height', '200px')
    imgElement.setAttribute('class', 'profile-image')
    imgElement.addEventListener('mouseover', function(e){
       console.log(e)
    })
    
    helloElement.appendChild(imgElement);
})

let button = document.getElementById('add-item-button');
 
button.onclick = function(event) {
  // 1. Access the input and get the value of the content
  const inputValue = document.getElementById('shopping-item').value;
  console.log('event', event)
  const liElement = document.createElement('li');
  liElement.innerText = inputValue;
  // 2. Find the <ul> element that is going to display the lists of items
  // 3. Append the input value to the <ul>
  document.getElementById('items-list').appendChild(liElement)
  document.getElementById('shopping-item').value = '';
};
