import Inferno from 'inferno';
import 'style-loader!foundation-sites/dist/css/foundation.min.css';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';
import TodoApp from './components/TodoApp.jsx';
import 'inferno-devtools';
import {Provider} from 'inferno-redux';
import * as actions from  './actions/actions';
import configure from './store/configureStore';
import TodoAPI from './api/TodoAPI';
$(document).foundation();

var store = configure();
console.log(store.getState());
store.subscribe(() =>{
    var state = store.getState();
    console.log(state);
    TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

Inferno.render(
            <Provider store={store}>
                <TodoApp/>    
            </Provider> ,
    document.getElementById('app')
);