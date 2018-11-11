const {createStore,combineReducers,compose,bindActionCreators,applyMiddleware}=require("redux");
const {calculateReducer} =require("./reducer");
// creating a store using reducer
/*
* when you create a store , you need to add Reducer to it */
const store= createStore(calculateReducer);
console.log("what is inside store ", store);
const addAction={
    type:"ADD",
    value: 4
};
const subscriber = ()=>{
    console.log("SUBSCRIPTION !!!",store.getState().result);
};
const unsubscribe = store.subscribe(subscriber);
// what is subscriber ?
store.dispatch(addAction); // 4
store.dispatch(addAction); // 8
store.dispatch(addAction); // 12
store.dispatch(addAction); //16
