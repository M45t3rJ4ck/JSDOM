// A)Examine the document object:
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "DOM Experiment";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "DOM Experiment";
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// B)Selector = GETELEMENTBYID:
// console.dir(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'DOM Experiment';
// headerTitle.innerText = 'Failed Experiment';
// headerTitle.innerHTML = '<h3>Experimented</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = '3px solid #000';

// C)Selector - GETELEMENTSBYCLASSNAME:
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// D)Selector - GETELEMENTSBYTAGNAME:
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// E)QUERYSELECTOR:
// var header = document.querySelector('#main-header');
// header.style.borderBottom = '3px solid #000';
// var input = document.querySelector('input');
// input.value = 'Hello Wolrd';
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send';
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

// F)QUERYSELECTORALL:
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'grey';
// }
// var even = document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < even.length; i++) {
//     even[i].style.backgroundColor = 'yellow';
// }
