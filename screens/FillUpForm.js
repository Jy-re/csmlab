import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FillUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Another Screen!</Text>
      <Text style={styles.randomText}>Random text: Lorem ipsum dolor sit amet.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  randomText: {
    fontSize: 16,
  },
});

export default FillUp;
