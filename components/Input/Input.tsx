import React, { FC } from 'react';
import {  KeyboardTypeOptions, Text, TextInput, View } from 'react-native';
import { inputStyle } from './Input.style';

interface InputProps{
label:string,
placeholder:string,
onChangeText:(input:any)=>void,
keyboardType?:KeyboardTypeOptions | undefined
}

const Input: FC<InputProps> = ({label,placeholder,onChangeText,keyboardType}) => {

  return (
        <View >
          <Text style={inputStyle.label}>{label}</Text>
          <TextInput keyboardType={keyboardType?keyboardType:'default'} style={inputStyle.input} placeholder={placeholder} cursorColor={'#84A7A1'} placeholderTextColor={'gray'} onChangeText={onChangeText}/>
        </View>
  );
};



export default Input;