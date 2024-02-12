import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native"
import React from "react"

const RepositoryStats = (props) => {
    return(
        <View style={styles.flex}>
            <View>
                <Text style={styles.bold}>Languaje:</Text>
                <Text style={styles.center}>{props.languaje}</Text>
            </View>
            <View>
                <Text style={styles.bold}>Forks Counts: </Text>
                <Text style={styles.center}>{props.forksCount}</Text>
            </View>
        </View>
    )
}

//Aquí estilo los items de mi lista
//Le paso cada item con props (parámetros)
//TouchableOpacity & Linking = <a>
const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <View style={styles.left}>
            <Image style={styles.image} source={{uri: props.url}}/>
            <Text style={styles.strong}>{props.fullname}</Text>
        </View>
    
        <Text style={styles.text}>{props.description}</Text>

        <TouchableOpacity onPress={() => Linking.openURL(props.url)}>
            <Text style={styles.button}>Ver repositorio</Text>
        </TouchableOpacity>

        <RepositoryStats {...props}/>
    </View>
)

//Simula hoja estilos. No se puede global
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 10,
        paddingTop: 5,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    strong: {
        fontWeight: "bold",
        marginBottom: 5,
        color: "blue"
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
        color: "#333333"
    },
    bold: {
        fontWeight: "bold",
        textAlign: "center"
    },
    blue: {
        color: "blue"
    },
    small: {
        fontSize: 16,
        marginBottom: 5,
        color: "#5c5c5c"
    },
    flex: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    left: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 15
    },
    center: {
        textAlign: "center"
    },
    button: {
        color: "white",
        backgroundColor: "blue",
        borderRadius: 4,
        overflow: "hidden",
        alignSelf: "flex-start",
        padding: 5,
        marginVertical: 15
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
        marginRight: 10
    }

})

export default RepositoryItem