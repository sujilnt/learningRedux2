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
    console.log("SUBSCRIPTION !!!",store.calculator.result);
};

const itialError = {message: ""};
// errorMessageReducer  ====> a second reducer
let errorMessageReducer= (state=itialError,action)=>{
  if(action.type=== "SET_ERROR_MESSAGE"){
      return {message: action.message};
  }
  if(action.type === "CLEAR_ERROR_MESSAGE") {
      return {message: " "};
  }
  return state;
};

const unsubscribe = store.subscribe(combineReducers({
    calculator:calculateReducer, // reducer 1
    error: errorMessageReducer   // reducer 2
}));

store.subscribe(subscriber);

// what is subscriber ?
console.log(store.getState());
