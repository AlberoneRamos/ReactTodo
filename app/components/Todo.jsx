import Inferno from 'Inferno';
import Component from 'inferno-component';
import moment from 'moment';

export default class Todo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        moment.locale('pt-br');
        var {id,text,completed,onToggle, createdAt, completedAt} = this.props;
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
            <div className="todo" onClick={()=>{onToggle(id)}}>
                <input onChange={()=>{onToggle(id)}} type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>

            </div>
        );
    }

}