"use strict";
const DOMcontainer = document.querySelector('.container');
let DOMitems = DOMcontainer.querySelectorAll('.item');
const DOMform = document.querySelector('.form');
const DOMformActions = DOMform.querySelector('.actions');
const DOMtaskTextarea = DOMform.querySelector('textarea[name="task"]');
const DOMdeadlineInput = DOMform.querySelector('input[name="deadline"]');
const DOMformAdd = DOMformActions.querySelector('.btn.add')

function renderList( list ) {

    for ( let i=0; i<list.length;i++) {
        renderTodoItem( list[i] );
    }
    
}

function renderTodoItem ( data ) {
        const HTML = `
        <div class="item">
            <div class="status ${data.status}">${data.status}</div>
            <p class="description">${data.description}</p>
            <div class="deadline">${data.deadline}</div>
            <div class="actions">
                    <div class="action remove" id=${data.id}>Remove </div>
            </div>
        </div>`; 

DOMcontainer.insertAdjacentHTML('beforeend', HTML);
DOMitems = DOMcontainer.querySelectorAll('.item');
return;
}

/*
*  Generate code
*
*/

renderList(todo_list);

/*
*  Remove All Tasks Function
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
*  Remove One Tasks Function
*
*/
const tasksForRemove = document.querySelectorAll('.actions .action');
   for (let i = 0; i < tasksForRemove.length; i++) {
       tasksForRemove[i].addEventListener('click',removeOneTask);
       
   }
   
function removeOneTask( event ){
    const itemForRemove = event.target.closest('.item');
    itemForRemove.remove();
    
}
/*
* Clear Form Function
*
*/
const DOMformClear = DOMformActions.querySelector('.btn.clear');
DOMdeadlineInput.value = formatedDate( 86400000 );
DOMformClear.addEventListener('click',clearForm);

function clearForm(){
    DOMtaskTextarea.value = "";
    DOMdeadlineInput.value = "";
    console.log('clear form')

}
/*
* Add One Tasks Function
*
*/

const tasksForAdd = document.querySelectorAll('.btn.add');
    tasksForAdd[0].addEventListener('click',addOneTask);
       
   
   
function addOneTask( event ){
    const itemForAdd = event.target.closest('.actions');
    console.log(itemForAdd);
    
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