
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

 function listDates({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight style = {styles.styleButton} onPress = {() => navigation.navigate('create')}>
          <Text style = {styles.textCreateButton}>Create Dates</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column"
  },
  styleButton:{
      backgroundColor:'blue',
      padding: 15,
      alignItems: 'center'
  },
  textCreateButton: {
    color:'white'
  }

});

export default listDates;