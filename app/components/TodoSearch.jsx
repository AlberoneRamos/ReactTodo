import Inferno from 'inferno';
import Component from 'inferno-component'

export default class TodoSearch extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            showCompleted: false
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleCheckboxToggle = this.handleCheckboxToggle.bind(this);
    }

    handleSearchTextChange(e){
        this.setState({
            searchText: e.target.value
        });
        this.handleSearch();
    }

    handleCheckboxToggle(e){
        this.setState({
            showCompleted: e.target.checked
        });
        this.handleSearch();
    }
    
    handleSearch(){
        this.props.onSearch(this.state);
    }

    render(){
        return(
            <div className="todo-search  large-12 columns">
                <div>
                    <input type="search" placeholder="Procurar atividade" name="searchText" onInput={this.handleSearchTextChange} value={this.state.searchText}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="showCompleted"  onChange={this.handleCheckboxToggle} value={this.state.showCompleted}/>
                        Mostrar atividades completas
                    </label>
                </div>
            </div>
        );
    }


}