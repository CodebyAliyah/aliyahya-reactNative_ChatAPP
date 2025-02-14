import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from "./BackButton"

const GoBackButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Image 
        source={require('../../assets/icons/back_black.png')}
        style={styles.image} 
      />
      <Text style={styles.text}></Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;
