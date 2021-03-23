import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import React from 'react';
import {Provider} from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator=createStackNavigator({
  Index:IndexScreen,
  Show:ShowScreen,
  Create:CreateScreen,
  Edit:EditScreen

},
{
   initialRouteName:'Index',
  defaultNavigationOptions:{
    title: 'Blogs'
  }
});
// now for this project rather than exporting createAppContainer(navigator) directly, we will wrap it in our own custom component and return that. 
const App=createAppContainer(navigator);

export default()=>{
  return <Provider>
         <App/>
         </Provider>
};
// since we are using JSX inside App.js, we have to import React in this file.