import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { SecondScreenProps } from '../types/navigation';

const SecondScreen = ({ navigation }: SecondScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seconde page !</Text>
      <Button
        title="Retour"
        onPress={() => navigation.navigate('Home')}
      />
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
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SecondScreen;
