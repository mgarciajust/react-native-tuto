import { View, Text } from "react-native"
import React from "react"

//Aquí estilo los items de mi lista
//Le paso cada item con props (parámetros)
const RepositoryItem = (props) => (
    <View
        key={props.id}
        style={
            {
                padding: 20,
                paddingBottom: 10,
                paddingTop: 5
    }}>
        <Text
            style={
                {
                    fontWeight: "bold",
                    marginBottom: 5
        }}>   
            {props.id}
        </Text>
        <Text>{props.fullname}</Text>
        <Text>{props.description}</Text>
        <Text>{props.languaje}</Text>
        <Text>{props.forksCount}</Text>
        <Text>{props.url}</Text>
    </View>

)

export default RepositoryItem