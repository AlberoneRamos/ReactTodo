import Inferno from 'inferno';
import Component from 'inferno-component';

export default class TodoAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        };
        this.onAddTodo = this.onAddTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            todo: e.target.value
        });
    }

    onAddTodo(e){
        e.preventDefault();
        if(this.state.todo.length>0){
            this.props.onAddTodo(this.state.todo);
            this.setState({
                todo: ''
            });
        }
    }

    render(){
        var {todo} = this.state;
        return(
            <div className="todo-form large-12 columns">
                <form onSubmit={this.onAddTodo}>
                    <input type="text" value={todo} onChange={this.handleChange}/>
                    <button class="button primary expanded">Adicionar</button>
                </form>
            </div>
        );
    }
}