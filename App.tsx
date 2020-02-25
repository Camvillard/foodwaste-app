import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Form } from './components/form.component';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>j'ai créé  ma première app avec react native !</Text>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
