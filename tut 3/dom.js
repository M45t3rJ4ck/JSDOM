// A)HANDLING EVENTS:
// var buttonClicked = document.getElementById('button').addEventListener('click', buttonClick);
// function buttonClick (e) {
//     // console.log('Button Clicked');
//     // document.getElementById('header-title').textContent = 'Button Clicked';
//     // document.querySelector('#main').style.backgroundColor = 'yellow';
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';
//     // console.log(e.type);
//     // console.log(e.clientX);
//     // console.log(e.clientY);
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);
//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);
// }
// var buttonClicked = document.getElementById('button').addEventListener('click', runEvent);
// var buttonClicked = document.getElementById('button').addEventListener('dblclick', runEvent);
// var buttonClicked = document.getElementById('button').addEventListener('mousedown', runEvent);
// var buttonClicked = document.getElementById('button').addEventListener('mouseup', runEvent);
// var box = document.getElementById('box').addEventListener('mouseenter', runEvent);
// var box = document.getElementById('box').addEventListener('mouseleave', runEvent);
// var box = document.getElementById('box').addEventListener('mouseover', runEvent);
// var box = document.getElementById('box').addEventListener('mouseout', runEvent);
// var box = document.getElementById('box').addEventListener('mousemove', runEvent);
// function runEvent (e) {
    // console.log('EVENT TYPE: ' + e.type);
    // output.innerHTML = '<h3> MouseX: ' + e.offsetX + '</h3> <h3> MouseY: ' + e.offsetY + '</h3>';
    // box.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';
// }
// var box = document.getElementById('box');
// // box.addEventListener('mousemove', runEvent);
// box.addEventListener('mousemove', runEvent);
// function runEvent (e) {
//     document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+',40)';
// }
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);
form.addEventListener('submit', runEvent);
function runEvent (e) {
    e.preventDefault();
    console.log('EVENT TYPE: ' + e.type);
    console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';
    // document.body.style.display = 'none';
}
