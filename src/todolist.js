const listsContainer = document.querySelector('[data-lists]');

let lists = ['Study', 'Washing'];

function render(){
    clearElement(listsContainer);
    lists.forEach(list =>{
        const listElement = document.createElement('li');
        listElement.classList.add("list-name");
        listElement.innerHTML = list;
        listsContainer.appendChild(listElement);
    })
}

function clearElement(element){

}

export default render;
