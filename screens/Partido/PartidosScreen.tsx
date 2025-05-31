import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PartidosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Partidos</Text>
    </View>
  );
};

export default PartidosScreen;

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
