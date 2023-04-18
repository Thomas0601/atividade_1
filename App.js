import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [value, setValue] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (value === 'Ligado') {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Digite a palavra: Ligado"
        onChangeText={setValue}
        value={value}
      />
      {showMessage && (
        <Text style={styles.text}>Apresentando o texto.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 46,
    width: 350,
    borderWidth: 3,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderColor: 'black',
    backgroundColor: 'white',


  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});