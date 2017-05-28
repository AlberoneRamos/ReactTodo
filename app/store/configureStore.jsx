import * as reducers from './../reducers/reducers';
import {createStore,combineReducers,compose} from 'redux';

export default function configure(){
    var reducer = combineReducers({
        searchtext: reducers.searchTextReducer,
        showCompleted: reducers.showCompletedReducer,
        todos: reducers.todosReducer
    });

    return createStore(reducer,compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}