//UI Vars

const form = document.querySelector('form');

const input = document.querySelector('#txtTaskName');

const btnDeleteAll = document.querySelector('#btnDeleteAll');

const taskList = document.querySelector('#task-list');

let items;



//load items
loadItems();

//call event listenerbütün eventleri bununla çağırıyoruz
eventListeners();

//LOAD İTEMS

function loadItems() {

    items = getItemsFromLS();

    items.forEach(function (item) { //her itemsın içindeki eleman item a kopyalansın
        createItem(item);
    });
}

//Get items from local storage

function getItemsFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));

    }
    return items;

}
//Set Item to Local Storage

function setItemToLS(text) {
    items = getItemsFromLS(); //kayıt edilmiş listeyi ilk başta al
    items.push(text); //listenin üstüne eleman ekle
    localStorage.setItem('items', JSON.stringify(items)); //stringfy [] şekilde eklememize yardımcı olur

}

//Delete Item from Local Storage

function deleteITemFromLS(text) {
    items = getItemsFromLS();
    items.forEach(function (item, index) {
        if (item === text) {
            items.splice(index, 1); //İndexi bulduktan sonra 1 eleman silmek istediğimiz için 1
        }
    });

    localStorage.setItem('items', JSON.stringify(items));

}







function createItem(text) {
    //create li
    const li = document.createElement('li');

    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    //create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    //append a to li

    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);

}





function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);

    //delete an item
    taskList.addEventListener('click', deleteItem);

    //delete All
    btnDeleteAll.addEventListener('click', deleteAllItems);
}


//add new item
function addNewItem(e) {


    if (input.value === '') {
        alert('add new Item');
    }

    createItem(input.value);

    //save to LS

    setItemToLS(input.value);



    // //create li
    // const li = document.createElement('li');

    // li.className = 'list-group-item list-group-item-secondary';
    // li.appendChild(document.createTextNode(input.value));

    // //create a
    // const a = document.createElement('a');
    // a.classList = 'delete-item float-right';
    // a.setAttribute('href', '#');
    // a.innerHTML = '<i class="fas fa-times"></i>';

    // //append a to li

    // li.appendChild(a);

    // //add li to ul
    // taskList.appendChild(li);


    //clean input

    input.value = '';

    console.log(li);
    // console.log(input.value);
    //console.log('submitt');
    //formun varsayılan olarak submit olmasını kapatalım

    e.preventDefault();
}

// delete an item

function deleteItem(e) {

    if (e.target.className === 'fas fa-times') {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();



            //deletefromLS

            deleteITemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }

    e.preventDefault();
}


//delete all items

function deleteAllItems(e) {



    // *****ilk alternatif*****

    // taskList.innerHTML='';


    //****ikinci alternatiff */

    if (confirm('Are you sure?')) {
        // taskList.childNodes.forEach(function (item) {

        //     if (item.nodeType == 1) {
        //         item.remove();
        //     }

        // });

        //tasklistete ilk çocuk kalmayana kadar dön
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }


        localStorage.clear() //Tüm elemanlar gider

    }







    //a href olduğu için butonlarda gerek yok
    e.preventDefault();
}