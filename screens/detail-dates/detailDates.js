import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, ImageBackground, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


function DetailDates({ route, navigation }) {
    const image = { uri: 'https://image.freepik.com/foto-gratis/colorido-surtido-medicina-background_43058-360.jpg' };
    // const images = { uri: '.../assets/z.jpg' };
    console.log(route.params.dates);
    const { name, identification, lastname, phone, neighborhood, birthdate, city, _id } = route.params.dates;
    // falta bonton de confirmar eliminacion
    const confirmDates = async () => {
        Alert.alert(
            "Seguro",
            "Requerimos su confirmacion para Cancelar esta Cita ",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deletedates() }
            ],
            { cancelable: false }
        )
    };
    const deletedates = async () => {
        try {
            const res = await fetch(`http://192.168.1.17:4000/Deletedate/${_id}`,
                {
                    method: "DELETE"
                })
            const data = await res.json();
            console.log(data);
            Alert.alert("La Cita a sido cancelada exitosamente. ")
            navigation.goBack();
        } catch (error) {
            alert(error)
        }
    }
    const updateDates = () => {
        navigation.navigate('Modificar Cita', { dates: route.params.dates })
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.datailcard}>
                    <Text>Nombre: {name} {lastname}</Text>
                    <Text>Identificacion: {identification}</Text>
                    <Text>Telefono: {phone}</Text>
                    <Text>Fecha de nacimiento: {birthdate}</Text>
                    <Text>Ciudad: {city}</Text>
                    <Text>Barrio: {neighborhood}</Text>
                    <View style={styles.ButonView}>
                        <TouchableHighlight onPress={updateDates} style={styles.EditCrud}>
                            <Text style={styles.textCreateButton}>Modificar Cita</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={confirmDates} style={styles.ButonCrud} >
                            <Text style={styles.textCreateButton}>Cancelar Cita</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.contdoc1}>
                    <View style={styles.contdoc}>
                        <View style={styles.textdoc}>
                            <Text style={styles.textdoc}>Doctor </Text>
                            <Text style={styles.textdoc}>Juan Zabala </Text>
                            <Text style={styles.textdoc}>Urologo</Text>
                        </View>
                        <Image
                            source={require('./z.jpg')}
                            style={styles.doc}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: 'center',
    },
    styleButton: {
        backgroundColor: 'blue',
        padding: 15,
        alignItems: 'center'
    },
    textCreateButton: {
        color: 'white'
    },
    datailcard: {
        borderColor: "#FADADA",
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor: "#FADADA",
        color: "white",
        marginTop: 50
    },
    ButonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ButonCrud: {
        backgroundColor: '#F94545',
        padding: 15,
        width: Dimensions.get('screen').width * 0.4,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 4

    },
    EditCrud: {
        backgroundColor: '#6336C2',
        padding: 15,
        width: Dimensions.get('screen').width * 0.4,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 4
    },
    textCreateButton: {
        color: 'white'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        //   justifyContent: 'center',
        width: Dimensions.get('screen').width * 1,
        alignItems: 'center'

    },
    doc: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    contdoc: {
        flexDirection: "row"
    },
    contdoc1: {
        flexDirection: "column",
        marginTop: 80,
        marginLeft: 100,
        width: Dimensions.get('screen').width * 0.55,
        backgroundColor: "#FADADA",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textdoc: {
        backgroundColor: "#FADADA",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginRight: 10


    }
});

export default DetailDates;