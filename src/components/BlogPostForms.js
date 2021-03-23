import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

const BlogPostForms=({onSubmit, initialValues})=>{
    const [title, setTitle]=useState(initialValues.title);
    const [content, setContent]=useState(initialValues.content);
    return (
        <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text)=>setTitle(text)}/>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(cont)=>setContent(cont)}/>   
        <View style={{marginTop:20, marginHorizontal:5}}>
        <Button title="SAVE" onPress={()=>onSubmit(title, content)}/> 
        </View>

        </View>
    );
};

BlogPostForms.defaultProps={
initialValues:{
    title:'',
    content:''
}
};

const styles=StyleSheet.create({
    label:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
        marginBottom:5
    },
    input:{
        fontSize:18,
        borderColor:'black',
        borderWidth:1,
        margin:5,
        paddingLeft:2
        
    }

});

export default BlogPostForms;
