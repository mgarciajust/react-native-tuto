import { View, Text, StyleSheet } from "react-native"
import React from "react"

//Aquí estilo los items de mi lista
//Le paso cada item con props (parámetros)
const RepositoryItem = (props) => (
    <View
        key={props.id}
        style={styles.container}>

        <Text
            style={styles.strong}>
            {props.id}
        </Text>
        <Text>{props.fullname}</Text>
        <Text>{props.description}</Text>
        <Text>{props.languaje}</Text>
        <Text>{props.forksCount}</Text>
        <Text>{props.url}</Text>
    </View>

)

//Simula hoja estilos. No se puede global
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 10,
        paddingTop: 5
    },
    strong: {
        fontWeight: "bold",
        marginBottom: 5,
        color: "blue"
    },    
})

export default RepositoryItem