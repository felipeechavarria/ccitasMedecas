
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import CardComponent from './cardComponet'
import {useIsFocused} from '@react-navigation/native';

function ListDates({ navigation }) {
  const isFocused = useIsFocused();
  const [dates, setDates] = useState([]);
  const getDates = async () => {
    let res = await fetch('http://192.168.1.6:4000/GetDates');
    let json = await res.json();
    setDates(json);

  }
  const detailsdates = (item)=>{
    navigation.navigate('details',{dates:item});
  } 
  useEffect(() => {
    console.log("isFocused"+ isFocused)
    getDates();
  },[isFocused]);
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.styleButton} onPress={() => navigation.navigate('create')}>
        <Text style={styles.textCreateButton}>Create Dates</Text>
      </TouchableHighlight>
      <FlatList data={dates}
        renderItem={({ item }) => <TouchableHighlight onPress={() => detailsdates(item)} style={styles.listButton}>
          <CardComponent date={item} />
        </TouchableHighlight>}
        keyExtractor={item => item.id} />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    alignItems: "center"
  },
  styleButton: {
    backgroundColor: 'blue',
    padding: 15,
    width: Dimensions.get('screen').width * 0.9,
    alignItems:'center',
    borderRadius:5,
    marginTop:10
  },
  textCreateButton: {
    color: 'white'
  },
  listButton: {
    marginTop: 5,
    padding: 5,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.9
  }

});

export default ListDates;