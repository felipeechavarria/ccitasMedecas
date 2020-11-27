
import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import CardComponent from './cardComponet'
import { useIsFocused } from '@react-navigation/native';

function ListDates({ navigation }) {
  const image = { uri: 'https://image.freepik.com/foto-gratis/colorido-surtido-medicina-background_43058-360.jpg' };
  const isFocused = useIsFocused();
  const [dates, setDates] = useState([]);
  const getDates = async () => {
    let res = await fetch('http:/192.168.1.17:4000/GetDates');
    let json = await res.json();
    setDates(json);

  }
  const detailsdates = (item) => {
    navigation.navigate('Cita', { dates: item });
  }
  useEffect(() => {
    console.log("isFocused" + isFocused)
    getDates();
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <TouchableHighlight style={styles.styleButton} onPress={() => navigation.navigate('Agendar Cita')}>
          <Text style={styles.textCreateButton}>Agendar Cita</Text>
        </TouchableHighlight>
        <FlatList data={dates}
          renderItem={({ item }) => <TouchableHighlight onPress={() => detailsdates(item)} style={styles.listButton}>
            <CardComponent date={item} />
          </TouchableHighlight>}
          keyExtractor={item => item._id.toString()} />
      </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0F7F8',
    flexDirection: "column",
    alignItems: "center"
  },
  styleButton: {
    backgroundColor: '#6336C2',
    padding: 15,
    width: Dimensions.get('screen').width * 0.9,
    alignItems: 'center',
    borderRadius: 80,
    marginTop: 20,
    marginBottom: 10
  },
  textCreateButton: {
    color: 'white',
    alignItems: 'center'
  },
  listButton: {
    marginTop: 5,
    padding: 5,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.9,
    backgroundColor: "white",
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 1,
    alignItems: 'center',

  },

});

export default ListDates;