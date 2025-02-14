import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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