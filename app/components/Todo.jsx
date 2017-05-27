import Inferno from 'inferno';
import Component from 'inferno-component';
import moment from 'moment';

export default class Todo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        moment.locale('pt-br');
        var {id,text,completed,onToggle, createdAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo-completed' : '';
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
            <div className={"todo "+todoClassName} onClick={()=>{onToggle(id)}}>
               <div>
                <input onChange={()=>{onToggle(id)}} type="checkbox" checked={completed}/>
               </div>
               <div>
                <p>{text}</p>
                <p className = "todo__subtext">{renderDate()}</p>
             </div> 

            </div>
        );
    }

}