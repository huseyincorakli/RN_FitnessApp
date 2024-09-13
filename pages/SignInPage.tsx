import React, { FC, useEffect, useState } from 'react';
import {  Alert, StyleSheet, Text } from 'react-native';
import Input from '../components/Input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button/Button';

const SignInPage: FC = (props:any) => {
 const [nameSurname,setNameSurname]=useState<string>('')
 const[email,setEmail]=useState<string>('')
 const[weight,setWeight]=useState<number>(0)
 const[height,setHeight]=useState<number>(0)
 const[loading,setLoading]=useState<boolean>(false)
 const [buttonText,setButtonText]=useState<string>('Kaydı Tamamla')
const [buttonDisable,setButtonDisable]=useState<boolean>(false)

  useEffect(()=>{
    if (loading) {
      setButtonText('Bekleyiniz...')
      setButtonDisable(true)
    }
    else{
      setButtonText('Kaydı Tamamla')
      setButtonDisable(false)
    }
  },[loading])
 const handleSubmit=()=>{
  if (!nameSurname || !email) {
    Alert.alert('Form değerleri boş olamaz!')
    return;
  }
  if( weight<=0 ||height<=0){
    Alert.alert('Form değerleri sıfırdan büyük olmalıdır!')
    return;
  }
  

  const user={
    nameSurname,
    email,
    weight,
    height
  }
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  props.navigation.navigate('Main Page',{user})
  }, 3000);
 }
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Üye Kaydı Oluştur</Text>
        <Input key={'setNameSurname'} label='Üye Adı ve Soyadı' placeholder='Adınızı ve soyadınızı giriniz' onChangeText={setNameSurname}/>
        <Input  key={'setEmail'} label='Üye E-posta' placeholder='E-postanızı giriniz' onChangeText={setEmail}/>
        <Input key={'setWeight'} keyboardType='number-pad' label='Üye Kilosu' placeholder='Kilonuzu giriniz' onChangeText={setWeight}/>
        <Input key={'setHeight'} keyboardType='number-pad' label='Üye Boyu' placeholder='Boyunuzu giriniz' onChangeText={setHeight}/>
        <Button disabled={buttonDisable} buttonText={buttonText} onClick={handleSubmit}/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:10  
  },
  headerText:{
    alignSelf:'center',
    fontSize:20,
    marginTop:2,
    fontWeight:'400'
  }
});

export default SignInPage;