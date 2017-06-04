import Inferno from 'inferno';
import Component from 'inferno-component';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import TodoSearch from './TodoSearch';
import redux from 'inferno-redux';
import * as actions from './../actions/actions';

export class TodoApp extends Component{
    constructor(){
        super();
        this.onLogout = this.onLogout.bind(this);
    } 
    
    onLogout(e){
        var {dispatch} = this.props;
        e.preventDefault();
        dispatch(actions.startLogout());
    }

    render(){
        return(
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout}>Logout</a>
                </div>
                <TodoSearch/>
                <TodoList/>
                <TodoAddForm/>
            </div>
        );
    }
}

export default redux.connect()(TodoApp);