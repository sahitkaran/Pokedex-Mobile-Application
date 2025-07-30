import { Pressable, View, Text, StyleSheet, ScrollView, Image, Button } from "react-native";

function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>WELCOME TO POKEDEX</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start', // Use 'flex-start' instead of 'top'
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
        marginTop: 20,
    },
});

export default Home;
