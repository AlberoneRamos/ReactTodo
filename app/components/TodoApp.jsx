import Inferno from 'inferno';
import Component from 'inferno-component';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import TodoSearch from './TodoSearch';

export default class TodoApp extends Component{
     
    render(){
        return(
            <div>
                <TodoSearch/>
                <TodoList/>
                <TodoAddForm/>
            </div>
        );
    }
}