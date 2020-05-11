"use strict";
/* 
TODO darba aprasancio objekto savybes:
- description;
- deadline
- ceated_on
- status: todo, in-progress, done
*/

// sugeneruoti TODO list items
function renderList( list ) {
    const listPlace = document.querySelector('.container');
    let HTML = '';
    let k = 0;
    for ( let i= 0; i<list.length; i++ ){
        const todoItem = list[i];
        HTML += `
        <div class="item">
            <div class="status ${todoItem.status}">${todoItem.status}</div>
            <p class="description">${todoItem.description}</p>
            <div class="deadline">2020-05-08 12:55</div>
            <div class="btn pirmas" data-number=${k}>Redaguoti</div>
            <div class="btn antras" data-number=${k+1}>Ištrinti</div>
            <div class="btn trecias" data-number=${k+2}>Priskirti</div>
        </div>`; 
        k += 3
}
return listPlace.innerHTML = HTML;
}

renderList(todo_list);

