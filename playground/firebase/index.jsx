
firebaseRef.set({
    app:{
        name: 'Todo App',
        version: '0.0.1'
    },
    isRunning: true,
    user: {
        name: 'Henrique',
        age: 17
    }
});


var todoRef = firebaseRef.child('todos');

var newTodoRef = todoRef.push({
    text: 'Vai fdp'
});

var newTodoRef = todoRef.push({
    text: 'No stops on the rape train'
});

firebaseRef.child('todos').on('child_added',(snapshot)=>{
    console.log('child_added ',snapshot.key,snapshot.val());
});