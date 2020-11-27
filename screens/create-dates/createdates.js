
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';


function CreateDates({ navigation }) {
    const image = { uri: 'https://image.freepik.com/foto-gratis/colorido-surtido-medicina-background_43058-360.jpg' };
    const [identification, setidentification] = useState("");
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [birthdate, setbirthdate] = useState("");
    const [city, setcity] = useState("");
    const [neighborhood, setneighborhood] = useState("");
    const [phone, setphone] = useState("");

    const createdates = async () => {
        if (name.length < 1 || identification.length < 1 || lastname.length < 1 || birthdate.length < 1 || city.length < 1 || neighborhood.length < 1 || phone.length < 1) {
            Alert.alert("No debe haber ningun campo vacio ")

        } else if (phone.length < 10) {
            Alert.alert("El telefono debe contener 10 digitos")
        }
        else {
            const res = await fetch('http://192.168.1.17:4000/DatePost',
                {
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
            Alert.alert("Cita agendada exitosamente. ")
            navigation.goBack()
        }
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <TextInput keyboardType="numeric" style={styles.textInput} onChangeText={text => setidentification(text)} placeholder="Identificacion"></TextInput>
                <TextInput style={styles.textInput} onChangeText={text => setname(text)} placeholder="Nombre"></TextInput>
                <TextInput style={styles.textInput} onChangeText={text => setlastname(text)} placeholder="Apellido"></TextInput>
                <TextInput style={styles.textInput} onChangeText={text => setbirthdate(text)} placeholder="Fecha de nacimiento"></TextInput>
                <TextInput style={styles.textInput} onChangeText={text => setcity(text)} placeholder="Ciudad"></TextInput>
                <TextInput style={styles.textInput} onChangeText={text => setneighborhood(text)} placeholder="Barrio"></TextInput>
                <TextInput keyboardType="numeric" maxLength={10} style={styles.textInput} onChangeText={text => setphone(text)} placeholder="Telefono"></TextInput>
                <TouchableHighlight style={styles.styleButton} onPress={createdates} >
                    <Text style={styles.textCreateButton}>Agregar Cita</Text>
                </TouchableHighlight>
            </ImageBackground>
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
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor: "white"
    },
    styleButton: {
        backgroundColor: '#6336C2',
        padding: 15,
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center',
        borderRadius: 80,
        marginTop: 20
    },
    textCreateButton: {
        color: 'white'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: Dimensions.get('screen').width * 1,
        alignItems: 'center',

    },

});

export default CreateDates;