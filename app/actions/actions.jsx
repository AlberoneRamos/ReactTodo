import firebase, {firebaseRef,facebookProvider} from '../firebase/';
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
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

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
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
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

export function startAddTodos(){
    return (dispatch, getState)=>{
        var uid = getState().auth.uid;
        return firebaseRef.child(`users/${uid}/todos`).once('value').then((snapshot)=>{
            var todos = snapshot.val();
            var todosArray = todos == null  ? [] : Object.keys(todos).map((id)=>{
                return {
                    id,
                    ...todos[id]
                }
            });
            dispatch(addTodos(todosArray));
        });
    }
}

export function updateTodo(id, updates){
    return{
        type: 'UPDATE_TODO',
        id,
        updates
    }
}

export function startLogin(){
    return (dispatch, getState)=>{
        return firebase.auth().signInWithPopup(facebookProvider).then((result)=>{
            console.log('Autenticado com sucesso', result);
        },(error)=>{
            console.log('Erro ao autenticar',error);
        });
    }
}

export function logIn(uid){
    return {
        type: 'LOGIN',
        uid
    }
};

export function logOut(){
    return {
        type: 'LOGOUT'
    }
}



export function startLogout(){
    return (dispatch, getState)=>{
        return firebase.auth().signOut().then(()=>{
            console.log('Logout');
        })
    }
}