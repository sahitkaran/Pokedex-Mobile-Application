import { Pressable, View, Text, StyleSheet, FlatList, Image, Button, TextInput } from "react-native";
import {useEffect, useState} from 'react';
import { POKEMON } from "../assets/pokemon_data";

function List(props) {

  const [filter, setFilter] = useState();
  const [display, setDisplay] = useState(POKEMON);

  function updateFilter(txt) {
    setFilter(txt);
    let filteredPokemon = POKEMON.filter(t => t.name.toLowerCase().includes(txt.toLowerCase()));
    setDisplay(filteredPokemon);
    }
   
  function clearFilter() {
    setFilter("");
    setDisplay(POKEMON);
  }

    function showPokemon() {
      props.navigation.navigate("Details", {});
    }

    function renderCard(data) {

      var current = data.item;

      return(<View style={styles.card}><Pressable onPress={() => props.navigation.navigate("Details", {current})}>
        <Image style={{width: 100, height: 100}} source={{uri: current.image}}/>
        <Text style={{fontSize: 20}}>{current.name}</Text>
        </Pressable>
        </View>
      )
    }

    // <Button title="View Pokemon Details" onPress={showPokemon}/>

    return <View style={styles.container}>   
           <View style={styles.header}>
           <TextInput style={styles.filterInput} onChangeText={updateFilter} value={filter}></TextInput>
           <Button title="Clear" onPress={clearFilter}/>
           </View>
            
            <FlatList 
              numColumns={2}
              keyExtractor={(item) => item.id}
              data={display} 
              renderItem={renderCard} 
              style={{width: '100%'}}/>
        </View>
        
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'top',
      flex: 1,

    },
    header: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 5,
      flexDirection : 'row',
      alignItems: 'center',
    },
    filterInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor : 'black',
    padding: 8,
    marginRight: 10,
    flex : 1,
    },

    desc: {
        fontSize: 18,
        padding: 10,
        lineHeight: 30,
        textAlign: 'center'
      },
      card: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
        flex: 1,
        backgroundColor: '#00b5ec',
        elevation: 4,
      }
  });

export default List;