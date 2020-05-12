"use strict";
/* 
TODO darba aprasancio objekto savybes:
- description;
- deadline
- ceated_on
- status: todo, in-progress, done
*/


/*
* Sugeneruoti TODO list items
*
*/

function renderList( list ) {
    const listPlace = document.querySelector('.container');
    let HTML = '';
    for ( let i= 0; i<list.length; i++ ){
        const todoItem = list[i];
        HTML += `
        <div class="item">
            <div class="status ${todoItem.status}">${todoItem.status}</div>
            <p class="description">${todoItem.description}</p>
            <div class="deadline">2020-05-08 12:55</div>
            <div class="actions">
                    <div class="action remove">Remove</div>
            </div>
        </div>`; 
}
return listPlace.innerHTML += HTML;
}

renderList(todo_list);

/*
* Remove one list items
*
*/

const  removeActions = document.querySelectorAll('.item .action.remove');

for ( let i=0; i<removeActions.length;i++){
    const removeElement = removeActions[i];
    removeElement.addEventListener('click',actionRemoveTodoItem)
}

function actionRemoveTodoItem ( event ){
    const  parentItem = event.target.closest('.item');
    parentItem.remove();
}
/*
* Remove All list items
*
*/
const  removeAll = document.querySelectorAll('.container .global-actions');
for ( let i=0; i<removeAll.length;i++){
    const removeAllElements = removeAll[i];
    removeAllElements.addEventListener('click', removeAllItems)
}

function removeAllItems( event ){
    const  removeItems = event.target.closest('.container')
    .querySelectorAll('.item');
    for ( let i=0; i<removeItems.length;i++){
        removeItems[i].remove();
    }
}  

/*
* Form actions
*
*/

const DOMform = document.querySelector('.form');
const DOMformActions = DOMform.querySelector('.actions');
const DOMtaskTextarea = DOMform.querySelector('textarea[name="task"]');
const DOMdeadlineInput = DOMform.querySelector('input[name="deadline"]');
const DOMformAdd = DOMformActions.querySelector('.btn.add')
const DOMformClear = DOMformActions.querySelector('.btn.clear');

DOMformClear.addEventListener('click',clearForm);

function clearForm(){
    DOMtaskTextarea.value = "";
    DOMdeadlineInput.value = "";

}
console.log(todo_list);
DOMformAdd.addEventListener('click', addNewTodoItem);

function addNewTodoItem(){
    let newTodo = {
        description: DOMtaskTextarea.value.trim(),
        deadline: DOMdeadlineInput.value.trim(),
        created_on: new Date() ,
        status: 'todo'
    };
    console.log(newTodo);
    renderList(newTodo);
    return newTodo;
}
