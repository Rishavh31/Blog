import createDataContext from './createDataContext';
// filter() of javascript returns an array of elements that satisfies the condition given inside it.
import jsonserver from '../api/jsonserver';
const blogReducer=(state, action)=>{  // yahan pe ye state is nothing but our blogPosts array
switch(action.type){
//   case 'add_blogpost':
//       return [...state, 
//         {
//             id:Math.floor(Math.random()*99999999),
//             title:action.payload.title,
//             content:action.payload.content
//         }];

  case 'delete_blogpost':
  return state.filter((blogpost)=>blogpost.id!==action.payload);

  case 'edit_blogpost':
      return state.map((blogpost)=>{
     return blogpost.id===action.payload.id? action.payload:blogpost;
      });
  case 'get_blogposts':
      return action.payload;
  
  default:
      return state;
}
};

const getBlogPosts=(dispatch)=>{
return async ()=>{
    const response= await jsonserver.get('/blogposts');
    // so response.data will be our array of blogposts
    dispatch({type:'get_blogposts', payload:response.data});
}
}
const addBlogPosts=(dispatch)=>{
    return async (title, content, callback)=>{
       await jsonserver.post('/blogposts', {title, content});
        // dispatch({type:'add_blogpost', payload:{ title, content}}); 
         // ye line comment isliye kri because I want IndexScreen to fetch the latest array whenever we navigate to IndexScreen. We can also do so by using below dispatch, but we are trying a more bulletproof way to do it in the index screen. See the code in the useEffect hook in the IndexScreen. Ab because is dispatch ki requirement hi nhi hai therefore comment the addBlogPosts code in the reducer function as well.
        if(callback)
        callback();
    }
    };

   const deleteBlogPosts=(dispatch)=>{
        return async (id)=>{
            await jsonserver.delete(`/blogposts/${id}`)
            dispatch({type:'delete_blogpost', payload:id});
        }
        };
   
   const editBlogPosts=(dispatch)=>{
    return async (id, title, content, callback)=>{
        await jsonserver.put(`/blogposts/${id}`, {title, content});
        dispatch({ type:'edit_blogpost', payload:{id, title, content}});
        if(callback)
        callback();
    }
   }     
        
export const {Context, Provider}=createDataContext(
    blogReducer, 
    {addBlogPosts, deleteBlogPosts, editBlogPosts, getBlogPosts},
     []
     );

