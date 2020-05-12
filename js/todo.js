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

DOMdeadlineInput.value = formatedDate( 86400000 );
DOMformClear.addEventListener('click',clearForm);

function clearForm(){
    DOMtaskTextarea.value = "";
    DOMdeadlineInput.value = "";

}

DOMformAdd.addEventListener('click', addNewTodoItem);

function addNewTodoItem(){
    let newTodo = {
        description: DOMtaskTextarea.value.trim(),
        deadline: DOMdeadlineInput.value.trim(),
        created_on: formatedDate() ,
        status: 'todo'
    };
    
    if ( newTodo.description.length === 0 ) {
        return alert('ERROR: tuscias aprasymas');
    }
    
    if ( newTodo.deadline.length > 0 &&
        (new Date(newTodo.deadline)).toString() === 'Invalid Date' ) {
        return alert('ERROR: nevalidus deadline');
    }
    
    todo_list.push( newTodo );
    
    return;
}

function formatedDate( deltaTime = 0 ) {
    let now = new Date();

    if ( deltaTime !== 0 ) {
        now = new Date( Date.now() + deltaTime );
    }

    let minutes = now.getMinutes();
    let hours = now.getHours();
    let days = now.getDate();
    let month = now.getMonth() + 1;
    const year = now.getFullYear();
    
    if ( minutes < 10 ) {
        minutes = '0'+minutes;
    }
    if ( hours < 10 ) {
        hours = '0'+hours;
    }
    if ( days < 10 ) {
        days = '0'+days;
    }
    if ( month < 10 ) {
        month = '0'+month;
    }

    return year+'-'+month+'-'+days+' '+hours+':'+minutes;
}
}
