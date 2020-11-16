
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
// import cardListDates from "./cardComponet";

function listDates({ navigation }) {
  const [dates, setDates] = useState([]);
  const getDates = async () => {
    let res = await fetch('http://192.168.1.1:4000/GetDates');
    let json = await res.json();
    setDates(json);
  }
  useEffect(() => {
    getDates();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.styleButton} onPress={() => navigation.navigate('create')}>
        <Text style={styles.textCreateButton}>Create Dates</Text>
      </TouchableHighlight>
      <FlatList
        data={dates}
        renderItem={({ item }) => <TouchableHighlight>
          <Text>laura</Text>
        </TouchableHighlight>}
        keyExtractor={item => item.id}
      ></FlatList>

    </View>
 
  );
}

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

export default listDates;