const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = [{
    id:1,
    name:'Study'
    },
    {
    id:2,
    name:'Make tutorials'
    }
];

newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListInput.value;
    if(listName == null || listName === '') return;
    const list = createList(listName);
})

function render(){
    clearElement(listsContainer);
    lists.forEach(list =>{
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.classList.add("list-name");
        listElement.innerHTML = list.name;
        listsContainer.appendChild(listElement);
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

export default render;
