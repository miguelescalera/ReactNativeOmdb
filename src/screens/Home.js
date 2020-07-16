import React, { useState } from "react"
import axios from 'axios'
import { View, ImageBackground, StyleSheet, Image, ActivityIndicator, Text, SafeAreaView, Modal} from "react-native"
import { TextInput, ScrollView, TouchableHighlight } from "react-native-gesture-handler"

export default function Home (){

    const apiurl = "https://www.omdbapi.com/?apikey=20dac387"
    const [state, setState] = useState({
        input:null,
        results:[],
        selected:null
    })

    const search = () => {
        console.log("estadoo", state.input)
        axios(apiurl + "&s=" + state.input).then(({data})=>{
            let movies = data.Search
            setState(prevState => {
                return  {...prevState, results: movies}
            })
            console.log("sisi", state.results)
        })
    }

    const openModal = id =>{
        axios(apiurl + "&i=" + id).then(({ data })=>{
            let movie = data;
            setState(prevState => {
                return {...prevState, selected:movie }
            })
        })
    }

    return(
        <View>
                <ImageBackground style={styles.imgstyle} source={{uri:"https://i.pinimg.com/originals/bc/a3/c0/bca3c0b298f78d0889e4b0d98aed19f3.jpg"}}> 
                <View style={{flex: 1, marginTop: 40,alignItems:"center"}} >
                    <TextInput 
                        style={styles.styleinput} 
                        onChangeText={text=>setState({input:text})}
                        onSubmitEditing={search}
                        placeholder="Ingrese su Busqueda"
                     />
                </View>
                {!state.results ? (
                <ScrollView style={{ textAlign:"center"}}>
                    <ActivityIndicator size="large" color="#00ff00" />
                </ScrollView>
                ):(
                    <SafeAreaView style={{alignItems:"center", marginTop: 50, marginBottom:40}}>
                        
                <ScrollView >
                    {state.results.map(R=>(
                        <TouchableHighlight
                        key={R.imdbID}
                        onPress={()=>openModal(R.imdbID)}
                        >
                        <View style={{...styles.result, backgroundColor:"black", marginTop: 10}} >
                            <Image style={styles.image} source={{uri: R.Poster}} resizeMode="contain" />
                            <Text style={styles.title} > { R.Title } </Text>
                        </View>
                    </TouchableHighlight>
                    ))}
                </ScrollView>

                        {(state.selected != null)?(

                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={(typeof state.selected == {} )}
                >
                    <View>
                    <Text>{state.selected.Title}</Text>
                    <Text>Rating: {state.selected.imdbRating}</Text>
                    <Text>{state.selected.Plot}</Text>
                    </View>
                    <TouchableHighlight
                    onPress={()=>{setState(prevState=>{
                        return { ...prevState, selected:{}}
                        })}}>
                        <Text>close</Text>
                    </TouchableHighlight>
                </Modal>
                ):(
                    null
                )}

                </SafeAreaView>
                
                )}
                </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    imgstyle:{
        width: "100%", 
        height:"100%"
    },
    styleinput:{
        height: 40,
        width: "50%",
        marginTop: 10,
        backgroundColor:"black", 
        borderColor:"yellow", 
        borderWidth: 3,
        color: "white", 
        textAlign: "center", 
        borderRadius: 10
    },
    result:{
        flex: 1,
        width:"100%",
    },
    title:{
        color:"white",
        fontSize: 18,
        fontWeight: "700",
        padding: 20, 
        textAlign:"center"
    },
    image:{
        width: 300,
        height: 300
    }
})