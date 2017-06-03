import Inferno from 'inferno';
import {connect} from 'inferno-redux';
import Component from 'inferno-component';
import Todo from './Todo';
import TodoAPI from './../api/TodoAPI';

export class TodoList extends Component{

    render(){
        var {todos, showCompleted, searchText} = this.props;
        
        var renderTodos = () =>{
            var todoItems = TodoAPI.filterTodos(todos,showCompleted,searchText);
            if(todoItems == 0){
                return <div className='empty-list'><p>Você não adicionou tarefas!</p></div>;
            }
            return todoItems.map((todo)=>{
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };
        return(
            <div className='todo-list large-12 columns'>
                    {renderTodos()}
            </div>
        );
    }

}

export default connect(
    (state)=>{
        return state;
    }
)(TodoList);