import { Pressable, View, Text, StyleSheet, ScrollView, Image, ActivityIndicator} from 'react-native';
import { useLayoutEffect, useState, useEffect } from 'react';
import FavButton from '../components/favButton';

function Details(props) {
  const URL = props.route.params.current.url;
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const {current} = props.route.params;

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return <FavButton icon="heart" color="red" />;
      },
    });
  });

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const TypeColor = (type) => {
    const typeColors = {
      fire: 'orange',
      water: 'blue',
      grass: 'green',
      electric: '#e0e011',
      default: '#a8a84f',
    };
   if (typeColors[type]) {
      return typeColors[type];
    } 
    else {
      return typeColors.default;
    }
  };

  const StatColor = (statName) => {
    const statColors = {
      hp: 'green',
      attack: 'blue',
      defense: 'yellow',
      'special-attack' : 'orange',
      'special-defense': 'purple',
      speed: 'red',
      default: 'grey',
    };
    if (statColors[statName]) {
      return statColors[statName];
    } else {
      return statColors.default;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (<ActivityIndicator />) : (<View>
          <View style={[styles.color, { backgroundColor: TypeColor(data.types[0].type.name)}]}>
          <Text style={styles.pokemonId}>#{data.id}</Text>
          <View style={styles.center} >
          <Image style={{ width: 150, height: 150 }} source={{ uri: current.image }} />
          <Text style={styles.pokemonName}>{data.name.toUpperCase()}</Text>
            <Text style={styles.text}>Weight: {data.weight / 10} KG</Text>
            <Text style={styles.text}>Height: {data.height / 10} M</Text>
            </View>
          </View>
          <View style={styles.headingContainer}>
          <Text style={styles.heading}>Types</Text>
          <View style={styles.row}>{data.types.map((typeInfo) => (
                <Text style={[styles.info, { backgroundColor: TypeColor(typeInfo.type.name) }]}>{typeInfo.type.name}</Text>
              ))}
          </View>
          </View>

          
          <View style={styles.headingContainer}>
          <Text style={styles.heading}>Abilities</Text>
          <View style={styles.row}>
          {data.abilities.map((abilityInfo) => (
          <Text style={styles.info} >{abilityInfo.ability.name} </Text>
           ))}
          </View>
          </View>
          <View style={styles.statsContainer}>
          <Text style={styles.statsHeader}>Base Stats</Text>
          {data.stats.map((stat) => (
          <View style={styles.statRow}>
                <Text style={styles.statName}> {stat.stat.name.toUpperCase()}</Text>
                <View style={styles.statBarBG}>
                <View style={[styles.statBar,{
                        width: (stat.base_stat / 255) * 100 + '%', backgroundColor: StatColor(stat.stat.name),},]}/>
                </View>
                <Text style={styles.statScore}>{stat.base_stat}/255</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  color: {
    paddingBottom: 20,
    paddingTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: '100%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10, 
    marginRight: 20, 
    textAlign: 'right',
},
  pokemonName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  headingContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff8dc',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  info: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    color: '#fff',
    marginHorizontal: 5,
    fontSize: 14,
    textTransform: 'capitalize',
  },
  statsContainer: {
    width: '90%',
    marginTop: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  statsHeader: {
    fontSize: 20,
    color: '#fff8dc',
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginBottom: 15,
  },
  statName: {
    width: 60,
    color: '#eee8aa',
    fontSize: 12,
  },
  statBarBG: {
    flex: 1,
    height: 10,
    backgroundColor: '#444',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  statBar: {
    height: 10,
    borderRadius: 5,
  },
  statScore: {
    width: 50,
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Details;
