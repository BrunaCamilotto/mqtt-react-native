
import {useEffect, useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect, sendMessage } from './src/services/mqttservice'

export default function App() {

  const [message, setMessage] = useState()
  const [topic, setTopic] = useState('teste')
  const handleSend = () => {
    sendMessage(topic, message)
  }
  useEffect(() => {
    connect()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mqtt + React - Native</Text>
      <TextInput
        style={styles.input}
        placeholder='Insira o tópico'
        value={topic}
        onChangeText={setTopic}
      />
      <TextInput
        style={styles.input}
        placeholder='Insira a mensagem'
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity onPress={handleSend} style={styles.button}>
        <Text>Enviar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 36
  },
  title: {
    fontSize: 20,
    color: '#000',
    textTransform: 'uppercase',
    padding: 12,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#eee',
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
    fontSize: 16,
    color: '#000',
  },
  button:{
    width: '30%',
    height: 45,
    backgroundColor: '#fee',
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
