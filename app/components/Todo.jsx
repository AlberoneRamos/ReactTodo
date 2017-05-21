import Inferno from 'Inferno';
import Component from 'inferno-component';

export default class Todo extends Component{

    render(){
        var {id,text} = this.props;
        return(
            <div>
                {id}. {text}
            </div>
        );
    }

}