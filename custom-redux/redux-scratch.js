let store = [
    {
        id : 1,
        text : 'Task 1',   
    },
    {
        id : 2,
        text : 'Task 2',   
    }
];
function actionAddToDo(todo)
{
    return {
        type : 'AddToDo',
        payload : todo,
    }
}
function actionRemoveTodo(todo)
{
    return {
        type : 'RemoveToDo',
        payload : todo,
    }
}
function reducer(action)
{
    switch(action.type)
    {
        case 'AddToDo':
            return [...store,action.payload];
        case 'RemoveToDo':
            return store.filter(todo=> todo.id != action.payload.id);
    }
}
function dispatch(action)
{
    store = reducer(action);
}
dispatch(actionAddToDo({
    id: 3,
    text:'Task 3'
}));
dispatch(actionRemoveTodo({
    id: 1,
    text:'Task 1'
}));
console.log('NextState ',store);