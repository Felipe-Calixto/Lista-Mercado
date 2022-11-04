let addInput = document.querySelector("#add-input");
let addButton = document.querySelector("#add-bnt");
let listConteiner = document.querySelector("#list-conteiner");
let editForm = document.querySelector("#edit-form");
let addForm = document.querySelector("#add-form");
let search = document.querySelector("#search-conteiner");
let filter = document.querySelector("#filter-conteiner");
let cancelButton = document.querySelector("#btn-cancel-edit");
let editInput = document.querySelector("#edit-input");
let addButtonEdit = document.querySelector("#btn-add-edit");
let oldTitle;


//functions//

function createList(text) {
    let list = document.createElement("div");
    list.classList.add("list-box");
    
    let itemBox = document.createElement("div");
    itemBox.classList.add("item-box");
    list.appendChild(itemBox);

    let listText = document.createElement("p");
    listText.classList.add("list-text");
    listText.innerText = text;
    itemBox.appendChild(listText);

    let bntList = document.createElement("div");
    bntList.classList.add("bnt-list");
    list.appendChild(bntList);

    let btnCheck = document.createElement("button");
    btnCheck.classList.add("btn-check");
    btnCheck.innerHTML = '<i class="fa-solid fa-check"></i>';
    bntList.appendChild(btnCheck);

    let btnEdit = document.createElement("button");
    btnEdit.classList.add("btn-edit");
    btnEdit.innerHTML = '<i class="fa-solid fa-edit"></i>';
    bntList.appendChild(btnEdit);

    let btnClear = document.createElement("button");
    btnClear.classList.add("btn-clear");
    btnClear.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    bntList.appendChild(btnClear);

    listConteiner.appendChild(list);

}

function toggleEdit() {
    editForm.classList.toggle("hide");
    addForm.classList.toggle("hide");
    search.classList.toggle("hide");
    filter.classList.toggle("hide");
}

function editText(text) {
    let listAll = document.querySelectorAll(".list-box");
    console.log(listAll)

    listAll.forEach((x)=> {
        let title = x.querySelector("p");
        console.log(title)
        console.log(oldTitle)
        if(title.innerHTML === oldTitle) {
            title.innerHTML = text;
        }
    });
}

//events//

addButton.addEventListener("click", (event)=> {
    event.preventDefault();

    if(addInput.value) {
        createList(addInput.value);
        addInput.value = "";
        addInput.focus();
    }
});

document.addEventListener("click", (event)=> {
    let target = event.target;
    let father = target.closest(".list-box");
    let title;

    if(father && father.querySelector("p")) {
        title = father.querySelector("p").innerHTML;
    }
    
    if(target.classList.contains("btn-check")) {
        if(father.classList.contains("done")) {
            father.classList.remove("done");
        } else {
            father.classList.add("done");
        }
    }

    if(target.classList.contains("btn-clear")) {
        father.remove();
    }

    if(target.classList.contains("btn-edit")) {
        toggleEdit()

        oldTitle = title;
        editInput.value = title;
        editInput.focus();
    }

});

cancelButton.addEventListener("click", (event)=> {
    event.preventDefault();
    
    editForm.classList.toggle("hide");
    addForm.classList.toggle("hide");
    search.classList.toggle("hide");
    filter.classList.toggle("hide");
});

addButtonEdit.addEventListener("click", (event)=> {
    event.preventDefault();

    if(editInput.value) {
        editText(editInput.value);
    } 

    toggleEdit();
});



