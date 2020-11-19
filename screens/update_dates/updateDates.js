
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { set } from 'react-native-reanimated';

function UpdateDates({route, navigation }) {
    const {_id } = route.params.dates;
    const [identification, setidentification] = useState();
    const [name, setname] = useState();
    const [lastname, setlastname] = useState();
    const [birthdate, setbirthdate] = useState();
    const [city, setcity] = useState();
    const [neighborhood, setneighborhood] = useState();
    const [phone, setphone] = useState();
    const updateDates = async () => {
        try {
            const res = await fetch(`http://192.168.1.6:4000/PutDate/${_id}`,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"  
                },
                body: JSON.stringify({
                    id:id,
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
            Alert.alert("Su cita fue agendadad nuevamente . ")
            navigation.navigate("Inicio");
        } catch (error) {
            alert(error)
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
      },[]);

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} value= {identification} onChangeText={text => setidentification(text)} placeholder="Identificacion"></TextInput>
            <TextInput style={styles.textInput} value= {name} onChangeText={text => setname(text)} placeholder="Nombre"></TextInput>
            <TextInput style={styles.textInput} value= {lastname} onChangeText={text => setlastname(text)} placeholder="Apellido"></TextInput>
            <TextInput style={styles.textInput} value= {birthdate} onChangeText={text => setbirthdate(text)} placeholder="Fecha de nacimiento"></TextInput>
            <TextInput style={styles.textInput} value= {city} onChangeText={text => setcity(text)} placeholder="Ciudad"></TextInput>
            <TextInput style={styles.textInput} value= {neighborhood} onChangeText={text => setneighborhood(text)} placeholder="Barrio"></TextInput>
            <TextInput style={styles.textInput} value= {phone} onChangeText={text => setphone(text)} placeholder="Telefono"></TextInput>
            <TouchableHighlight style={styles.styleButton} onPress={updateDates} >
                <Text style={styles.textCreateButton}>Actualizar Cita</Text>
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

export default UpdateDates;