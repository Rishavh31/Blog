import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForms from '../components/BlogPostForms';

const CreateScreen=({navigation})=>{
    
    const {addBlogPosts}=useContext(Context);
    return <BlogPostForms onSubmit={(title, content)=>addBlogPosts(title, content, ()=>navigation.navigate('Index'))}/>
   
};

const styles=StyleSheet.create({
   
});

export default CreateScreen;