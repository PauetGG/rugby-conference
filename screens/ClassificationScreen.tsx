import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClassificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Clasificación</Text>
    </View>
  );
};

export default ClassificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A4D2E',
  },
});
