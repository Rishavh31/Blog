import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForms from '../components/BlogPostForms';
// pop() of navigation prop will immediately take you to the previous screen

const EditScreen=({navigation})=>{
    
    const {state, editBlogPosts}=useContext(Context);
    const blogpost=state.find((blog)=>blog.id===navigation.getParam('id'));   

    return <BlogPostForms initialValues={{title:blogpost.title, content:blogpost.content}} onSubmit={(title, content)=>{
        editBlogPosts(blogpost.id, title, content, ()=>navigation.pop());
    }}/>
};

const styles=StyleSheet.create({
    
});

export default EditScreen;