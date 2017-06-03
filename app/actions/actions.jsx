import firebase, {firebaseRef} from '../firebase/';
import moment from 'moment';

export function setSearchText(searchText){
    return {
        searchText,
        type:'SET_SEARCH_TEXT'
    }
}

export function addTodo(todo){
    return {
        todo,
        type: 'ADD_TODO'
    }
}

export function addTodos(todos){
    return {
        type: 'ADD_TODOS',
        todos
    };
}

export function startAddTodo(text){
    return (dispatch,getState) => {
        var todo = {
            text,
            createdAt:moment().format('DD/MM/YYYY HH:mm:ss'),
            completed: false,
            completedAt: null
        }

        var todoRef = firebaseRef.child('todos').push(todo);

        return todoRef.then(()=>{
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    }
}

export function startToggleTodo(id, completed){
    return (dispatch, getState)=>{
        var todoRef = firebaseRef.child(`todos/${id}`);
        var updates = {
            completed,
            completedAt: completed ? moment().format('DD/MM/YYYY HH:mm:ss') : null
        }
        return todoRef.update(updates).then(()=>{
            dispatch(updateTodo(id, updates));
        });
    }
}

export function toggleShowCompleted(){
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    }
}

export function updateTodo(id, updates){
    return{
        type: 'UPDATE_TODO',
        id,
        updates
    }
}