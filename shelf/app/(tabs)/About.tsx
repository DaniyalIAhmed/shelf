import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
      <Text style={styles.subtitle}>This is the About tab with some information!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
})

export default About