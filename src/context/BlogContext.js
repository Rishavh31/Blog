import createDataContext from './createDataContext';
import jsonserver from '../api/jsonserver';
const blogReducer=(state, action)=>{  
switch(action.type){

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
    dispatch({type:'get_blogposts', payload:response.data});
}
}
const addBlogPosts=(dispatch)=>{
    return async (title, content, callback)=>{
       await jsonserver.post('/blogposts', {title, content});
        
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

