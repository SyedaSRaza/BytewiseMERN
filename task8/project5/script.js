const form = document.querySelector("#new-grocery-form");
const input = document.querySelector("#new-grocery-input");
const list1 = document.querySelector("#groceries");

form.addEventListener('submit', (e) => {
    e.preventDefault();

const grocery = input.value;
//Create new div
const grocery_item = document.createElement('div');
grocery_item.classList.add('grocery');
//Add item in div
const grocery_item_list = document.createElement('div');
grocery_item_list.classList.add('content');

//Append item in list
grocery_item.appendChild(grocery_item_list);

//Add text
const grocery_input_list = document.createElement('input');
		grocery_input_list.classList.add('text');
		grocery_input_list.type = 'text';
		grocery_input_list.value = grocery;
		grocery_input_list.setAttribute('readonly', 'readonly');

grocery_item_list.appendChild(grocery_input_list);

const grocery_actions_list = document.createElement('div');
grocery_actions_list.classList.add('actions');

const grocery_edit = document.createElement('button');
grocery_edit.classList.add('edit');
grocery_edit.innerText = 'Edit';

const grocery_delete = document.createElement('button');
grocery_delete.classList.add('delete');
grocery_delete.innerText = 'Delete';

grocery_actions_list.appendChild(grocery_edit);
grocery_actions_list.appendChild(grocery_delete);

grocery_item.appendChild(grocery_actions_list);

list1.appendChild(grocery_item);

input.value = '';

grocery_edit.addEventListener('click', (e) => {
    if (grocery_edit.innerText.toLowerCase() == "edit") {
        grocery_edit.innerText = "Save";
        grocery_input_list.removeAttribute("readonly");
        grocery_input_list.focus();
    } else {
        grocery_edit.innerText = "Edit";
        grocery_edit.setAttribute("readonly", "readonly");
    }
});

grocery_delete.addEventListener('click', (e) => {
    list1.removeChild(grocery_item);
});
});