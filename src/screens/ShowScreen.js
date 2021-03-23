import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';

const ShowScreen=({navigation})=>{
    const id=navigation.getParam('id');
    const {state}=useContext(Context);
     // is screen me mujhe sirf state chahiye thi isliye sirf use hi destructure kiya hai
    const blogPost=state.find((blogpost)=>blogpost.id===id);
    return (
        <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>

        </View>
    );
};
ShowScreen.navigationOptions=({navigation})=>{
return {
headerRight:()=>(
<TouchableOpacity onPress={()=>navigation.navigate('Edit', {id:navigation.getParam('id')})}>
<MaterialIcons name="edit" size={35} color="black" />
</TouchableOpacity>
)
};
};

const styles=StyleSheet.create({

});

export default ShowScreen;