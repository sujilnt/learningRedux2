const {createStore,combineReducers,compose,bindActionCreators,applyMiddleware}=require("redux");

// learn to make reducer
const intialstate= {result:0 };
const addAction={
    type:"ADD",
    value: 4
};
const calculateReducer = (state=intialstate,action)=>{
    if(action.type=== "ADD"){
      return{
          ...state,
          result: state.result+action.value
      }
    }
    console.log("reuslt", action, state);
 return state;
};


module.exports.calculateReducer = calculateReducer ;
