import Inferno from 'inferno';
import {connect} from 'inferno-redux';
import Component from 'inferno-component';
import Todo from './Todo';

export class TodoList extends Component{

    render(){
        var {todos} = this.props;
        
        var renderTodos = () =>{
            if(todos.length == 0){
                return <div className='empty-list'><p>Você não adicionou tarefas!</p></div>;
            }
            return todos.map((todo)=>{
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
        return {
            todos: state.todos
        };
    }
)(TodoList);