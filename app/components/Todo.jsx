import Inferno from 'inferno';
import {connect} from 'inferno-redux';
import * as actions from './../actions/actions';
import Component from 'inferno-component';
import moment from 'moment';

export class Todo extends Component{

    render(){
        moment.locale('pt-br');
        var {id,text,completed, createdAt, completedAt, dispatch} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = ()=>{
            var message = 'Criado em ';
            var timestamp = createdAt;
                if(completed){
                    message = 'Completa em ';
                    timestamp = completedAt
                }
            return message + moment(timestamp).format('DD/MM/YYYY @ HH:mm:ss')
        }

        return(
            <div className={todoClassName}>
               <div>
                <input type="checkbox" checked={completed} onClick={()=>{dispatch(actions.toggleTodo(id))}}/>
               </div>
               <div>
                <p>{text}</p>
                <p className = "todo__subtext">{renderDate()}</p>
             </div> 

            </div>
        );
    }

}

export default connect()(Todo);