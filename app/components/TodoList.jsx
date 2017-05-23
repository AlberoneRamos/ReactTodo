import Inferno from 'Inferno';
import Component from 'inferno-component';
import Todo from './Todo';

export default class TodoList extends Component{

    render(){
        var {todos} = this.props;
        var renderTodos = () =>{
            return todos.map((todo)=>{
                return (
                    <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                );
            });
        };
        return(
            <div className='todo-list'>
                    {renderTodos()}
            </div>
        );
    }

}