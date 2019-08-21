// A) Create variables:
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// B) Create form submit event:
form.addEventListener('submit', addItem);
// D) Delete event:
itemList.addEventListener('click', removeItem);
// F) Filter event:
filter.addEventListener('keyup', filterItems);

// C) Create add item:
function addItem (e) {
    e.preventDefault();
    // console.log(1);
    // C.1) Get input value:
    var newItem = document.getElementById('item').value;
    // C.2) Create new li:
    var li = document.createElement('li');
    // C.3) Create add class:
    li.className = 'list-group-item';
    // console.log(li);
    // C.4) Add text node with input value:
    li.appendChild(document.createTextNode(newItem));
    // C.5) Create delete button element:
    var delbut = document.createElement('button');
    // C.6) Add classess to delete button:
    delbut.className = 'btn btn-danger btn-sm float-right delete';
    // C.7) Appened text node:
    delbut.appendChild(document.createTextNode('X'));
    // C.8) Append delete button to new li tag:
    li.appendChild(delbut);
    // C.9) Append li to list:
    itemList.appendChild(li);
}

// E) Create remove item:
function removeItem (e) {
    // console.log(1);
    // E.1) Ensure only fires if X clicked:
    if (e.target.classList.contains('delete')) {
        // console.log(1);
        // E.2) Confirm with user:
        if (confirm('Are You Sure?')) {
            // E.3) If yes clicked:
            var li = e.target.parentElement;
            // E.4) Remove child of item-list:
            itemList.removeChild(li);
        }
    }
}

// G) Create filter items:
function filterItems (e) {
    // G.1) Convert text to lower case:
    var text = e.target.value.toLowerCase();
    // console.log(text);
    // G.2) Get all li in item list:
    var items = itemList.getElementsByTagName('li');
    // console.log(items);
    // G.3) Turn collection into array:
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        // console.log(itemName);
        // G.4) Compare filter-text-field to itemName-list:
        if (itemName.toLowerCase().indexOf(text) != -1) {
            // G.5) Display item:
            item.style.display = 'block';
        } else {
            // G.6) Don't display item:
            item.style.display = 'none';
        }
    });
}
