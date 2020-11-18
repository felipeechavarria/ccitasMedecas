import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


function DetailDates({ route, navigation }) {
    console.log(route.params.dates);
    const { name, identification, lastname, phone, neighborhood, birthdate, city, _id } = route.params.dates;
    return (
        <View style={styles.container}>
            <View style={styles.datailcard}>
                <Text>Nombre: {name} {lastname}</Text>
                <Text>Identificacion: {identification}</Text>
                <Text>Telefono: {phone}</Text>
                <Text>Fecha de nacimiento: {birthdate}</Text>
                <Text>Ciudad: {city}</Text>
                <Text>Barrio: {neighborhood}</Text>
                <View style={styles.ButonView}>
                    <TouchableHighlight  style={styles.EditCrud}>
                        <Text style={styles.textCreateButton}>Modificar Cita</Text>
                    </TouchableHighlight>
                    <TouchableHighlight  style={styles.ButonCrud}>
                        <Text style={styles.textCreateButton}>Cancelar Cita</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems:'center',
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
        borderColor: "black",
        borderRadius: 5,
        borderWidth: 1,
        alignItems:'center',
        width: Dimensions.get('screen').width * 0.9

    },
    ButonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ButonCrud: {
        backgroundColor: 'red',
        padding: 15,
        width: Dimensions.get('screen').width * 0.4,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
        marginBottom:10,
        marginLeft:4
        
    },
    EditCrud: {
        backgroundColor: 'grey',
        padding: 15,
        width: Dimensions.get('screen').width * 0.4,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
        marginBottom:10,
        marginRight:4
    },
    textCreateButton: {
        color: 'white'
    }
});

export default DetailDates;