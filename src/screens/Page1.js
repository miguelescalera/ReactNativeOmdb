import React from 'react'
import { ScrollView, Text, Image, View, StyleSheet, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

export default function Page1 (){    

    return(
        !Results ?
        (
            <ScrollView style={{...styles.results, textAlign:"center"}}>
                <ActivityIndicator size="large" color="#00ff00" />
            </ScrollView>
        ):(
        <ScrollView style={styles.results}>
            <View style={{flex: 1, alignItems:"center"}}>
            <TextInput 
                style={styles.styleinput} 
                />
            </View>
        {Results.map(R=>{
            return (
                <View key={R.imdbID} style={styles.result} >
                    <Image style={styles.image} source={{uri:R.Poster}} />
                    <Text style={styles.title} > {R.Title} </Text>
                </View>
                )
            })}
        </ScrollView>
        )
    )
}
const styles = StyleSheet.create({
    results:{
        flex:1, 
        backgroundColor:"black",
    },
    result:{
        flex: 1,
        width:"57%",
        marginBottom: 20,
        borderColor:"yellow",
        borderWidth: 2
    },
    title:{
        color:"white",
        fontSize: 18,
        fontWeight: "700",
        padding: 20
    },
    image:{
        width: 300,
        height: 300
    },
    styleinput:{
        flex: 1,
        height: 40,
        width: "50%",
        marginTop: 10,
        backgroundColor:"black", 
        borderColor:"yellow", 
        borderWidth: 3,
        color: "white", 
        textAlign: "center", 
        borderRadius: 10,
    }
})