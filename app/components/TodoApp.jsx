import Inferno from 'inferno';
import Component from 'inferno-component';
import TodoList from './TodoList';

export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {
                    id: '1',
                    text: 'Passear com o cachorro'
                },
                {
                    id: '2',
                    text: 'Limpar o quarto'
                },
                {
                    id: '3',
                    text: 'Estudar'
                },
                {
                    id: '4',
                    text: 'Ir à academia'
                }
            ]
        }
    }
    render(){
        var {todos} = this.state;
        return(
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
}