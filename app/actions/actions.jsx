export function setSearchText(searchText){
    return {
        searchText,
        type:'SET_SEARCH_TEXT'
    }
}

export function addTodo(text){
    return {
        text,
        type: 'ADD_TODO'
    }
}

export function toggleShowCompleted(){
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
}

export function toggleTodo(id){
    return{
        type: 'TOGGLE_TODO',
        id
    }
}