import React, { FC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { buttonStyle } from './Button.style';

interface ButtonProps{
  buttonText:string,
  onClick:()=>void,
  disabled?:boolean
}
const Button: FC<ButtonProps> = ({buttonText,onClick,disabled}) => {

  return (
        <TouchableOpacity disabled={disabled?disabled:false} onPress={onClick} style={buttonStyle.button}>
          <Text style={buttonStyle.text}>{buttonText}</Text>
        </TouchableOpacity>
  );
};



export default Button;