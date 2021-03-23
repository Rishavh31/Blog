import React, {useContext, useEffect} from 'react';
import {Text,View, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 



const IndexScreen=({navigation})=>{
    const {state, deleteBlogPosts, getBlogPosts}=useContext(Context);
    useEffect(()=>{
      getBlogPosts();
   
      navigation.addListener('didFocus',()=>{    // jab bhi ham IndexScreen pe aayenge then latest array firse fetch hoga.
        getBlogPosts();
    });
    return ()=>{  // jab IndexScreen pe nhi honge then close the listener.
    listener.remove();
}
}, [])


    return (
<>
<FlatList
data={state}
keyExtractor={(post)=>post.title}
renderItem={({item})=>{
    return (
    <TouchableOpacity onPress={()=>navigation.navigate('Show', {id:item.id})}>
    <View style={styles.A}>
    <Text style={styles.title}>{item.title}</Text>
    <TouchableOpacity onPress={()=>deleteBlogPosts(item.id)}>
    <MaterialCommunityIcons name="delete" size={30} color="black" /> 
    </TouchableOpacity>   
    </View>
    </TouchableOpacity>
    );

}}
/>
</>
    );
};

// code to add a "+" in the right of our header
IndexScreen.navigationOptions=({navigation})=>{
return {
headerRight: ()=>(
    <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
     <Feather name="plus" size={30} color="black" style={{marginRight:10}}/>
     </TouchableOpacity>
)
};
};

const styles=StyleSheet.create({
    A:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:1,
        paddingVertical:20,
        borderWidth:1,
        borderColor:'black',
        marginHorizontal:1,
        


    },
    title:{
        fontSize:18

    }
});

export default IndexScreen;