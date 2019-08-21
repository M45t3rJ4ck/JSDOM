// TRAVERSING THE DOM:
var itemList = document.querySelector('#items');

// A.1) PARENT NODE PROPERTY:
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';
// console.log(itemList.parentNode.parentNode);
// A.2) PARENT ELEMENT:
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'grey';
// console.log(itemList.parentElement.parentElement);

// B.1) CHILD NODES:
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';
// B.2) FIRST CHILD:
// console.log(itemList.firstChild);
// B.3) FIRST ELEMENT CHILD:
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'DOM Experience';
// B.4) LAST CHILD:
// console.log(itemList.lastChild);
// B.5) LARST ELEMENT CHILD:
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'DOM Experience';

// C.1) NEXT SIBLINGS:
// console.log(itemList.nextSibling);
// C.2) NEXT ELEMENT SIBLING:
// console.log(itemList.nextElementSibling);
// C.3) PREVIOUS SIBLING:
// console.log(itemList.previousSibling);
// C.4) PREVIOUS ELEMENT SIBLING:
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';

// D) CREATEELEMENT:
// var newDiv = document.createElement('div');
// D.1) ADD CLASS:
// newDiv.className = 'Hello';
// D.2) ADD ID:
// newDiv.id = 'World';
// D.3) ADD ATTRIBUTE:
// newDiv.setAttribute('title', 'GoodBye');
// D.4.1) CREATE TEXT NODE:
// var newDivText = document.createTextNode('Was it something I said');
// D.4.2) ADD TEXT TO DIV:
// newDiv.appendChild(newDivText);
// D.5) INSERT INTO DOM:
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = '30px';
// console.log(newDiv);
