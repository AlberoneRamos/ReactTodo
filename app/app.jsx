import Inferno from 'inferno';
import 'style-loader!foundation-sites/dist/css/foundation.min.css';
import 'style-loader!css-loader!sass-loader!./styles/app.scss';
import 'inferno-devtools';
import createHashHistory from 'history/createHashHistory';
import {Provider} from 'inferno-redux';
import * as actions from  './actions/actions';
import firebase from './firebase/';
import configure from './store/configureStore';
import router from './router/';
$(document).foundation();

var history = createHashHistory();
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(actions.logIn(user.uid));
        store.dispatch(actions.startAddTodos());
        history.push('/todos');
    } else{
        store.dispatch(actions.logOut());
        history.push('/');
    }
});
var store = configure();




Inferno.render(
            <Provider store={store}>
                {router}
            </Provider> ,
    document.getElementById('app')
);