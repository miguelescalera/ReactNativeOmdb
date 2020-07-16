import React from "react";
import {Button} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import Home from "./src/screens/Home"
import Page1 from './src/screens/Page1'
import Page2 from './src/screens/Page2'



export default function App() {
  const Stack = createStackNavigator();
  
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} 
            options={{
                title: 'Omdb Movies',
                  headerStyle: {
                    backgroundColor: 'black',  
                  },
                  headerTintColor: 'yellow',
                  headerTitleAlign:"center",
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
              }} 
              />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


{/*

<Stack.Screen name="Page1" component={Page1} 
            options={{
              title: 'Results',
                headerStyle:{
                  backgroundColor: 'black',
                },
                headerTintColor: 'yellow',
                  headerTitleAlign:"center",
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            }} />
          <Stack.Screen name="Page2" component={Page2} 
          options={{
             headerRight:()=>(
             <Button 
             onPress={()=>alert("esto es un boton ")} 
             title="Boton"
             color="red"/>) 
          }}/> 

          */}