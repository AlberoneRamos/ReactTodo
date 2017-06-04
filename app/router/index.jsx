import Inferno from 'inferno';
import {Router, Route, IndexRoute} from 'inferno-router';
import createHashHistory from 'history/createHashHistory';
import TodoApp from './../components/TodoApp';
import Login from './../components/Login';
import firebase from './../firebase/';

function isLoggedIn({props, router}){
    if(!firebase.auth().currentUser){
        router.push('/');
    }else{
        router.push('/todos');
    }
}

var history = createHashHistory();

export default(
    <Router history={history}>
        <Route path="/">
            <IndexRoute component={Login}  onEnter={isLoggedIn}/>
            <Route path="todos" component={TodoApp} onEnter={isLoggedIn}/>
        </Route>
    </Router>
);