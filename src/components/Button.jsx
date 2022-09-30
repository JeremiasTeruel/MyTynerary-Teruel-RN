import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button({navigation}) {
    const title = 'Show Me' 
    const pressBtn = () => {
        navigation.navigate('Cities')
    }
    return (
        <View style={{ alignItems:'center'}}>
        <Pressable style={styles.button} >
        <Text style={styles.text} onPress={pressBtn}>{title}</Text>
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#1E212D',
    borderRadius: 15,
    marginBottom: 20
    },
    text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center'
    },
})