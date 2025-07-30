import { StyleSheet, View, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image
          source={require('../assets/pokemonImage.jpg')} 
          style={styles.profileImage}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default CustomDrawerContent;
