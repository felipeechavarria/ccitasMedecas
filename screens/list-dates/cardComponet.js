import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


function cardListDates(props){
    const{identification,name} = props.dates;
    return (
        <View>
            <Text>{identification}</Text>
            <Text>{name}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: "column"
    },
    styleButton: {
      backgroundColor: 'blue',
      padding: 15,
      alignItems: 'center'
    },
    textCreateButton: {
      color: 'white'
    }
  
  });

export default cardListDates;