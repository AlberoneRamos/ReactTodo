import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'inferno-redux';
import * as actions from './../actions/actions';

export class TodoAddForm extends Component{
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
        var {dispatch} = this.props;
        if(this.state.todo.length>0){
            dispatch(actions.addTodo(this.state.todo));
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

export default connect()(TodoAddForm);