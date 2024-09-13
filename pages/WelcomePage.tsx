import React, { FC, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button/Button';
import { SafeAreaView } from 'react-native-safe-area-context';


const WelcomePage: FC = (props:any) => {
const goToSignIn = ()=>{
     props.navigation.navigate('Sign In Page')
}
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Kepap Fitness Salonu</Text>
        </View>
        <Button buttonText='Üye kaydı oluştur' onClick={goToSignIn}/>
        
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal:5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
     padding:15,
  },
  headerText:{
     fontSize:30,
     fontWeight:'bold'
  }
});

export default WelcomePage;