import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function PrimaryButton({children, onEnter}) {
  
  function pressHandler(){
    console.log('Pressed');
  }

  return (
    <View style={styles.buttonOuterContainer}>
    <Pressable
    style={({pressed}) => pressed ? [styles.buttonInnercontainer, styles.pressed] : styles.buttonInnercontainer} 
    onPress={onEnter}
    android_ripple={{color: '#640233'}}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnercontainer: {
    backgroundColor: '#72063c',
    
    paddingVertical: 8,
    paddingHorizontal: 16,
    
    elevation: 2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75 
  },
})