import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    width: 100,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default GoBackButton;
