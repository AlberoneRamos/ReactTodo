import $ from 'jquery';

export default class TodoAPI{
    static setTodos(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos',JSON.stringify(todos));
            return true;
        }
    }

    static getTodos(){
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try{
            todos = JSON.parse(stringTodos);
        } catch(e){}
        return $.isArray(todos) ? todos : [];
    }

    static filterTodos(todos, showCompleted, searchText){
        var filteredTodos;
        //filter showCompleted
         filteredTodos = todos.filter((todo)=>{
            return !todo.completed || showCompleted;
        });
        
        filteredTodos = filteredTodos.filter((todo)=>{
            return todo.text.toLowerCase().includes(searchText);
        });
        //filter by text
        //Sort by non-completed
        filteredTodos.sort((a,b)=>{
            if(!a.completed && b.completed){
                return -1;
            } else if(a.completed && !b.completed){
                return 1;
            } else{
                return 0;
            }
        });


        return filteredTodos;
    }
}