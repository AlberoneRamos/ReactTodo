import Inferno from 'Inferno';
import Component from 'inferno-component';

export default class Todo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var {id,text,completed,onToggle} = this.props;
        return(
            <div onClick={()=>{onToggle(id)}}>
                <input onChange={()=>{onToggle(id)}} type="checkbox" checked={completed}/>
                {text}
            </div>
        );
    }

}