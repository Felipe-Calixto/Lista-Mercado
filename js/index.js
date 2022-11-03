let addInput = document.querySelector("#add-input");
let addButton = document.querySelector("#add-bnt");
let listConteiner = document.querySelector("#list-conteiner");

addButton.addEventListener("click", (event)=> {
    event.preventDefault();

    if(addInput.value) {
        createList(addInput.value);
        addInput.innerHTML = "";
    }
});

function createList(text) {
    let list = document.createElement("div");
    list.classList.add("list-box");
    
    let itemBox = document.createElement("div");
    itemBox.classList.add("item-box");
    list.appendChild(itemBox);

    let listText = document.createElement("p");
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