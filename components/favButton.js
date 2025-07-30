import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";

function favButton(props){
  return <Pressable onPress = {props.onPress}>
  <Ionicons name={props.icon} size={30} color={props.color} />
  </Pressable>
}

  export default favButton;