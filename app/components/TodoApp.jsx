import Inferno from 'inferno';
import Component from 'inferno-component';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';
import TodoSearch from './TodoSearch';
import uuid from 'node-uuid';
import moment from 'moment';
import TodoAPI from '../api/TodoAPI';

export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: TodoAPI.getTodos(),
            searchText:'',
            showCompleted:false,
            createdAt: undefined,
            completedAt: undefined
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    componentDidUpdate(){
        TodoAPI.setTodos(this.state.todos);
    }

    handleAddTodo(text){
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id:uuid(),
                    text:text,
                    createdAt:moment(),
                    completed: false
                }
            ]
        });
    }

    handleSearch(searchCriteria){
        this.setState({...searchCriteria});
    }

    render(){
        var {todos,showCompleted,searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList/>
                <TodoAddForm onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
}