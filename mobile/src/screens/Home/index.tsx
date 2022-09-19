import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import Logo from '../../assets/logo-nlw-esports.png';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo}/>
    </View>
  );
}