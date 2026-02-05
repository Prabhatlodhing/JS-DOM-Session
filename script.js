const container = document.getElementById('container');


const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 19 },
    { name: 'David', age: 21 },
    { name: 'Eve', age: 23 }
];



students.forEach(function (student) {
    container.innerHTML += `<div class="student-card">
        <h2>${student.name}</h2>
        <p>Age: ${student.age}</p>
    </div>`;
});








// const list = document.getElementById('list');
// const target = document.getElementById('target');
// const btn = document.getElementById('btn');

// function insertItem() {

//     const newItem = document.createElement('li');
//     newItem.innerText = 'Car - 0';
//     list.insertBefore(newItem, target);


// }


// btn.addEventListener('click', insertItem);





// const list = document.getElementById('list');


// const listItem = document.createElement('li');
// listItem.innerText = 'Student 0';


// list.prepend(listItem);






// const parent = document.getElementById('parent');
// const paraOne = document.getElementById('para-one');
// const paraTwo = document.getElementById('para-two');
// const paraThree = document.getElementById('para-three');
// const btn = document.getElementById('btn');

// function handleClick() {

// // console.log( "Parent Element", paraTwo.parentElement);

// // console.log("Children ", paraTwo.parentElement.children)

// // console.log("Next Sibling", paraTwo.nextElementSibling);

// // console.log("Previous Sibling", paraTwo.previousElementSibling);





// }

// btn.addEventListener('click', handleClick)










// const btn = document.getElementById('btn');


// function printElements(e) {
//     // console.log("Element name", e.target);
//     console.log("Element name", e.currentTarget);
// }


// btn.addEventListener('click', printElements)



// const name = document.getElementById('name');

// function handleInput(event) {
//     console.log( "event", event)
//     event.preventDefault();
//     // const value = event.target.value;
//     // console.log("Current input value:", value);
// }


// name.addEventListener('input', handleInput);



























// const box = document.getElementById('box');


// function printCoordinates(e) {

//     const x = e.clientX;
//     const y = e.clientY;

//     console.log(`X: ${x}, Y: ${y}`);

// }


// box.addEventListener('mousemove', printCoordinates)






// const car  = document.getElementById('car');

// function displayCarOptions() {
//     const selectedCar = car.value;
//     alert(`You have selected: ${selectedCar}`);
// }

// car.addEventListener('change', displayCarOptions)










// const heading = document.getElementById('heading');

// heading.style.color = 'blue';
// heading.style.backgroundColor = 'lightgray';
// heading.style.padding = '10px';
// heading.style.textAlign = 'center';

// console.log(heading)
// const password = document.getElementById('password');
// const btn = document.getElementById('toggleBtn');


// btn.addEventListener('click', ()=>{
//     if(password.getAttribute('type') === 'password') {
//         password.setAttribute('type', 'text');
//         btn.innerText = 'Show Password';
//     }else{
//         password.setAttribute('type', 'password');
//         btn.innerText = 'Hide Password';
//     }
// })















// const input = document.getElementById('name');
// const btn = document.getElementById('btn');



// input.addEventListener('input', ()=>{
//     if(input.value.length > 0 ){
//         btn.removeAttribute('disabled');

//     }else{
//         btn.setAttribute('disabled', '');   
//     }
// })








// const heading = document.querySelector('.container');







// console.log(heading.innerText);
// console.log(heading.textContent);
// console.log(heading.innerHTML);









// const userForm = document.querySelector("#userForm");



// userForm.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     const name = document.getElementById("name").value;


//     console.log(name);

// });







// const container = document.querySelector('.container');

// container.addEventListener('mouseover', ()=>{
//     container.style.backgroundColor = 'lightblue';
// })

// container.addEventListener('mouseout', ()=>{
//     container.style.backgroundColor = 'red';
// })



// const input = document.getElementById('searchBox');
// const button = document.getElementById('searchBtn');







// input.addEventListener('keydown', (e)=>{
//     if (e.key === 'Enter') {
//         alert("The user pressed Enter");
//     }
// })

// input.addEventListener('keyup', (e)=>{
//     if (e.key === 'Enter') {
//         alert("The user pressed Enter");
//     }
// })


// input.addEventListener('input', (event)=>{
//     const value = event.target.value;
//     console.log("Input event fired", value);
// })


// button.addEventListener('click', ()=>{
//     console.log("Button clicked");
// })