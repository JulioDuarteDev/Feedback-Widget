import { View, Text } from 'react-native';
import React from 'react';


import { styles } from './styles';

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}> Feito com ♥ por Julio Duarte </Text>
    </View>
  );
}