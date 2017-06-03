import * as reducers from './../reducers/reducers';
import thunk from 'redux-thunk';
import {createStore,combineReducers,compose,applyMiddleware} from 'redux';

export default function configure(){
    var reducer = combineReducers({
        searchText: reducers.searchTextReducer,
        showCompleted: reducers.showCompletedReducer,
        todos: reducers.todosReducer
    });

    return createStore(reducer,compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
}