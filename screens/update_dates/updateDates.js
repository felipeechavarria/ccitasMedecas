
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';

function UpdateDates({ route, navigation }) {
    const image = { uri: 'https://image.freepik.com/foto-gratis/colorido-surtido-medicina-background_43058-360.jpg' };
    const { _id } = route.params.dates;
    const [identification, setidentification] = useState("");
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [birthdate, setbirthdate] = useState("");
    const [city, setcity] = useState("");
    const [neighborhood, setneighborhood] = useState("");
    const [phone, setphone] = useState("");
    const updateDates = async () => {
        if (name.length < 1 || identification.length < 1 || lastname.length < 1 || birthdate.length < 1 || city.length < 1 || neighborhood.length < 1 || phone.length < 1) {
            Alert.alert("No debe haber ningun campo vacio ")

        } else if (phone.length < 10) {
            Alert.alert("El telefono debe contener 10 digitos")
        }
        else {
            const res = await fetch(`http://192.168.1.17:4000/PutDate/${_id}`,
                {
                    method: "PUT",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: _id,
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
            Alert.alert("Modificacion exitosa. ")
            navigation.navigate("Inicio");
        }
    }
    useEffect(() => {
        setidentification(route.params.dates.identification);
        setname(route.params.dates.name);
        setlastname(route.params.dates.lastname);
        setbirthdate(route.params.dates.birthdate);
        setcity(route.params.dates.city);
        setneighborhood(route.params.dates.neighborhood);
        setphone(route.params.dates.phone)
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <TextInput keyboardType="numeric" style={styles.textInput} value={identification} onChangeText={text => setidentification(text)} placeholder="Identificacion"></TextInput>
                <TextInput style={styles.textInput} value={name} onChangeText={text => setname(text)} placeholder="Nombre"></TextInput>
                <TextInput style={styles.textInput} value={lastname} onChangeText={text => setlastname(text)} placeholder="Apellido"></TextInput>
                <TextInput style={styles.textInput} value={birthdate} onChangeText={text => setbirthdate(text)} placeholder="Fecha de nacimiento"></TextInput>
                <TextInput style={styles.textInput} value={city} onChangeText={text => setcity(text)} placeholder="Ciudad"></TextInput>
                <TextInput style={styles.textInput} value={neighborhood} onChangeText={text => setneighborhood(text)} placeholder="Barrio"></TextInput>
                <TextInput keyboardType="numeric" maxLength={10} style={styles.textInput} value={phone} onChangeText={text => setphone(text)} placeholder="Telefono"></TextInput>
                <TouchableHighlight style={styles.styleButton} onPress={updateDates} >
                    <Text style={styles.textCreateButton}>Modificar Cita</Text>
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
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 80,
        width: Dimensions.get('screen').width * 0.9,
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

export default UpdateDates;