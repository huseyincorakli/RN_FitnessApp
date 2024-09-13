import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MainPage: FC = (props:any) => {
const user = props.route.params.user;

  return (
      <View style={styles.container}>
        <Text>HOŞGELDİNİZ</Text>
        <Text>AD SOYAD: {user.nameSurname}</Text>
        <Text>E-POSTA : {user.email}</Text>
        <Text>BOY:{user.height}</Text>
        <Text>KİLO: {user.weight}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainPage;