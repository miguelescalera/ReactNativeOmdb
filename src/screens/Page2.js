import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Page2 ({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 25 , borderColor: "teal" }}>
            <Text>Esta es la Pagina 2</Text>
            <Button title="ir al Home" onPress={()=>navigation.popToTop() } />
            <Button title="ir a la pagina 1" onPress={()=>navigation.navigate("Page1") } />
        </View>
    )
}
