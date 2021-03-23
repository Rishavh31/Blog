// So basically agar mujhe app me bhot saari different resources use krni hai then I will create several context files like BlogContext and will then in each file, create a reducer function, some action function that will call dispatch, and some initialization. So us tareeke se to bhot saara duplicated code ho jayega saari context files me. Isliye best tareeka yhi rhega ki baar baar use hone wala ho code format hai, use mai is createDataContext file me save krlun and whenever I need to use any resource in my app, I will just create a context file for it, make a reducer function, make a function that will call dispatch, and declare initial state(as in BlogContext, initial state was an empty array). And I will pass these three things at last of that context file by writing a code as:
// export const {Context, Provider}=createDataContext(
//  name of reducer function,
// {name of action function}
//  inital state
// );

import React, {useReducer} from 'react';

export default(reducer, actions, initialState)=>{
    // actions ==={addBlogPosts: (dispatch)=>{return ()={}}}
   


const Context=React.createContext();
const Provider=({children})=>{
const [state, dispatch]=useReducer(reducer, initialState);
const boundActions={};
for(let key in actions)
{ boundActions[key]=actions[key](dispatch);
}

return <Context.Provider value={{state, ...boundActions}}> 
 {/* state here is our array of blog posts and bound actions is nothing but out addBlogPosts function */}
    {children}
</Context.Provider>
}
return {Context, Provider};

};
