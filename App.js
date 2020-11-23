import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateDates from './screens/create-dates/createdates';
import DetailDates from './screens/detail-dates/detailDates';
import ListDates from './screens/list-dates/listdates';
import UpdateDates from './screens/update_dates/updateDates';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  style={styles.container} name="Inicio" component={ListDates} />
        <Stack.Screen  style={styles.container} name="Agendar Cita" component={CreateDates} />
        <Stack.Screen  style={styles.container} name="Cita" component={DetailDates} />
        <Stack.Screen  style={styles.container} name="Modificar Cita" component={UpdateDates} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0F7F8',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default App;