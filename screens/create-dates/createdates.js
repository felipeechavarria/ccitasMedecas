
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';
// const API = process.env.REACT_APP_API;

function createDates({ navigation }) {
    const [identification, setidentification] = useState();
    const [name, setname] = useState();
    const [lastname, setlastname] = useState();
    const [birthdate, setbirthdate] = useState();
    const [city, setcity] = useState();
    const [neighborhood, setneighborhood] = useState();
    const [phone, setphone] = useState();
    const createDates = async () => {
        try {
            const res = await fetch("http://localhost:5000/DatePost", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    identification: identification,
                    name: name,
                    lastname: lastname,
                    birthdate: birthdate,
                    city: city,
                    neighborhood: neighborhood,
                    phone: phone,
                })
            });
            await res.json();
            Alert.alert('Error:', error.message)
            navigation.goBack();
        } catch (error) {
            alert(error)
        }
    }



    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} onChangeText={text => setidentification(text)} placeholder="Identificacion"></TextInput>
            <TextInput style={styles.textInput} onChangeText={text => setname(text)} placeholder="Nombre"></TextInput>
            <TextInput style={styles.textInput} onChangeText={text => setlastname(text)} placeholder="Apellido"></TextInput>
            <TextInput style={styles.textInput} onChangeText={text => setbirthdate(text)} placeholder="Fecha de nacimiento"></TextInput>
            <TextInput style={styles.textInput} onChangeText={text => setcity(text)} placeholder="Ciudad"></TextInput>
            <TextInput style={styles.textInput} onChangeText={text => setneighborhood(text)} placeholder="Barrio"></TextInput>
            <TextInput style={styles.textInput} onChangeText={text => setphone(text)} placeholder="Telefono"></TextInput>
            <TouchableHighlight style={styles.styleButton} onPress={createDates} >
                <Text style={styles.textCreateButton}>Create Dates</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInput: {
        marginTop: 5,
        padding: 15,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        width: Dimensions.get('screen').width * 0.9
    },
    styleButton: {
        backgroundColor: 'grey',
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 20
    },
    textCreateButton: {
        color: 'white'
    }
});
}
export default createDates;