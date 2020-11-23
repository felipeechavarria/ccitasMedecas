import React, { useEffect, useState } from 'react';
import { Linking, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';


function CardComponent(props) {
  const { name, identification, lastname } = props.date;
  return (
    <View>
      <Text>{name} {lastname}</Text>
      <Text>{identification}</Text>
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

export default CardComponent;