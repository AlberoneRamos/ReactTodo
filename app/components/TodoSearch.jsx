import Inferno from 'inferno';
import Component from 'inferno-component';
import {connect} from 'inferno-redux';
import  * as actions from './../actions/actions';

export class TodoSearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            showCompleted: false
        }
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleCheckboxToggle = this.handleCheckboxToggle.bind(this);
    }

    handleSearchTextChange(e){
        var {dispatch} = this.props;
        this.setState({
            searchText: e.target.value
        });
        dispatch(actions.setSearchText(e.target.value));
        
    }

    handleCheckboxToggle(e){
        var {dispatch} = this.props;
        this.setState({
            showCompleted: e.target.checked
        });
        dispatch(actions.toggleShowCompleted());
    }
    

    render(){
        var {dispatch, showCompleted, searchText} = this.props;
        return(
            <div className="todo-search  large-12 columns">
                <div>
                    <input type="search" placeholder="Procurar atividade" value={searchText} name="searchText" onInput={this.handleSearchTextChange} value={this.state.searchText}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="showCompleted" checked={showCompleted}  onChange={this.handleCheckboxToggle}/>
                        Mostrar atividades completas
                    </label>
                </div>
            </div>
        );
    }


}

export default connect(
    (state)=>{
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    }
)(TodoSearch);