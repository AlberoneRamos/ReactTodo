import Inferno from 'inferno';
import 'style-loader!foundation-sites/dist/css/foundation.min.css';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';
import TodoApp from './components/TodoApp.jsx';
import 'inferno-devtools';
import {Provider} from 'inferno-redux';
$(document).foundation();

import * as actions from  './actions/actions';
import configure from './store/configureStore';

var store = configure();
console.log(store.getState());
store.subscribe(() =>{
    console.log(store.getState());
});

Inferno.render(
            <Provider store={store}>
                <TodoApp/>    
            </Provider> ,
    document.getElementById('app')
);